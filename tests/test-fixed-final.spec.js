const { test, expect } = require("@playwright/test");
const { translateText, clearFields } = require("./utils/final-helpers");

test("Test fixed final-helpers.js", async ({ page }) => {
  console.log("=== TESTING FIXED FINAL-HELPERS ===");

  await page.goto("https://www.swifttranslator.com");
  await page.waitForLoadState("networkidle");

  // Test clear function
  await clearFields(page);
  console.log("✅ Clear works");

  // Test translate function
  const output = await translateText(page, "mata kiri bonna oonee");

  if (output && output.includes("මට")) {
    console.log("✅ Translate works! Output:", output);
    expect(output).toContain("මට");
  } else {
    console.log("❌ Translate failed");
  }
});
