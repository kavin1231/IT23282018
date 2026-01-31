const { test, expect } = require('@playwright/test');

test('Simple test to check if helpers work', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com');
  await page.waitForLoadState('networkidle');
  
  // Type text
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await input.fill('mata kiri bonna oonee');
  
  // Click translate
  await page.evaluate(() => {
    document.querySelector('button[aria-label="Translate"]').click();
  });
  
  // Wait
  await page.waitForTimeout(5000);
  
  // Get output
  const output = await page.evaluate(() => {
    const divs = document.querySelectorAll('div.bg-slate-50');
    for (const div of divs) {
      const text = div.textContent || '';
      if (text.trim().length > 0) {
        return text.trim();
      }
    }
    return '';
  });
  
  console.log('Output:', output);
  
  if (output.includes('මට')) {
    console.log('✅ SUCCESS! Translation works!');
  } else {
    console.log('❌ No Sinhala output');
  }
});