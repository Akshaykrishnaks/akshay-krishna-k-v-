import puppeteer from 'puppeteer-core';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\64086d7f-5a86-49e1-8fb1-51d890c34dea\\screenshots';

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  
  // 1. Desktop Hero with Real Photo
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800)); // wait for image load animation
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'updated-hero-desktop.png') });

  // 2. About Section with Real Photo
  const aboutEl = await page.$('#about');
  if (aboutEl) {
    await aboutEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'updated-about-desktop.png') });
  }

  // 3. Mobile Viewport (375x812)
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2, isMobile: true });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'updated-hero-mobile.png') });

  await browser.close();
  console.log('Verification screenshots captured!');
}

verify().catch(console.error);

