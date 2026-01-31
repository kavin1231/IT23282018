// tests/utils/selectors.js
module.exports = {
  // Input field
  inputField: 'textarea[placeholder="Input Your Singlish Text Here."]',
  
  // Translate button
  translateButton: 'button[aria-label="Translate"]',
  
  // Output field - CORRECT selector from debug
  outputField: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50',
  
  // Alternative selectors that might work
  outputFieldAlt1: 'div.bg-slate-50',
  outputFieldAlt2: 'div.h-80.bg-slate-50',
  outputFieldAlt3: 'div.card.p-4.flex.flex-col.flex-1:has-text("Sinhala") div.bg-slate-50',
  
  // Clear button
  clearButton: 'button[aria-label="Clear"]'
};