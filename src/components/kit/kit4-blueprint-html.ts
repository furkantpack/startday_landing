import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const htmlPath = join(process.cwd(), 'public', 'kit4-blueprint.html');

export function getBlueprintSectionMarkup(sectionId: string) {
  const html = readFileSync(htmlPath, 'utf8');
  const startMarker = `<div class="section" id="${sectionId}">`;
  const start = html.indexOf(startMarker);

  if (start === -1) return null;

  let end = html.indexOf('<!-- ====================', start + startMarker.length);
  if (end === -1) {
    end = html.indexOf('</main>', start + startMarker.length);
  }
  if (end === -1) {
    end = html.length;
  }

  return html.slice(start, end).trim();
}
