const fs = require('fs');
const path = require('path');
const https = require('https');

const FONTS_DIR = path.join(process.cwd(), 'public', 'fonts');

// Ensure fonts directory exists
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

const fonts = [
  {
    name: 'Roboto-Regular.ttf',
    url: 'https://raw.githubusercontent.com/googlefonts/roboto/main/src/hinted/Roboto-Regular.ttf'
  },
  {
    name: 'Roboto-Bold.ttf',
    url: 'https://raw.githubusercontent.com/googlefonts/roboto/main/src/hinted/Roboto-Bold.ttf'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading fonts...');
  for (const font of fonts) {
    const destPath = path.join(FONTS_DIR, font.name);
    console.log(`Downloading ${font.name} to ${destPath}`);
    try {
      await downloadFile(font.url, destPath);
      console.log(`Success: ${font.name}`);
    } catch (err) {
      console.error(`Failed to download ${font.name}:`, err);
    }
  }
  console.log('Font downloads completed successfully!');
}

main();
