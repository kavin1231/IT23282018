const { test, expect } = require('@playwright/test');

test('Final working translation test', async ({ page }) => {
  console.log('=== FINAL WORKING TEST ===');
  
  await page.goto('https://www.swifttranslator.com');
  await page.waitForLoadState('networkidle');
  
  // 1. Type text
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await input.fill('mata kiri bonna oonee');
  
  // 2. Click translate - SIMPLE JavaScript
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Translate"]');
    if (btn) {
      console.log('Clicking translate button');
      btn.click();
    }
  });
  
  // 3. Wait longer
  await page.waitForTimeout(5000);
  
  // 4. Get output using the EXACT selector from debug
  const outputSelector = 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50';
  const outputDiv = page.locator(outputSelector);
  
  const count = await outputDiv.count();
  console.log(`Output div count: ${count}`);
  
  if (count > 0) {
    // Method A: Get textContent
    const textContent = await outputDiv.textContent();
    console.log(`Text content: "${textContent}"`);
    
    // Method B: Get innerText
    const innerText = await outputDiv.innerText();
    console.log(`Inner text: "${innerText}"`);
    
    // Method C: Evaluate directly
    const evaluatedText = await page.evaluate((selector) => {
      const element = document.querySelector(selector);
      return element ? element.textContent : '';
    }, outputSelector);
    console.log(`Evaluated text: "${evaluatedText}"`);
    
    // Method D: Try getting via parent
    const parentCard = page.locator('div.card.p-4.flex.flex-col.flex-1:has-text("Sinhala")');
    if (await parentCard.count() > 0) {
      const parentText = await parentCard.textContent();
      console.log(`Parent card text: "${parentText.substring(0, 100)}..."`);
    }
    
    // 5. Take screenshot
    await page.screenshot({ path: 'reports/screenshots/final-working.png', fullPage: true });
    
    // 6. Verify
    if (textContent.includes('මට') || innerText.includes('මට') || evaluatedText.includes('මට')) {
      console.log('✅ SUCCESS! Sinhala text found!');
      console.log(`Translation: "${textContent || innerText || evaluatedText}"`);
    } else {
      console.log('❌ No Sinhala in output');
    }
  } else {
    console.log('❌ Output div not found');
    
    // Try finding any element with Sinhala
    const allText = await page.textContent('body');
    if (allText.includes('මට')) {
      console.log('But "මට" is in page body text!');
      // Extract just the Sinhala part
      const match = allText.match(/මට[^a-zA-Z0-9]*කිරි[^a-zA-Z0-9]*බොන්න[^a-zA-Z0-9]*ඕනේ/);
      if (match) {
        console.log(`Found via regex: "${match[0]}"`);
      }
    }
  }
});