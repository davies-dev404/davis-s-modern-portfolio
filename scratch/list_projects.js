import fs from 'fs';

const content = fs.readFileSync('src/data/projects.js', 'utf8');
const match = content.match(/export const projects = (\[[\s\S]*\]);/);
const arr = JSON.parse(match[1]);

console.log('Total projects:', arr.length);
arr.forEach(p => {
  const hasDesc = p.description && p.description !== 'No description available.';
  const hasDemo = p.demo && p.demo.length > 0;
  const hasRealImage = p.image && p.image !== '/assets/placeholder-project.png';
  console.log(`[ID ${p.id}] "${p.title}" | Desc: ${hasDesc} | Demo: ${hasDemo ? p.demo : 'NONE'} | Image: ${p.image}`);
});
