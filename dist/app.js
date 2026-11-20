(() => {
  'use strict';
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const data = window.RFA_DATA;
  if (!data?.nodes?.length) { $('#flashcard').textContent = 'The atlas could not load. Please reload this page.'; return; }
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const norm = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/ℓ/g,'l').replace(/ᵖ/g,'p');
  const nodes = new Map(data.nodes.map(n => [n.id,n]));
  const isAhead = n => n?.coverage==='ahead';
  const isOral = n => !!n?.oralQuestions?.length;
  const questions = new Map(data.oralExam.questions.map(q=>[q.id,q]));
  const oralLabels = n => (n?.oralQuestions||[]).join(' · ');
  let oralOnly=false, oralKind='all';
  const matchesOral = n => isOral(n)&&(oralKind==='all'||n.oralQuestions.some(id=>questions.get(id).kind===oralKind));
  const oralKindLabel = () => oralKind==='long-form'?'long-form':oralKind==='regular'?'regular oral':'oral';
  const chapterOf = n => n.chapter || n.section.split('.')[0];
  const chapters = new Map(data.chapters.map(c => [c.id,c]));
  const topicOf = id => data.nodes.find(n => n.section === id && n.type === 'topic');
  const edges = [...data.edges];
  data.nodes.filter(n=>n.type!=='topic').forEach(n=>{
    const t=topicOf(n.section);
    if(t&&!edges.some(e=>e.from===n.id&&e.to===t.id)) edges.push({from:n.id,to:t.id,label:'part of',reason:`${n.title} belongs to the ${t.title} section.`});
  });
  // Keep the original key so existing Chapter 1 review progress survives.
  const STORE = 'rfa-atlas-chapter-1-v1';
  let progress = {}, storageOK = true;
  function readProgress(raw){const p=JSON.parse(raw||'{}');return p&&typeof p==='object'&&!Array.isArray(p)?Object.fromEntries(Object.entries(p).filter(([id,v])=>nodes.has(id)&&['again','known','reviewed'].includes(v))):{};}
  try {progress=readProgress(localStorage.getItem(STORE));} catch {storageOK=false;}
  let chapter='1', section='1.1', query='', type='all', status='all', coverage='all', mode='graph', workspaceView='split', revealed=false;
  let selected=data.nodes.find(n=>n.title.toLowerCase().includes('metric space')&&n.type==='definition')?.id || data.nodes.find(n=>n.section===section&&n.type!=='topic')?.id || data.nodes[0].id;
  let initialHash='';try{initialHash=decodeURIComponent(location.hash.slice(1));}catch{}
  if(nodes.has(initialHash)){selected=initialHash;section=nodes.get(selected).section;chapter=chapterOf(nodes.get(selected));}
  let visible=[], positions=new Map(), graphBounds={w:700,h:500}, zoom=1, pan={x:0,y:0}, drag=null, toastTimer;
  let graphSize={w:700,h:500}, layoutKey='';
  const arrangements=new Map();
  const math = el => {
    if(window.renderMathInElement) window.renderMathInElement(el,{delimiters:[{left:'\\[',right:'\\]',display:true},{left:'\\(',right:'\\)',display:false},{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false,strict:'ignore',trust:false});
  };
  const lectureDate=d => new Date(d+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
  const lectureDates=n=>[...new Set((n.lectures||[]).map(l=>l.date))].sort().map(lectureDate).join(', ');
  const related=id=>edges.filter(e=>e.label!=='part of'&&(e.from===id||e.to===id));
  const inverseLabels={'uses':'used by','implies':'implied by','specialises':'special case','characterises':'characterised by','strengthens':'strengthened by','establishes':'established by','extends':'extended by','illustrates':'illustrated by','preserves':'preserved by','supports':'supported by','sufficient for':'sufficient condition','contrasts with':'contrasts with','compares with':'compares with','parallels':'parallels'};
  function announce(s){$('#announcement').textContent=s;}
  function toast(s){clearTimeout(toastTimer);$('#toast').textContent=s;$('#toast').hidden=false;toastTimer=setTimeout(()=>$('#toast').hidden=true,4500);}
  function save(){try{localStorage.setItem(STORE,JSON.stringify(progress));storageOK=true;}catch{storageOK=false;toast('Browser storage is unavailable. Your progress will last for this visit.');}}
  function filterNodes(){return data.nodes.filter(n=>(query?norm(n.title+' '+n.reference+' '+n.section).includes(norm(query)):chapterOf(n)===chapter&&(section==='all'||n.section===section))&&(!oralOnly||matchesOral(n))&&(type==='all'||n.type===type)&&(coverage==='all'||(coverage==='ahead'?isAhead(n):!isAhead(n)))&&(status==='all'||(status==='new'?!progress[n.id]:status==='reviewed'?!!progress[n.id]:progress[n.id]===status)));}
  function renderNav(){
    const current=chapters.get(chapter);
    const chapterPool=data.nodes.filter(n=>chapterOf(n)===chapter&&(!oralOnly||matchesOral(n)));
    $('#random-scope option[value="chapter"]').textContent='Chapter '+chapter+' · '+chapterPool.length+(oralOnly?' '+oralKindLabel()+' cards':' cards');
    $('#random-scope option[value="all"]').textContent=oralOnly?'All '+oralKindLabel()+' cards · '+data.nodes.filter(matchesOral).length:'All notes';
    const randomPool=data.nodes.filter(n=>(!oralOnly||matchesOral(n))&&($('#random-scope').value==='all'||chapterOf(n)===chapter));
    $('#random').disabled=!randomPool.some(n=>n.id!==selected);
    $('#oral-only').checked=oralOnly;
    $('#oral-kind').disabled=!oralOnly;$('#oral-kind').value=oralKind;
    const chapterQuestions=data.oralExam.questions.filter(q=>q.chapter===chapter);
    const regular=chapterQuestions.filter(q=>q.kind==='regular').length,longForm=chapterQuestions.length-regular;
    $('#oral-help').textContent='Chapter '+chapter+': '+regular+' regular + '+longForm+' long-form questions. Choose '+data.oralExam.longFormChoices[chapter]+' long-form for the exam. Amber marks matching cards; LF means long-form.';
    $('#chapters').innerHTML=data.chapters.map(c=>`<button class="chapter-button ${c.id===chapter?'active':''}" data-chapter="${c.id}" aria-label="Chapter ${c.id}: ${esc(c.title)}${c.partial?', notes in progress':''}" aria-pressed="${c.id===chapter}"><span>CH ${c.id.padStart(2,'0')}</span><strong>${esc(c.shortTitle)}</strong>${c.partial?'<small>'+(c.archiveComplete?'Full archive':'In progress')+'</small>':'<small>'+data.nodes.filter(n=>chapterOf(n)===c.id).length+' cards</small>'}</button>`).join('');
    $$('#chapters button').forEach(b=>b.onclick=()=>changeChapter(b.dataset.chapter));
    $('#chapter-title').textContent=current.title+'.';
    $('#chapter-no').textContent=chapter.padStart(2,'0');
    $('#course-chapter').textContent=query?'CHAPTERS 01–03':'CHAPTER '+chapter.padStart(2,'0');
    $('#coverage-label').textContent=current.partial?'Current lectures in progress':'From your current lectures';
    $('#coverage-dates').textContent=current.dateRange;
    $('#coverage-notice').hidden=!current.partial||!!query;
    $('#coverage-notice').textContent=current.coverageNote||'';
    $('#sections').innerHTML=data.sections.filter(s=>s.id.startsWith(chapter+'.')).map(s=>`<button class="section-button ${section===s.id&&!query?'active':''}" data-section="${esc(s.id)}" ${section===s.id&&!query?'aria-current="true"':''}><span class="nav-number">${esc(s.id)}</span><span>${esc(s.title)}</span><small>${data.nodes.filter(n=>n.section===s.id).length}</small></button>`).join('');
    $$('#sections button').forEach(b=>b.onclick=()=>changeSection(b.dataset.section));
    $('#overview').classList.toggle('active',section==='all'&&!query);
    $('#overview').setAttribute('aria-current',section==='all'&&!query?'true':'false');
    $('#total-count').textContent=data.nodes.filter(n=>chapterOf(n)===chapter).length;
    $('#section-kicker').textContent=query?'SEARCH ALL CHAPTERS':section==='all'?'CHAPTER '+chapter.padStart(2,'0')+' · OVERVIEW':'SECTION '+section;
    $('#section-title').textContent=query?'Results for “'+query+'”':section==='all'?'The connected chapter':data.sections.find(s=>s.id===section)?.title||section;
  }
  function changeChapter(id){if(!chapters.has(id))return;chapter=id;section=oralOnly?'all':data.sections.find(s=>s.id.startsWith(id+'.')).id;type='all';status='all';coverage='all';$('#coverage-filter').value='all';$('#type-filter').value='all';$('#status-filter').value='all';changeSection(section);announce('Chapter '+id+'. '+chapters.get(id).title);}
  function changeSection(id){section=id;query='';$('#search').value='';revealed=false;refresh(true);}
  function refresh(layout=false){
    visible=filterNodes();
    if(!visible.some(n=>n.id===selected)){selected=visible.find(n=>n.type!=='topic')?.id||visible[0]?.id;revealed=false;}
    renderNav();
    $('#visible-count').textContent=visible.length+(visible.length===1?' concept':' concepts');
    $('#clear').hidden=!query&&type==='all'&&status==='all'&&coverage==='all'&&!oralOnly;
    $('#empty').hidden=visible.length!==0;
    $('#empty p').textContent=oralOnly?'No '+oralKindLabel()+' cards match these filters. Choose Entire chapter or clear your filters.':'Try a different name or clear your filters.';
    $('#graph').hidden=visible.length===0;
    $('#graph-guide')?.classList.remove('hidden');
    if(layout) layoutNodes();
    drawGraph();renderList();renderCard();renderProgress();
    history.replaceState(null,'',selected?'#'+encodeURIComponent(selected):location.pathname+location.search);
    const count=edges.filter(e=>positions.has(e.from)&&positions.has(e.to)&&e.label!=='part of').length;
    $('#connection-count').textContent=count+' relationships in view';
    if(layout) requestAnimationFrame(fit);
  }
  function nodeHeight(n){return Math.max(66,35+15*wrapTitle(n.title,n.type==='topic'?25:24).length);}
  function layoutNodes(){
    positions=new Map();
    const groups=section==='all'&&!query&&type==='all'&&status==='all'&&coverage==='all'&&!oralOnly?data.sections.filter(s=>s.id.startsWith(chapter+'.')).map(s=>({section:s,nodes:visible.filter(n=>n.section===s.id)})):[{section:null,nodes:visible}];
    const groupLayout=(group,ox,oy)=>{
      const topic=group.nodes.find(n=>n.type==='topic'),rest=group.nodes.filter(n=>n!==topic);
      const cols=groups.length===1&&rest.length>12?4:rest.length>5?3:Math.min(rest.length||1,2),colStep=218;
      const w=Math.max(cols*colStep,650),topicH=topic?nodeHeight(topic):0;
      if(topic)positions.set(topic.id,{x:ox+w/2,y:oy+15+topicH/2,w:200,h:topicH});
      let rowY=oy+(topic?topicH+60:25);
      for(let i=0;i<rest.length;i+=cols){
        const row=rest.slice(i,i+cols),rowH=Math.max(...row.map(nodeHeight));
        const start=(w-(row.length-1)*colStep)/2;
        row.forEach((n,col)=>positions.set(n.id,{x:ox+start+col*colStep,y:rowY+rowH/2,w:188,h:nodeHeight(n)}));
        rowY+=rowH+38;
      }
      return rowY-oy+20;
    };
    if(groups.length>1){
      let rowY=30;
      for(let i=0;i<groups.length;i+=2){const h1=groupLayout(groups[i],30,rowY+30);const h2=groups[i+1]?groupLayout(groups[i+1],780,rowY+30):0;groups[i].label={x:45,y:rowY};if(groups[i+1])groups[i+1].label={x:795,y:rowY};rowY+=Math.max(h1,h2)+115;}
    }else groupLayout(groups[0],0,10);
    window.RFA_GROUP_LABELS=groups.filter(g=>g.label);
    layoutKey=chapter+'|'+section+'|'+visible.map(n=>n.id).join(',');
    for(const [id,point] of arrangements.get(layoutKey)||[]){const p=positions.get(id);if(p)Object.assign(p,point);}
    updateGraphBounds();
  }
  function updateGraphBounds(){
    const boxes=[...positions.values()].map(p=>({left:p.x-p.w/2,right:p.x+p.w/2,top:p.y-p.h/2,bottom:p.y+p.h/2}));
    (window.RFA_GROUP_LABELS||[]).forEach(g=>boxes.push({left:g.label.x,right:g.label.x+600,top:g.label.y-16,bottom:g.label.y}));
    if(!boxes.length){graphBounds={x:0,y:0,w:700,h:500};return;}
    const x=Math.min(...boxes.map(b=>b.left))-20,y=Math.min(...boxes.map(b=>b.top))-20;
    graphBounds={x,y,w:Math.max(...boxes.map(b=>b.right))-x+20,h:Math.max(...boxes.map(b=>b.bottom))-y+20};
  }
  function wrapTitle(title,max=23){const words=title.split(' ');let lines=[''];words.forEach(w=>{const last=lines.length-1;if((lines[last]+' '+w).trim().length>max&&lines[last])lines.push(w);else lines[last]+=(lines[last]?' ':'')+w;});return lines;}
  function endpoints(a,b){const dx=b.x-a.x,dy=b.y-a.y;const scaleA=Math.min((a.w/2+3)/Math.abs(dx||.001),(a.h/2+3)/Math.abs(dy||.001));const scaleB=Math.min((b.w/2+5)/Math.abs(dx||.001),(b.h/2+5)/Math.abs(dy||.001));return {x1:a.x+dx*scaleA,y1:a.y+dy*scaleA,x2:b.x-dx*scaleB,y2:b.y-dy*scaleB};}
  function drawGraph(){
    const ns=visible.map(n=>{
      const p=positions.get(n.id);if(!p)return '';
      const lines=wrapTitle(n.title,n.type==='topic'?25:24);
      const titleY=lines.length===1?13:6;
      return `<g class="graph-node ${esc(n.type)} ${isAhead(n)?'ahead':''} ${isOral(n)?'oral':''} ${n.id===selected?'selected':''}" data-id="${esc(n.id)}" transform="translate(${p.x-p.w/2},${p.y-p.h/2})" tabindex="0" role="button" aria-label="${esc(n.title)}, ${n.type}${isOral(n)?', oral question '+esc(oralLabels(n)):''}. Open flashcard. Drag or use Alt and arrow keys to move" aria-pressed="${n.id===selected}"><title>${esc(n.title)}</title><rect class="node-bg" width="${p.w}" height="${p.h}" rx="11"/><circle cx="14" cy="15" r="2.4" fill="var(--color)"/><text class="node-kind" x="23" y="18">${esc(n.type+(isAhead(n)?' · ahead':'')+(isOral(n)?' · oral':''))}</text><text class="node-name" x="14" y="${28+titleY}">${lines.map((line,i)=>`<tspan x="14" dy="${i?15:0}" ${line.length>27?'textLength="159" lengthAdjust="spacingAndGlyphs"':''}>${esc(line)}</tspan>`).join('')}</text>${progress[n.id]?`<text class="node-status" x="${p.w-20}" y="19">✓</text>`:''}</g>`;
    }).join('');
    const labels=(window.RFA_GROUP_LABELS||[]).map(g=>`<text class="all-section-label" x="${g.label.x}" y="${g.label.y}">${esc(g.section.id+' · '+g.section.title)}</text>`).join('');
    $('#nodes').innerHTML=labels+ns;
    drawEdges();
    $$('.graph-node').forEach(el=>{
      el.addEventListener('keydown',e=>{
        const step={ArrowLeft:[-18,0],ArrowRight:[18,0],ArrowUp:[0,-18],ArrowDown:[0,18]}[e.key];
        if(e.altKey&&step){e.preventDefault();e.stopPropagation();const p=positions.get(el.dataset.id);moveNode(el.dataset.id,p.x+step[0],p.y+step[1]);rememberNode(el.dataset.id);announce('Moved '+nodes.get(el.dataset.id).title);}
        else if(e.key==='Enter'||e.key===' '){e.preventDefault();openNode(el.dataset.id);}
      });
      el.addEventListener('pointerenter',()=>highlight(el.dataset.id));
      el.addEventListener('pointerleave',()=>highlight(null));
      el.addEventListener('focus',()=>highlight(el.dataset.id));
      el.addEventListener('blur',()=>highlight(null));
    });
    transform();
  }
  function drawEdges(){
    const es=edges.filter(e=>positions.has(e.from)&&positions.has(e.to)&&(e.label!=='part of'||e.from===selected||e.to===selected));
    $('#edges').innerHTML=es.map((e,i)=>{
      const a=positions.get(e.from),b=positions.get(e.to),p=endpoints(a,b);const active=e.from===selected||e.to===selected;
      const dx=p.x2-p.x1,dy=p.y2-p.y1;
      const bend=Math.abs(dy)<25?Math.min(45,Math.abs(dx)*.13):(Math.abs(dx)<25?30:0);
      const mx=(p.x1+p.x2)/2+(Math.abs(dy)>=25?bend:0),my=(p.y1+p.y2)/2-(Math.abs(dy)<25?bend:0);
      const d=`M${p.x1},${p.y1} Q${mx},${my} ${p.x2},${p.y2}`;
      return `<g class="edge ${active?'active':''}" data-edge="${i}"><title>${esc(nodes.get(e.from).title+' '+e.label+' '+nodes.get(e.to).title+'. '+e.reason)}</title><path d="${d}" ${e.label==='part of'?'stroke-dasharray="4 4"':''}/><path class="hit-path" d="${d}"/><text class="edge-label" x="${(p.x1+2*mx+p.x2)/4}" y="${(p.y1+2*my+p.y2)/4-4}">${esc(e.label)}</text></g>`;
    }).join('');
    $$('.edge').forEach(el=>el.addEventListener('click',()=>{const e=es[+el.dataset.edge];toast(`${nodes.get(e.from).title} → ${e.label} → ${nodes.get(e.to).title}. ${e.reason}`);}));
  }
  function moveNode(id,x,y){
    const p=positions.get(id);if(!p)return;
    p.x=x;p.y=y;
    const el=$('.graph-node[data-id="'+CSS.escape(id)+'"]');
    if(el)el.setAttribute('transform',`translate(${p.x-p.w/2},${p.y-p.h/2})`);
    drawEdges();updateGraphBounds();
  }
  function rememberNode(id){
    if(!arrangements.has(layoutKey))arrangements.set(layoutKey,new Map());
    const {x,y}=positions.get(id);arrangements.get(layoutKey).set(id,{x,y});
  }
  function openNode(id){
    select(id);
    if(workspaceView==='graph'){setWorkspaceView('cards');$('#reveal').focus({preventScroll:true});if(matchMedia('(max-width:720px)').matches)$('#study-panel').scrollIntoView({block:'start'});}
  }
  function highlight(id){const conn=new Set(id?[id,...related(id).flatMap(e=>[e.from,e.to])]:[]);$$('.graph-node').forEach(el=>el.classList.toggle('dim',!!id&&!conn.has(el.dataset.id)));}
  function renderList(){
    $('#list-view').innerHTML=visible.length?visible.map(n=>`<button class="list-card ${n.type} ${isOral(n)?'oral':''} ${selected===n.id?'selected':''}" data-id="${esc(n.id)}"><span class="list-dot"></span><span><strong>${esc(n.title)}</strong><small>${esc(n.type+' · Section '+n.section+(isAhead(n)?' · Ahead of lectures':'')+(isOral(n)?' · Oral '+oralLabels(n):''))}${progress[n.id]==='known'?' · ✓ Got it':progress[n.id]==='again'?' · Review again':progress[n.id]==='reviewed'?' · Reviewed':''}</small></span><span class="arrow">↗</span></button>`).join(''):'<div class="source-body"><h2>No matching concepts.</h2><p>Clear your filters or try another search.</p></div>';
    $$('.list-card').forEach(b=>b.onclick=()=>openNode(b.dataset.id));
  }
  function select(id,resetView=false){
    if(!nodes.has(id))return;
    if(oralOnly&&!matchesOral(nodes.get(id))){oralOnly=false;$('#oral-only').checked=false;toast('Showing a related card outside the selected oral-question filter.');}
    selected=id;revealed=false;
    if(resetView||chapterOf(nodes.get(id))!==chapter||!visible.some(n=>n.id===id)){chapter=chapterOf(nodes.get(id));section=nodes.get(id).section;query='';type='all';status='all';coverage='all';$('#coverage-filter').value='all';$('#search').value='';$('#type-filter').value='all';$('#status-filter').value='all';refresh(true);}else{drawGraph();renderList();renderCard();}
    history.replaceState(null,'','#'+encodeURIComponent(id));
    announce(nodes.get(id).title+'. Card front.');
    if(matchMedia('(max-width:720px)').matches)$('.study-panel').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth',block:'start'});
  }
  function renderCard(){
    const n=nodes.get(selected),card=$('#flashcard');
    $('#reviewed').checked=!!progress[n?.id];$('#reviewed').disabled=!n;
    $('#card-coverage').textContent=n?(isAhead(n)?'Ahead of lectures · no recorded date':'Lecture: '+lectureDates(n)):'';$('#card-coverage').classList.toggle('ahead',isAhead(n));
    $('#card-oral').hidden=!isOral(n);$('#card-oral').textContent=isOral(n)?'Oral exam · '+oralLabels(n):'';$('#card-oral').title=(n?.oralQuestions||[]).map(id=>questions.get(id).title).join(' · ');
    $('#reveal').disabled=!n;$('#prev').disabled=visible.length<2;$('#next').disabled=visible.length<2;
    // Keep the rating row's space on the front so flipping never shifts the layout.
    $('#rating').classList.toggle('unrevealed',!revealed||!n);
    if(!n){card.className='flashcard front';card.innerHTML='<div><h2>No matching cards</h2><p class="subtle">Choose Entire chapter or clear your filters.</p></div>';$('#card-type').textContent='';$('#card-section').textContent='';$('#position').textContent='0 / 0';$('#relations').innerHTML='';$('#relations').hidden=true;$('.relation-hint').hidden=false;$('#relation-total').textContent='0';return;}
    $('#card-type').className='type-badge '+n.type;$('#card-type').textContent=n.type;
    $('#card-section').textContent='SECTION '+n.section;
    $('#position').textContent=(visible.findIndex(v=>v.id===n.id)+1)+' / '+visible.length;
    card.className='flashcard '+(revealed?'back':'front')+(isOral(n)?' oral':'');
    $('#reveal').innerHTML=(revealed?'Hide answer':'Reveal card')+' <kbd>Space</kbd>';
    const sourceSummary=(n.lectures?.length?'Mentioned in lecture: '+esc(lectureDates(n)):'No lecture date recorded yet.')+(n.archiveReference?'<br>Archive · '+esc(n.archiveReference.label)+' · p. '+esc(n.archiveReference.page):'');
    if(!revealed){card.innerHTML=`<h2>${esc(n.title)}</h2>`;}else{
      const label=n.type==='theorem'||n.type==='proposition'?'Precise statement':n.type==='topic'?'Precise overview':'Precise definition';
      const oralDetails=(n.oralQuestions||[]).map(id=>questions.get(id)).filter(q=>!oralOnly||oralKind==='all'||q.kind===oralKind);
      const oralSection=oralDetails.length?`<section class="card-part oral-questions"><div class="part-label">Oral exam prompts</div>${oralDetails.map(q=>`<p><strong>${esc(q.id)} · ${q.kind==='long-form'?'Long-form':'Regular'}</strong><br>${esc(q.title)}${q.nodeIds.length>1?'<br><small>This question spans '+q.nodeIds.length+' cards; this card covers part of it.</small>':''}${q.note?'<br><small>'+esc(q.note)+'</small>':''}</p>${q.nodeIds.filter(id=>id!==n.id).map(id=>'<button class="oral-companion" data-id="'+esc(id)+'">Also study: '+esc(nodes.get(id).title)+' ↗</button>').join('')}`).join('')}</section>`:'';
      card.innerHTML=`<h2 class="answer-title">${esc(n.title)}</h2>${oralSection}<section class="card-part"><div class="part-label"><b>01</b> ${label}</div>${n.precise}</section><section class="card-part"><div class="part-label"><b>02</b> Intuition / motivation</div>${n.intuition}</section><section class="card-part"><div class="part-label"><b>03</b> Example</div>${n.example}</section>${n.proofSketch?`<section class="card-part proof-part"><div class="part-label"><b>04</b> Sketch of proof</div>${n.proofSketch}<p class="proof-note">AI-authored study sketch, not a full proof.${n.proofNote?' '+esc(n.proofNote):''}</p></section>`:''}${n.correction?`<div class="source-correction"><strong>Source clarification</strong><br>${esc(n.correction)}</div>`:''}<div class="card-source"><div class="source-dates">${sourceSummary}</div><div>Intuition, examples and proof sketches are AI-authored study explanations.</div></div>`;
      math(card);card.scrollTop=0;$$('.oral-companion').forEach(b=>b.onclick=()=>select(b.dataset.id));
    }
    const relations=related(n.id);
    $('#relation-total').textContent=relations.length;
    $('.relation-hint').hidden=revealed;
    $('#relations').hidden=!revealed;
    $('#relations').innerHTML=relations.map(e=>{
      const outbound=e.from===n.id,other=nodes.get(outbound?e.to:e.from);
      const label=outbound?e.label:inverseLabels[e.label]||('incoming: '+e.label);
      return `<button class="relation-row" data-id="${esc(other.id)}" title="${esc(e.reason)}"><span><small>${esc(label.toUpperCase())} · ${esc(other.section)}${isAhead(other)?' · AHEAD':''}</small><strong>${esc(other.title)}</strong><span class="relation-reason">${esc(e.reason)}</span></span><span class="relation-arrow">↗</span></button>`;
    }).join('')||'<p class="subtle">This is a section overview. Select an individual concept in the graph.</p>';
    $$('.relation-row').forEach(b=>b.onclick=()=>select(b.dataset.id));
  }
  function renderProgress(){
    const scope=(query?data.nodes:data.nodes.filter(n=>chapterOf(n)===chapter)).filter(n=>!oralOnly||matchesOral(n)),reviewed=scope.filter(n=>progress[n.id]).length,again=scope.filter(n=>progress[n.id]==='again').length;
    $('#progress-text').textContent=`${reviewed} of ${scope.length} reviewed · ${oralOnly?oralKindLabel()+' cards · ':''}${query?'all chapters':'Chapter '+chapter}${again?' · '+again+' to revisit':''}`;
    $('#progress-bar').style.width=(scope.length?reviewed/scope.length*100:0)+'%';
    $('#save-status').textContent=storageOK?'Review status is saved in this browser between visits.':'Browser storage is unavailable. Marks last for this visit only.';
  }
  $('#reviewed').onchange=e=>{
    if(!selected)return;
    const checked=e.target.checked;
    if(checked)progress[selected]=progress[selected]||'reviewed';else delete progress[selected];
    save();refresh(true);announce((checked?'Marked as reviewed.':'Marked as not reviewed.')+(storageOK?' Saved in this browser.':' Saved for this visit only.'));
  };
  window.addEventListener('storage',e=>{
    if(e.key!==STORE)return;
    try{progress=readProgress(e.newValue);refresh(true);}catch{toast('Review marks could not be read from browser storage.');}
  });
  function flip(){if(!selected)return;revealed=!revealed;renderCard();announce(revealed?'Answer revealed.':'Card front.');}
  function next(delta){if(!visible.length)return;const i=visible.findIndex(n=>n.id===selected);select(visible[(i+delta+visible.length)%visible.length].id);}
  function mark(value){if(!selected||!revealed)return;const old=selected,oldIndex=visible.findIndex(n=>n.id===old);progress[old]=value;save();const filtered=filterNodes();const still=filtered.findIndex(n=>n.id===old);selected=filtered.length?filtered[(still>=0?still+1:oldIndex)%filtered.length].id:undefined;revealed=false;refresh(true);toast(value==='known'?'Marked as understood.':'Added to Review again.');}
  function transform(){const g=$('#viewport');g.setAttribute('transform',`translate(${pan.x} ${pan.y}) scale(${zoom})`);$('#zoom-label').textContent=Math.round(zoom*100)+'%';}
  function fit(){
    const r=$('#graph-wrap').getBoundingClientRect();if(mode!=='graph'||workspaceView==='cards'||r.width<1||r.height<1)return;
    graphSize={w:r.width,h:r.height};$('#graph').setAttribute('viewBox',`0 0 ${r.width} ${r.height}`);
    zoom=Math.max(.1,Math.min(1.15,(r.width-30)/graphBounds.w,(r.height-128)/graphBounds.h));
    pan={x:(r.width-graphBounds.w*zoom)/2-graphBounds.x*zoom,y:48+(r.height-125-graphBounds.h*zoom)/2-graphBounds.y*zoom};transform();
  }
  function scale(factor,x=graphSize.w/2,y=graphSize.h/2){const old=zoom;zoom=Math.max(.1,Math.min(3.5,zoom*factor));pan={x:x-(x-pan.x)*zoom/old,y:y-(y-pan.y)*zoom/old};transform();}
  $('#graph').addEventListener('wheel',e=>{e.preventDefault();const r=$('#graph').getBoundingClientRect();scale(Math.exp(-e.deltaY*.002),e.clientX-r.left,e.clientY-r.top);},{passive:false});
  $('#graph').addEventListener('pointerdown',e=>{
    if(e.button!==0||!e.isPrimary||drag)return;
    const node=e.target.closest('.graph-node');if(!node&&e.target.closest('.edge'))return;
    const p=node?positions.get(node.dataset.id):null;
    drag={id:node?.dataset.id,pointerId:e.pointerId,x:e.clientX,y:e.clientY,px:pan.x,py:pan.y,nx:p?.x,ny:p?.y,moved:false};
    node?.focus({preventScroll:true});e.preventDefault();$('#graph').setPointerCapture(e.pointerId);
  });
  $('#graph').addEventListener('pointermove',e=>{
    if(!drag||e.pointerId!==drag.pointerId)return;
    const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
    if(!drag.moved&&Math.hypot(dx,dy)<5)return;
    drag.moved=true;$('#graph').classList.add('dragging');
    if(drag.id)moveNode(drag.id,drag.nx+dx/zoom,drag.ny+dy/zoom);
    else{pan={x:drag.px+dx,y:drag.py+dy};transform();}
  });
  function finishDrag(e,cancel=false){
    if(!drag||e.pointerId!==drag.pointerId)return;
    const d=drag;drag=null;$('#graph').classList.remove('dragging');
    if($('#graph').hasPointerCapture(d.pointerId))$('#graph').releasePointerCapture(d.pointerId);
    if(d.id){
      if(cancel)moveNode(d.id,d.nx,d.ny);
      else if(d.moved){rememberNode(d.id);announce('Moved '+nodes.get(d.id).title);}
      else openNode(d.id);
    }
    highlight(null);
  }
  $('#graph').addEventListener('pointerup',e=>finishDrag(e));
  $('#graph').addEventListener('pointercancel',e=>finishDrag(e,true));
  $('#graph').addEventListener('lostpointercapture',e=>finishDrag(e,true));
  new ResizeObserver(()=>{if(mode==='graph')fit();}).observe($('#graph-wrap'));
  function clear(){oralKind='all';oralOnly=false;$('#oral-only').checked=false;query='';type='all';status='all';coverage='all';$('#coverage-filter').value='all';$('#search').value='';$('#type-filter').value='all';$('#status-filter').value='all';refresh(true);}
  $('#oral-only').onchange=e=>{
    oralOnly=e.target.checked;section='all';query='';$('#search').value='';revealed=false;refresh(true);
    announce(oralOnly?'Oral-question cards only. Random cards use the same oral filter.':'All cards.');
  };
  $('#oral-kind').onchange=e=>{
    oralKind=e.target.value;section='all';query='';$('#search').value='';revealed=false;refresh(true);
    announce('Showing '+oralKindLabel()+' cards. Random cards use the same filter.');
  };
  $('#random-scope').onchange=renderNav;
  $('#overview').onclick=()=>changeSection('all');
  $('#search').addEventListener('input',e=>{query=e.target.value.trim();section='all';refresh(true);});
  $('#type-filter').onchange=e=>{type=e.target.value;refresh(true);};
  $('#status-filter').onchange=e=>{status=e.target.value;refresh(true);};
  $('#coverage-filter').onchange=e=>{coverage=e.target.value;revealed=false;refresh(true);};
  $('#clear').onclick=clear;$('#empty-clear').onclick=clear;
  $('#reveal').onclick=flip;$('#prev').onclick=()=>next(-1);$('#next').onclick=()=>next(1);
  $('#known').onclick=()=>mark('known');$('#again').onclick=()=>mark('again');
  function randomCard(){
    const all=$('#random-scope').value==='all';
    const pool=data.nodes.filter(n=>n.id!==selected&&(!oralOnly||matchesOral(n))&&(all||chapterOf(n)===chapter));
    if(pool.length){select(pool[Math.floor(Math.random()*pool.length)].id,true);if(workspaceView==='graph')setWorkspaceView('cards');}
  }
  $('#random').onclick=randomCard;
  $('#zoom-in').onclick=()=>scale(1.25);$('#zoom-out').onclick=()=>scale(.8);$('#fit').onclick=fit;
  $('#reset-layout').onclick=()=>{arrangements.delete(layoutKey);layoutNodes();drawGraph();fit();announce('Graph layout reset.');};
  function setMode(m){mode=m;$('#reset-layout').hidden=m!=='graph';$('#graph-wrap').hidden=m!=='graph';$('#list-view').hidden=m!=='list';['graph','list'].forEach(v=>{$('#'+v+'-mode').classList.toggle('active',m===v);$('#'+v+'-mode').setAttribute('aria-pressed',m===v);});if(m==='graph')requestAnimationFrame(fit);}
  $('#graph-mode').onclick=()=>setMode('graph');$('#list-mode').onclick=()=>setMode('list');
  function setWorkspaceView(view){
    if(!['split','graph','cards'].includes(view))return;
    workspaceView=view;$('.app-shell').dataset.view=view;
    $('#workspace').hidden=view==='cards';$('#study-panel').hidden=view==='graph';
    ['split','graph','cards'].forEach(v=>{const b=$('#'+v+'-view');b.classList.toggle('active',v===view);b.setAttribute('aria-pressed',v===view);});
    $('.skip').setAttribute('href',view==='cards'?'#study-panel':'#workspace');
    if(view==='graph')setMode('graph');
    else if(view==='split'&&mode==='graph')requestAnimationFrame(fit);
    announce(view==='cards'?'Flashcard view.':view==='graph'?'Expanded graph view.':'Split view.');
  }
  ['split','graph','cards'].forEach(view=>$('#'+view+'-view').onclick=()=>setWorkspaceView(view));
  document.addEventListener('keydown',e=>{
    if(e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.isComposing||e.target.closest('input,select,textarea,[contenteditable="true"],[role="textbox"]')||$('#source-dialog').open)return;
    if(e.key==='/'){e.preventDefault();$('#search').focus();}
    else if(e.key===' '&&!e.target.closest('button,a,[role="button"]')){e.preventDefault();flip();}
    else if(e.key==='ArrowRight'){e.preventDefault();if(!e.repeat)randomCard();}
    else if(e.key==='ArrowLeft'&&!e.target.closest('button,a,[role="button"]'))next(-1);
  });
  const dialog=$('#source-dialog');
  function openDialog(html){$('#source-content').innerHTML=html;if(!dialog.open)dialog.showModal();dialog.scrollTop=0;math($('#source-content'));}
  $('#close-dialog').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  function about(){
    openDialog(`<article class="source-body"><h2>A connected map<br>of functional analysis.</h2><p>This atlas follows current RFA lecture transcriptions and includes the rest of archived Chapter 3 for advance study. Each chapter has a graph of concepts, a name-only recall card, and three answer parts: a precise definition or statement, intuition, and an example. Theorems and propositions also include a sketch of proof.</p><h3>Chapters & coverage</h3><ul class="source-list">${data.chapters.map(c=>`<li><strong>Chapter ${c.id} · ${esc(c.title)}</strong><br>${esc(c.dateRange)}${c.partial?' · <strong>Personal notes in progress</strong>':''}<p>${esc(c.coverageNote)}</p></li>`).join('')}</ul><h3>A map you can study</h3><p>Choose a chapter, then select a node and try to recall it before revealing the answer. Search finds concepts across all three chapters. Connected ideas can take you to a prerequisite in another chapter. Use the top bar to switch between Split, Graph, and Flashcards. The Graph and Flashcards views give that panel the full workspace. Click a node in the expanded graph to open its card. Switch to List for a linear view. Drag individual nodes to separate them; their connections follow. Arrangements are kept for each view during this visit, and Reset layout restores the default. Use Alt and arrow keys to move a focused node with the keyboard. Cards marked Ahead of lectures come from the archived notes and are not confirmed as covered by the current transcriptions. Use the coverage filter to focus on either group. Use Random card to draw from the whole current chapter or all notes. Oral questions only also limits random cards and the right-arrow shortcut; the other filters apply to the graph, list and sequential flashcards. The current card will not repeat immediately.</p><p>Directed edges read <em>A → uses → B</em> when B is a definition or result used by A. “Specialises” points to the broader concept; “implies” points to the conclusion; “characterises” points to the concept being described. Each relationship has an explanation. These relationships do not claim a particular proof was presented in class.</p><h3>Oral-question list</h3><p>Amber highlights identify direct matches to the updated list of 87 questions: 55 regular questions and 32 long-form questions across Chapters 1–3. Chapter 1 has 22 regular + 6 long-form; Chapter 2 has 9 + 5; Chapter 3 has 24 + 21. The list asks you to choose one long-form question from Chapter 1, one from Chapter 2, and five from Chapter 3 for the exam. Turn on Oral questions only, then choose All oral questions, Regular questions, or Long-form questions. The same choice applies to the graph, list, flashcards, random cards and right-arrow shortcut. Badges preserve the exact question IDs (LF means long-form), and card backs show the matching prompts. Some questions span several cards; the prompt identifies this. Regular statement-only questions remain distinct from long-form proof requests. The updated list determines exam relevance, not whether a topic has already appeared in your personal lecture notes.</p><h3>Lecture dates</h3><ul class="source-list">${Object.values(window.RFA_LECTURES||{}).sort((a,b)=>a.date.localeCompare(b.date)).map(l=>`<li><strong>${lectureDate(l.date)}</strong> — ${esc(l.summary)}</li>`).join('')}</ul><h3>Source boundaries</h3><p>Cards marked Current lectures are adapted from the current transcriptions. Ahead of lectures cards complete archived Chapter 3 and identify their archive page and result. Intuition, examples and proof sketches are AI-authored study explanations. A proof sketch does not claim that the proof was presented in class. Later review additions do not establish that a new topic was officially covered. Lemmas and exercise results are grouped under Propositions where helpful.</p><p>The archived Di Francesco 2025–2026 notes provide secondary references for recorded material and primary references for advance-study cards. They do not determine current lecture coverage. Cards identify any needed hypothesis or source clarification. Section groups in this app are study groupings; archive section numbers are shown only in separately verified references.</p><h3>Study controls</h3><p><strong>/</strong> searches · <strong>Space</strong> reveals or hides a card when the page itself has focus · <strong>→</strong> draws a random card from the selected scope · <strong>←</strong> moves to the previous card in the section. The Next button still follows section order. Graph nodes also work with Tab and Enter. Tick Reviewed to save whether a card has been reviewed, or untick it to mark it unreviewed. Got it and Review again also count as reviewed. Marks survive closing and reopening this site in the same browser; they do not sync between devices and clearing site data removes them. Existing review marks are preserved. No sign-in is needed.</p><h3>Rendering</h3><p>Mathematics is typeset with a locally bundled copy of <a href="https://katex.org/docs/browser.html" target="_blank" rel="noopener">KaTeX</a>. The app contains study cards and citation metadata. Full lecture transcriptions and PDFs are not included.</p></article>`);
  }
  $('#about').onclick=about;
  refresh(true);
})();
