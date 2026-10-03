import {readFile, readdir, stat,writeFile,mkdir} from 'node:fs/promises';
import {resolve} from 'node:path';
import assert from 'node:assert/strict';
const root=resolve('dist');
async function walk(dir){const files=[];for(const name of await readdir(dir)){const path=resolve(dir,name);if((await stat(path)).isDirectory())files.push(...await walk(path));else files.push(path);}return files;}
const files=await walk(root),pages=files.filter(f=>f.endsWith('index.html'));
const failures=[];let checkedLinks=0;
for(const file of pages){const html=await readFile(file,'utf8');try{
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,'One h1 per page');
 for(const pattern of ['<title>','name="description"','rel="canonical"','hreflang="en"','hreflang="es"','hreflang="x-default"','property="og:title"','name="twitter:card"','id="main"'])assert.ok(html.includes(pattern),pattern);
 const schema=JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
 assert.equal(schema['@graph'][0].name,'Felipe Antonio Toledo Alcalde');assert.equal(schema['@graph'][0].alternateName,'Zarocer');
 assert.ok(!html.includes('mailto:'),'No unconfirmed email');assert.ok(!html.includes('Released'),'No unverified release');
 for(const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)){const url=match[1];if(!url.startsWith('/'))continue;const clean=url.split('#')[0];const target=resolve(root,'.'+clean+(clean.endsWith('/')?'index.html':''));await stat(target);checkedLinks++;}
 const og=html.match(/property="og:image" content="https:\/\/zarocer.com([^" ]+)"/)[1];await stat(resolve(root,'.'+og));
 if(file.includes(`${resolve('dist','es')}`))assert.ok(html.includes('<html lang="es">'));
}catch(error){failures.push({file,error:error.message});}}
const sitemap=await readFile(resolve(root,'sitemap.xml'),'utf8');assert.equal((sitemap.match(/<loc>/g)||[]).length,32);assert.ok(!sitemap.includes('/privacy/'));assert.ok(!sitemap.includes('/press/rivet-circuit/'));assert.ok((await readFile(resolve(root,'robots.txt'),'utf8')).includes('https://zarocer.com/sitemap.xml'));
const heroSize=(await stat(resolve(root,'assets/signal.webp'))).size,jsSize=(await stat(resolve(root,'assets/site.js'))).size;
assert.ok(heroSize<350000,'Hero under 350 KB');assert.ok(jsSize<10000,'JS under 10 KB');assert.equal(pages.length,56);
await mkdir('qa',{recursive:true});const report={pages:pages.length,internalLinksAndAssetsChecked:checkedLinks,sitemapURLs:32,heroBytes:heroSize,clientJSBytes:jsSize,failures};await writeFile('qa/static-results.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(failures.length)process.exitCode=1;
