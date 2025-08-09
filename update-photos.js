#!/usr/bin/env node

/**
 * Photography Setup Helper
 * 
 * This script helps you quickly update your photography section with new photos and Instagram links.
 * 
 * Usage:
 *   node update-photos.js
 * 
 * Then follow the prompts to add your photo information.
 */

import { readFileSync, writeFileSync } from 'fs';
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));

async function updatePhotos() {
  console.log('📸 Photography Setup Helper\n');
  console.log('This will help you update your 6 photos with Instagram links.\n');
  
  const photos = [];
  
  for (let i = 1; i <= 6; i++) {
    console.log(`--- Photo ${i} ---`);
    
    const caption = await question(`Caption for photo${i}.jpg: `);
    const instagramUrl = await question(`Instagram URL for photo${i}: `);
    const alt = await question(`Alt text (optional): `) || `Photography sample ${i}`;
    
    photos.push({
      id: String(i),
      image: `/images/photos/photo${i}.jpg`,
      caption: caption.trim(),
      instagramUrl: instagramUrl.trim(),
      alt: alt.trim()
    });
    
    console.log('✅ Added!\n');
  }
  
  // Generate the TypeScript file content
  const fileContent = `// Static photo data for the photography section
export interface PhotoData {
  id: string;
  image: string;
  caption: string;
  instagramUrl: string;
  alt: string;
}

export const photos: PhotoData[] = ${JSON.stringify(photos, null, 2)};`;

  // Write to the photos.ts file
  try {
    writeFileSync('./src/data/photos.ts', fileContent);
    console.log('✅ Successfully updated src/data/photos.ts!');
    console.log('\n📝 Don\'t forget to:');
    console.log('   1. Add your 6 photos to public/images/photos/');
    console.log('   2. Name them photo1.jpg through photo6.jpg');
    console.log('   3. Test your site with: npm run dev');
  } catch (error) {
    console.error('❌ Error updating photos.ts:', error.message);
  }
  
  rl.close();
}

// Check if we're being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  updatePhotos().catch(console.error);
}
