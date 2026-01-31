const { test, expect } = require('@playwright/test');
const { translateText, clearFields } = require('./utils/final-helpers');

// ALL 10 Negative Test Cases
const negativeTestCases = [
  {
    id: 'Neg_Fun_0001',
    name: 'Unsupported SMS Language',
    input: 'gud n8, c u 2moro machan',
    expected: 'ගූඩ් නයිට් සී යූ ටුමොරො මචන්',
    lengthType: 'S',
    category: 'Slang/informal language • Simple sentence • S (≤30 characters) • Robustness validation'
  },
  {
    id: 'Neg_Fun_0002',
    name: 'Complex Code Mixing',
    input: 'I need to visit the bank ATM urgently. passe api yamu kade. urgent aava situation ekak.',
    expected: 'I need to visit ද bank ATM urgently. පස්සෙ අපි යමු කඩෙ. urgent ආව situation එකක්.',
    lengthType: 'M',
    category: 'English mixing • Complex code mixing • M (31–299 characters) • Robustness validation'
  },
  {
    id: 'Neg_Fun_0003',
    name: 'Chat Style',
    input: 'mama @home innavaa',
    expected: 'මම ගෙදර ඉන්නවා',
    lengthType: 'S',
    category: 'Slang/informal language • Chat/social media style • S (≤30 characters) • Robustness validation'
  },
  {
    id: 'Neg_Fun_0004',
    name: 'Invalid Mixed English',
    input: 'good morning kiyalaa kiyanna',
    expected: 'සුබ උදෑසනක් කියලා කියන්න',
    lengthType: 'S',
    category: 'English mixing • Invalid mixed English • S (≤30 characters) • Robustness validation'
  },
  {
    id: 'Neg_Fun_0005',
    name: 'Non-Standard Abbreviation',
    input: 'thx 4 ur help machan',
    expected: 'thanks for your help මචන්',
    lengthType: 'S',
    category: 'Slang/informal language • Non-standard abbreviation • S (≤30 characters) • Robustness validation'
  },
  {
    id: 'Neg_Fun_0006',
    name: 'Invalid Vowel Combination',
    input: 'mata godaaaaaaak biiiiiima one',
    expected: 'මට ගොඩක් බීම ඔනේ',
    lengthType: 'S',
    category: 'Spacing/punctuation • Invalid vowel combination • S (≤30 characters) • Robustness validation'
  },
  {
    id: 'Neg_Fun_0007',
    name: 'Non-standard Romanization',
    input: 'zamanyen api godakma kanne bath thamaa',
    expected: 'සමාන්යෙන් අපි ගොඩක්ම කන්නෙ බත් තමා',
    lengthType: 'S',
    category: 'Spacing/punctuation • Non-standard romanization • S (≤30 characters) • Robustness validation'
  },
  {
    id: 'Neg_Fun_0008',
    name: 'Incorrect Hal Placement',
    input: 'oyaa mee bath tika kann a',
    expected: 'ඔයා මේ බත් ටික කන්න',
    lengthType: 'S',
    category: 'Grammar/linguistic • Incorrect hal placement • S (≤30 characters) • Robustness validation'
  },
  {
    id: 'Neg_Fun_0009',
    name: 'Mixed Case Singlish',
    input: 'AMma ADha Yanavaa',
    expected: 'අම්ම අද යනවා',
    lengthType: 'S',
    category: 'Spacing/punctuation • Mixed case Singlish • S (≤30 characters) • Robustness validation'
  },
  {
    id: 'Neg_Fun_0010',
    name: 'Unsupported Special Symbols',
    input: 'mama trip eka gihin parippuyi & bathuyi kaeevaa',
    expected: 'මම trip එක ගිහින් පරිප්පුයි සහ බතුයි කෑවා',
    lengthType: 'S',
    category: 'Punctuation/numbers • Unsupported special symbols • S (≤30 characters) • Robustness validation'
  }
];

test.describe('Negative Functional Tests - All 10 Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');
    await page.waitForLoadState('networkidle');
    await clearFields(page);
    await page.waitForTimeout(1000);
  });

  negativeTestCases.forEach(testCase => {
    test(`TC ${testCase.id}: ${testCase.name} [${testCase.lengthType}]`, async ({ page }) => {
      console.log(`\n=== NEGATIVE TEST ${testCase.id}: ${testCase.name} ===`);
      console.log(`Category: ${testCase.category}`);
      console.log(`Length Type: ${testCase.lengthType}`);
      
      const actualOutput = await translateText(page, testCase.input);
      
      console.log(`Input: "${testCase.input}"`);
      console.log(`Expected (if perfect): "${testCase.expected}"`);
      console.log(`Actual: "${actualOutput}"`);
      
      // For negative tests, we expect poor/no translation
      let testPassed = false;
      let reason = '';
      
      if (actualOutput === '') {
        testPassed = true;
        reason = 'No output produced (system rejected input)';
      } 
      else if (actualOutput === testCase.input) {
        testPassed = true;
        reason = 'Input returned unchanged (no translation)';
      } 
      else if (!actualOutput.match(/[අ-෴]/) && actualOutput.match(/[a-zA-Z]/)) {
        testPassed = true;
        reason = 'Preserved English (no Sinhala conversion)';
      } 
      else if (actualOutput !== testCase.expected) {
        testPassed = true;
        reason = 'Output differs from expected (poor translation)';
      } 
      else {
        testPassed = false;
        reason = 'Output matched expected (unexpected good translation)';
      }
      
      if (testPassed) {
        console.log(`✅ Test passed: ${reason}`);
      } else {
        console.log(`❌ Test failed: ${reason}`);
        // For negative test, matching expected is actually a failure
        expect(actualOutput).not.toBe(testCase.expected);
      }
      
      // Take screenshot
      await page.screenshot({ 
        path: `reports/screenshots/${testCase.id}_negative.png` 
      });
      
      await clearFields(page);
      await page.waitForTimeout(1000);
    });
  });
});