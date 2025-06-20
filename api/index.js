import { join } from 'path';
import { readFileSync } from 'fs';

export default function handler(req, res) {
  const htmlPath = join(process.cwd(), 'public', 'index.html');
  const html = readFileSync(htmlPath, 'utf-8');
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
