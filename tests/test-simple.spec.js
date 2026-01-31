const { test, expect } = require('@playwright/test');

test('Simple test to check if translation works', async ({ page }) => {
  console.log('=== SIMPLE TEST ===');
  
  await page.goto('https://www.swifttranslator.com');
  await page.waitForLoadState('networkidle');
  
  // 1. Type text
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await input.fill('mata kiri bonna oonee');
  
  // Take screenshot before
  await page.screenshot({ path: 'reports/screenshots/simple-before.png' });
  
  // 2. Click translate
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Translate"]');
    if (btn) {
      console.log('Clicking translate button');
      btn.click();
    }
  });
  
  // 3. Wait
  await page.waitForTimeout(5000);
  
  // Take screenshot after
  await page.screenshot({ path: 'reports/screenshots/simple-after.png' });
  
  // 4. Get output using the EXACT selector we found in debug
  const outputSelector = 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50';
  const outputDiv = page.locator(outputSelector);
  
  const count = await outputDiv.count();
  console.log(`Output div count: ${count}`);
  
  if (count > 0) {
    const textContent = await outputDiv.textContent();
    console.log(`Text content: "${textContent}"`);
    
    if (textContent.includes('මට')) {
      console.log('✅ SUCCESS! Sinhala text found!');
      console.log(`Translation: "${textContent}"`);
    } else {
      console.log('❌ No Sinhala in output');
    }
  } else {
    console.log('❌ Output div not found');
    
    // Try alternative selector
    const altOutput = page.locator('div.bg-slate-50');
    const altCount = await altOutput.count();
    console.log(`Alternative output div count: ${altCount}`);
    
    if (altCount > 0) {
      const altText = await altOutput.textContent();
      console.log(`Alternative text: "${altText}"`);
    }
  }
});