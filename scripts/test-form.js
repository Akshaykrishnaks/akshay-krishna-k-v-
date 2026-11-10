import puppeteer from 'puppeteer-core';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\64086d7f-5a86-49e1-8fb1-51d890c34dea\\screenshots';

async function testForm() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });

  // Scroll to contact
  const contactSection = await page.$('#contact');
  await contactSection.scrollIntoView();
  await new Promise(r => setTimeout(r, 400));

  await page.type('#name', 'Ananya Sharma');
  await page.type('#email', 'ananya@example.com');
  await page.type('#subject', 'Collaboration on AI Healthcare model');
  await page.type('#message', 'Hi Akshay, love your HealthPredict AI project! Lets collaborate.');
  
  await page.click('button[type="submit"]');
  await new Promise(r => setTimeout(r, 1400));

  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'contact-success.png') });
  await browser.close();
  console.log('Form submission tested and screenshot saved!');
}

testForm().catch(console.error);

