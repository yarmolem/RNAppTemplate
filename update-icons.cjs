const fs = require('node:fs');
const path = require('node:path');

let fileText = '';
const files = fs.readdirSync(path.resolve(__dirname, './src/assets/icons'));

for (const file of files) {
  const name = file.replace('.svg', '');
  fileText += ` '${name}': lazy(() => import('@/assets/icons/${file}')),\n`;
}

const fileIcons = `
import { lazy } from 'react';

export const icons = {
${fileText}
}
`;

fs.writeFileSync(path.resolve(__dirname, './src/icons.ts'), fileIcons, 'utf-8');
