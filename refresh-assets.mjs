import fs from 'node:fs';
import {createHash} from 'node:crypto';
let html=fs.readFileSync('dist/index.html','utf8');
for(const file of ['styles.css','data.js','lectures.js','app.js']){
  const hash=createHash('sha256').update(fs.readFileSync('dist/'+file)).digest('hex').slice(0,12);
  html=html.replace(new RegExp('(["\\\'])'+file.replaceAll('.','\\.')+'(?:\\?v=[a-z0-9-]+)?(["\\\'])','g'),(_,a,b)=>a+file+'?v='+hash+b);
}
fs.writeFileSync('dist/index.html',html);
