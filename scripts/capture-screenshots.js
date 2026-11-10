import puppeteer from 'puppeteer-core';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\64086d7f-5a86-49e1-8fb1-51d890c34dea\\screenshots';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // Smooth scroll down to trigger all intersection observers / whileInView
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          setTimeout(resolve, 500);
        }
      }, 100);
    });
  });

  await new Promise(r => setTimeout(r, 600));

  // Full page screenshot with all animations revealed
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'desktop-light-full-revealed.png'), fullPage: true });

  // Capture individual sections for crystal-clear visual verification
  const sections = ['about', 'skills', 'projects', 'journey', 'contact'];
  for (const s of sections) {
    const el = await page.$(`#${s}`);
    if (el) {
      await el.scrollIntoView();
      await new Promise(r => setTimeout(r, 300));
      await page.screenshot({ path: path.join(ARTIFACT_DIR, `section-${s}.png`) });
    }
  }

  await browser.close();
  console.log('All detailed sections captured successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
