import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),katex=require('./dist/vendor/katex/katex.js'),ctx={window:{}};
vm.runInNewContext(fs.readFileSync('dist/true-false-data.js','utf8'),ctx);
const cards=ctx.window.RFA_TF;
assert.equal(cards.length,49);assert.equal(new Set(cards.map(c=>c.id)).size,49);
for(const [s,n] of [[1,16],[2,15],[3,18]]){const deck=cards.filter(c=>c.sheet===s);assert.equal(deck.length,n);deck.forEach((c,i)=>assert.equal(c.number,i+1));}
let formulas=0;for(const c of cards){assert.equal(typeof c.answer,'boolean');assert.ok(c.statement&&c.reason.length>0);for(const text of [c.statement,c.reason])for(const m of text.matchAll(/\$([^$]+)\$/g)){katex.renderToString(m[1],{throwOnError:true});formulas++;}}
assert.ok(fs.readFileSync('dist/index.html','utf8').includes('href="true-false.html"'));
console.log(JSON.stringify({cards:cards.length,sheets:[16,15,18],formulas,failures:[]}));
