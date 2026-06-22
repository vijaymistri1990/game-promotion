const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'public');

// We will just create a dummy "compress" by skipping sharp if we can't install it, but we can try to install it.
// Actually, I am writing this to avoid using the powershell command runner if it fails.
const { execSync } = require('child_process');

try {
  console.log('Installing sharp...');
  execSync('npm install sharp --no-save', { stdio: 'inherit' });
  
  const sharp = require('sharp');
  const files = fs.readdirSync(directoryPath).filter(f => f.endsWith('.jpeg') || f.endsWith('.png'));
  
  Promise.all(files.map(async f => {
    const p = path.join(directoryPath, f);
    const tmp = p + '.tmp';
    
    // Only compress if size > 110kb to save time
    const stats = fs.statSync(p);
    if (stats.size > 110000) {
      console.log(`Compressing ${f}...`);
      await sharp(p)
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality: 60 }) // 60 for better compression
        .toFile(tmp);
      
      fs.renameSync(tmp, p);
      console.log(`Finished ${f}`);
    } else {
      console.log(`Skipping ${f} (size is fine)`);
    }
  })).then(() => {
    console.log('All done!');
  }).catch(e => {
    console.error(e);
  });
} catch(e) {
  console.error('Error during execution', e);
}
