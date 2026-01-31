const selectors = require("./selectors");

// Helper functions
async function clearFields(page) {
  try {
    // Try JavaScript first
    await page.evaluate(() => {
      const buttons = document.querySelectorAll("button");
      for (const btn of buttons) {
        if (btn.getAttribute("aria-label") === "Clear") {
          btn.click();
          return;
        }
      }
    });

    // Fallback to selector
    const clearBtn = page.locator(selectors.clearButton);
    if ((await clearBtn.count()) > 0) {
      await clearBtn.click({ force: true });
    }

    await page.waitForTimeout(1000);
    return true;
  } catch (error) {
    console.log("Clear error:", error.message);
    return false;
  }
}

async function translateText(page, text) {
  console.log(
    `\n🔤 Translating: "${text.substring(0, 50)}${text.length > 50 ? "..." : ""}"`,
  );

  try {
    // Clear first - FIXED: Just call clearFields directly
    await clearFields(page);
    await page.waitForTimeout(1000);

    // Fill input
    const input = page.locator(selectors.inputField);
    await input.fill(text);

    // Wait for button to be ready
    await page.waitForTimeout(1500);

    // Click translate - multiple methods
    let clicked = false;

    // Method 1: JavaScript click
    clicked = await page.evaluate(() => {
      const buttons = document.querySelectorAll("button");
      for (const btn of buttons) {
        const aria = btn.getAttribute("aria-label");
        if (aria === "Translate") {
          btn.click();
          return true;
        }
      }
      return false;
    });

    // Method 2: Force click if JS didn't work
    if (!clicked) {
      console.log("Using force click");
      const btn = page.locator(selectors.translateButton);
      if ((await btn.count()) > 0) {
        await btn.click({ force: true });
        clicked = true;
      }
    }

    if (!clicked) {
      console.log("⚠️ Could not click translate button");
      return "";
    }

    // Wait for translation - dynamic timeout based on text length
    const waitTime = text.length > 100 ? 7000 : text.length > 50 ? 5000 : 3000;
    console.log(`Waiting ${waitTime}ms for translation...`);
    await page.waitForTimeout(waitTime);

    // Try multiple methods to get output
    let outputText = "";

    // Method 1: Direct evaluation (most reliable)
    outputText = await page.evaluate(() => {
      // Look for the output div with specific classes
      const divs = document.querySelectorAll("div.bg-slate-50, div.h-80");
      for (const div of divs) {
        const text = div.textContent || "";
        if (text.trim().length > 0) {
          return text;
        }
      }
      return "";
    });

    if (outputText && outputText.trim().length > 0) {
      console.log(
        `✅ Got output: "${outputText.substring(0, 50)}${outputText.length > 50 ? "..." : ""}"`,
      );
      return outputText.trim();
    }

    // Method 2: Try the exact selector
    const outputDiv = page.locator(selectors.outputField);
    if ((await outputDiv.count()) > 0) {
      outputText = await outputDiv.textContent();
      if (outputText && outputText.trim().length > 0) {
        console.log(
          `✅ Got output via selector: "${outputText.substring(0, 50)}${outputText.length > 50 ? "..." : ""}"`,
        );
        return outputText.trim();
      }
    }

    // Method 3: Wait and retry for problematic cases
    if (!outputText || outputText.trim().length === 0) {
      console.log("No output yet, waiting longer...");
      await page.waitForTimeout(3000);

      // Try one more time
      outputText = await page.evaluate(() => {
        const divs = document.querySelectorAll("div");
        for (const div of divs) {
          const text = div.textContent || "";
          if (text.match(/[අ-෴]/)) {
            return text;
          }
        }
        return "";
      });

      if (outputText) {
        console.log(
          `✅ Got output after retry: "${outputText.substring(0, 50)}${outputText.length > 50 ? "..." : ""}"`,
        );
        return outputText.trim();
      }
    }

    console.log("❌ No output found after multiple attempts");
    return "";
  } catch (error) {
    console.error("Translation error:", error.message);
    return "";
  }
}

// Export both functions
module.exports = {
  translateText,
  clearFields,
};
