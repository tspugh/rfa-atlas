import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const katex=require('./dist/vendor/katex/katex.js');
const ctx={window:{}};
for(const file of ['data.js','lectures.js'])vm.runInNewContext(fs.readFileSync('dist/'+file,'utf8'),ctx);
const {RFA_DATA:data,RFA_LECTURES:lectures}=ctx.window;
const failures=[];let formulas=0,refs=0;
const check=(ok,msg)=>{if(!ok)failures.push(msg);};
const ids=new Set(data.nodes.map(n=>n.id));
check(ids.size===data.nodes.length,'Duplicate card IDs');
check(data.chapters?.length===3,'Expected three chapters');
check(data.chapters.find(c=>c.id==='3')?.partial===true,'Current Chapter 3 lectures must remain marked in progress');
check(data.chapters.find(c=>c.id==='3')?.archiveComplete===true,'Full archived Chapter 3 must be included');
check(data.sections.filter(s=>s.id.startsWith('1.')).length===8,'Expected all eight Chapter 1 sections');
check(data.nodes.filter(n=>n.chapter==='1').length===83,'Preserve all original Chapter 1 cards');
const sectionIds=new Set(data.sections.map(s=>s.id));
check(sectionIds.size===data.sections.length,'Duplicate section IDs');
for(const c of data.chapters){check(data.nodes.some(n=>n.chapter===c.id),'Empty chapter: '+c.id);check(c.coverageNote&&c.lectureDates.length,'Missing coverage metadata: '+c.id);}
for(const section of data.sections)check(data.nodes.filter(n=>n.section===section.id&&n.type==='topic').length===1,'One topic per section: '+section.id);
for(const n of data.nodes){
  check(data.chapters.some(c=>c.id===n.chapter),'Unknown chapter: '+n.id);
  check(sectionIds.has(n.section)&&n.section.startsWith(n.chapter+'.'),'Bad chapter/section: '+n.id);
  check(['definition','theorem','proposition','topic'].includes(n.type),'Unknown type: '+n.id);
  if(n.coverage==='ahead'){
    check(n.chapter==='3'&&n.sourceKind==='archived-notes','Invalid archive-only coverage: '+n.id);
    check(Array.isArray(n.lectures)&&n.lectures.length===0,'Ahead card claims current lecture coverage: '+n.id);
    const a=n.archiveReference;
    check(a?.title==='Di Francesco — Notes 2025–2026'&&a.chapter==='3'&&/^3\.[1-7](?:–3\.[1-7])?$/.test(a.section)&&a.label&&Number.isInteger(a.page)&&a.page>=57&&a.page<=93,'Missing or invalid archived reference: '+n.id);
  }else{
    check(n.coverage==='current'&&n.sourceKind==='current-transcription','Primary coverage source missing: '+n.id);
    check(n.lectures?.length>0,'No current lecture reference: '+n.id);
  }
  if(['theorem','proposition'].includes(n.type))check(n.proofSketch?.length>60,'Missing proof sketch: '+n.id);
  for(const l of n.lectures||[]){refs++;check(lectures[l.date]?.sections.some(s=>s.heading===l.heading),'Unresolved lecture section: '+n.id+' '+l.heading);check(l.title===lectures[l.date]?.title,'Wrong source title: '+n.id);}
  for(const field of ['precise','intuition','example',...(n.proofSketch?['proofSketch']:[]),...(n.proofNote?['proofNote']:[])]){
    check(typeof n[field]==='string'&&n[field].length>(field==='proofNote'?0:20),'Missing card part: '+n.id+' '+field);
    const text=n[field].replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&#x27;/g,"'").replace(/&quot;/g,'"');
    for(const m of text.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)){
      formulas++;
      try{katex.renderToString(m[1]??m[2],{throwOnError:true,strict:'ignore'});}catch(e){failures.push(n.id+' '+field+': '+e.message);}
    }
  }
}
const questions=data.oralExam?.questions||[];
check(questions.length===87,'Expected 87 updated oral questions');
const questionIds=new Set(questions.map(q=>q.id));
check(questionIds.size===87,'Duplicate oral-question IDs');
for(const [chapter,regular,longForm,choice] of [['1',22,6,1],['2',9,5,1],['3',24,21,5]]){
  for(const [kind,count,prefix] of [['regular',regular,chapter+'.'],['long-form',longForm,chapter+'.LF.']]){
    check(questions.filter(q=>q.chapter===chapter&&q.kind===kind).length===count,'Wrong oral-question count '+chapter+' '+kind);
    for(let i=1;i<=count;i++)check(questions.some(q=>q.id===prefix+i&&q.chapter===chapter&&q.number===i&&q.kind===kind),'Missing oral question '+prefix+i);
  }
  check(data.oralExam.longFormChoices[chapter]===choice,'Wrong long-form exam selection count '+chapter);
}
for(const q of questions){
  check(q.title&&q.nodeIds?.length>0,'Unmatched oral question '+q.id);
  check(new Set(q.nodeIds).size===q.nodeIds.length,'Repeated match for oral question '+q.id);
  for(const id of q.nodeIds){const n=data.nodes.find(n=>n.id===id);check(n&&n.chapter===q.chapter&&n.oralQuestions.includes(q.id),'Broken oral-question match '+q.id+' '+id);}
}
for(const n of data.nodes){
  check(Array.isArray(n.oralQuestions),'Missing oral-question metadata '+n.id);
  for(const id of n.oralQuestions||[])check(questionIds.has(id)&&questions.find(q=>q.id===id).nodeIds.includes(n.id),'Invalid reverse oral mapping '+n.id);
}
const audit=JSON.parse(fs.readFileSync('chapter3-coverage-audit.json','utf8'));
for(const entry of audit.coverageAudit){
  check(entry.nodeIds?.length>0&&entry.nodeIds.every(id=>ids.has(id)),'Unresolved archive mapping: '+entry.label);
  check(entry.page>=57&&entry.page<=93,'Archive mapping outside Chapter 3: '+entry.label);
}
for(let i=1;i<=63;i++)check(audit.coverageAudit.some(a=>a.label==='Archived item 3.'+i),'Missing archived item 3.'+i);
const edgeKeys=new Set();
for(const e of data.edges){check(ids.has(e.from)&&ids.has(e.to),'Broken graph edge');check(e.from!==e.to,'Self-referential edge');check(e.reason?.length>15,'Relationship explanation missing');const key=e.from+'|'+e.label+'|'+e.to;check(!edgeKeys.has(key),'Duplicate relationship');edgeKeys.add(key);}
for(const l of Object.values(lectures))check(l.sections.every(s=>Object.keys(s).length===1&&s.heading),'Only source headings may be hosted: '+l.date);
check(!fs.existsSync('dist/sources'),'Full source documents must not be bundled with the app');
for(const file of ['index.html','styles.css','app.js','vendor/katex/katex.min.js','vendor/katex/contrib/auto-render.min.js','vendor/katex/katex.min.css'])check(fs.existsSync('dist/'+file),'Missing asset: '+file);
for(const file of ['data.js','lectures.js','index.html','app.js'])check(!/obsidian:|InterMaths2026|\/Users\//i.test(fs.readFileSync('dist/'+file,'utf8')),'Local source link leaked: '+file);
console.log(JSON.stringify({chapters:data.chapters.map(c=>({id:c.id,cards:data.nodes.filter(n=>n.chapter===c.id).length,partial:c.partial})),cards:data.nodes.length,sections:data.sections.length,relationships:data.edges.length,lectureReferences:refs,proofSketches:data.nodes.filter(n=>n.proofSketch).length,aheadCards:data.nodes.filter(n=>n.coverage==='ahead').length,oralQuestions:questions.length,oralCards:data.nodes.filter(n=>n.oralQuestions.length).length,validatedFormulas:formulas,failures},null,2));
if(failures.length)process.exit(1);
