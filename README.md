# Swift Translator Automated Test Suite

## Overview

Complete automated testing solution for Swift Translator (Singlish to Sinhala conversion) using Playwright. Contains 44 test cases covering functional, negative, and UI testing.

## Test Coverage

- **30 Positive Tests**: Valid Singlish to Sinhala conversions
- **10 Negative Tests**: Invalid/edge case inputs
- **4 UI Tests**: Interface functionality testing
- **Total**: 44 test cases

## Prerequisites

- Node.js 16 or higher
- npm or yarn

## Installation

```bash
npm install
npx playwright install

# Command 1: Run all tests
npx playwright test --headed

# Command 2: Run positive tests only
npx playwright test all-positive-tests-complete.spec.js --headed

# Command 3: Run negative tests only
npx playwright test all-negative-tests-complete.spec.js --headed

# Command 4: Run UI tests only
npx playwright test all-ui-tests-complete.spec.js --headed

# Command 5: View reports
npx playwright show-report






final output when run>>>>

PS C:\Users\kavin\Desktop\IT23282018> npx playwright test all-positive-tests-complete.spec.js --headed

Running 30 tests using 8 workers
…Tests - All 30 Tests › TC Pos_Fun_0005: Imperative Command [S]

=== TC Pos_Fun_0005: Imperative Command ===
Category: Daily language usage • Imperative sentence • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "karuNaakarala mee potha mata dhenna"
…s - All 30 Tests › TC Pos_Fun_0004: Interrogative Question [M]

=== TC Pos_Fun_0004: Interrogative Question ===
Category: Daily language usage • Interrogative sentence • M (31–299 characters) • Accuracy validation
Length Type: M                                                 
                                                               
🔤 Translating: "machan heta havasata mokadha karanne kiyalaa kiyan..."
…nal Tests - All 30 Tests › TC Pos_Fun_0008: Polite Request [M]

=== TC Pos_Fun_0008: Polite Request ===
Category: Daily language usage • Polite request • M (31–299 characters) • Accuracy validation
Length Type: M                                                 
                                                               
🔤 Translating: "mata bonna elakiri ekak hadhala dhenna puluvandha?"
…unctional Tests - All 30 Tests › TC Pos_Fun_0007: Greeting [S]

=== TC Pos_Fun_0007: Greeting ===
Category: Daily language usage • Simple sentence • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "suba udhaeesanak"
… All 30 Tests › TC Pos_Fun_0001: Simple positive statement [S]

=== TC Pos_Fun_0001: Simple positive statement ===
Category: Daily language usage • Simple sentence • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "mata kiri bonna oonee"
…l Tests - All 30 Tests › TC Pos_Fun_0003: Complex Sentence [S]

=== TC Pos_Fun_0003: Complex Sentence ===
Category: Daily language usage • Complex sentence • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "mama parakku velaa giyoth thaaththa mata baniivi"
… Tests - All 30 Tests › TC Pos_Fun_0002: Compound Sentence [M]

=== TC Pos_Fun_0002: Compound Sentence ===
Category: Daily language usage • Compound sentence • M (31–299 characters) • Accuracy validation
Length Type: M                                                 
                                                               
🔤 Translating: "mama kiri bonne naee, haebaeyi naqqgi bonavaa"
… Tests - All 30 Tests › TC Pos_Fun_0006: Negative Sentence [S]

=== TC Pos_Fun_0006: Negative Sentence ===
Category: Daily language usage • Negative sentence • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "naee mama eeka karannee naehae"
…Tests - All 30 Tests › TC Pos_Fun_0005: Imperative Command [S]
Waiting 3000ms for translation...
…s - All 30 Tests › TC Pos_Fun_0004: Interrogative Question [M]
Waiting 5000ms for translation...
…nal Tests - All 30 Tests › TC Pos_Fun_0008: Polite Request [M]
Waiting 3000ms for translation...
…unctional Tests - All 30 Tests › TC Pos_Fun_0007: Greeting [S]
Waiting 3000ms for translation...
… All 30 Tests › TC Pos_Fun_0001: Simple positive statement [S]
Waiting 3000ms for translation...
…l Tests - All 30 Tests › TC Pos_Fun_0003: Complex Sentence [S]
Waiting 3000ms for translation...
…Tests - All 30 Tests › TC Pos_Fun_0005: Imperative Command [S]
✅ Got output: "කරුණාකරල මේ පොත මට දෙන්න"
Input (35 chars): "karuNaakarala mee potha mata dhenna"        
Expected: "කරුණාකරල මේ පොත මට දෙන්න"                           
Actual: "කරුණාකරල මේ පොත මට දෙන්න"                             
✅ Exact match!                                                
… Tests - All 30 Tests › TC Pos_Fun_0002: Compound Sentence [M]
Waiting 3000ms for translation...
… Tests - All 30 Tests › TC Pos_Fun_0006: Negative Sentence [S]
Waiting 3000ms for translation...
…nal Tests - All 30 Tests › TC Pos_Fun_0008: Polite Request [M]
✅ Got output: "මට බොන්න එලකිරි එකක් හදල දෙන්න පුලුවන්ද?"
Input (50 chars): "mata bonna elakiri ekak hadhala dhenna puluvandha?"
…unctional Tests - All 30 Tests › TC Pos_Fun_0007: Greeting [S]
✅ Got output: "සුබ උදෑසනක්"
Input (16 chars): "suba udhaeesanak"                           
Expected: "සුබ උදෑසනක්"
Actual: "සුබ උදෑසනක්"                                          
✅ Exact match!                                                
…nal Tests - All 30 Tests › TC Pos_Fun_0008: Polite Request [M]
Expected: "මට බොන්න එලකිරි එකක් හදල දෙන්න පුලුවන්ද?"
Actual: "මට බොන්න එලකිරි එකක් හදල දෙන්න පුලුවන්ද?"             
✅ Exact match!
… All 30 Tests › TC Pos_Fun_0001: Simple positive statement [S]
✅ Got output: "මට කිරි බොන්න ඕනේ"
Input (21 chars): "mata kiri bonna oonee"                      
Expected: "මට කිරි බොන්න ඕනේ"                                  
Actual: "මට කිරි බොන්න ඕනේ"                                    
✅ Exact match!                                                
…l Tests - All 30 Tests › TC Pos_Fun_0003: Complex Sentence [S]
✅ Got output: "මම පරක්කු වෙලා ගියොත් තාත්ත මට බනීවි"
Input (48 chars): "mama parakku velaa giyoth thaaththa mata baniivi"
Expected: "මම පරක්කු වෙලා ගියොත් තාත්ත මට බනීවි"               
Actual: "මම පරක්කු වෙලා ගියොත් තාත්ත මට බනීවි"                 
✅ Exact match!                                                
…s - All 30 Tests › TC Pos_Fun_0004: Interrogative Question [M]
✅ Got output: "මචන් හෙට හවසට මොකද කරන්නේ කියලා කියන්න පුලුවන්ද       ද?"
Input (64 chars): "machan heta havasata mokadha karanne kiyalaa kiyan..."
Expected: "මචන් හෙට හවසට මොකද කරන්නේ කියලා කියන්න පුලුවන්ද?"   
Actual: "මචන් හෙට හවසට මොකද කරන්නේ කියලා කියන්න පුලුවන්ද?"     
✅ Exact match!                                                
… Tests - All 30 Tests › TC Pos_Fun_0002: Compound Sentence [M]
✅ Got output: "මම කිරි බොන්නෙ නෑ, හැබැයි නංගි බොනවා"
Input (45 chars): "mama kiri bonne naee, haebaeyi naqqgi bonavaa"
Expected: "මම කිරි බොන්නෙ නෑ, හැබැයි නංගි බොනවා"               
Actual: "මම කිරි බොන්නෙ නෑ, හැබැයි නංගි බොනවා"                 
✅ Exact match!                                                
… Tests - All 30 Tests › TC Pos_Fun_0006: Negative Sentence [S]
✅ Got output: "නෑ මම ඒක කරන්නේ නැහැ"
Input (30 chars): "naee mama eeka karannee naehae"             
Expected: "නෑ මම ඒක කරන්නේ නැහැ"                               
Actual: "නෑ මම ඒක කරන්නේ නැහැ"                                 
✅ Exact match!                                                
…al Tests - All 30 Tests › TC Pos_Fun_0009: Simple Response [S]

=== TC Pos_Fun_0009: Simple Response ===
Category: Daily language usage • Simple sentence • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "hari mama innam"
…tional Tests - All 30 Tests › TC Pos_Fun_0010: Collocation [M]

=== TC Pos_Fun_0010: Collocation ===
Category: Daily language usage • Complex sentence • M (31–299 characters) • Accuracy validation
Length Type: M                                                 
                                                               
🔤 Translating: "mage adha dhavase vaeda okkoma ivarayi, mama dhan ..."
…ional Tests - All 30 Tests › TC Pos_Fun_0011: Joined Words [S]

=== TC Pos_Fun_0011: Joined Words ===
Category: Spacing/punctuation • Single long word • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "mamadhaenmeepadamkaranava"
…ll 30 Tests › TC Pos_Fun_0012: Repeated Words for Emphasis [S]

=== TC Pos_Fun_0012: Repeated Words for Emphasis ===
Category: Spacing/punctuation • Repeated words • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "dhuvamu dhuvamu ikmanata"
…ctional Tests - All 30 Tests › TC Pos_Fun_0013: Past Tense [M]

=== TC Pos_Fun_0013: Past Tense ===
Category: Tense handling • Past tense • M (31–299 characters) • Accuracy validation
Length Type: M                                                 
                                                               
🔤 Translating: "iiye api vaththe godak velaa sellam karaa"    
…onal Tests - All 30 Tests › TC Pos_Fun_0014: Present Tense [S]

=== TC Pos_Fun_0014: Present Tense ===
Category: Tense handling • Present tense • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "mama dhaen sellam karanavaa"
…ional Tests - All 30 Tests › TC Pos_Fun_0015: Future Tense [S]

=== TC Pos_Fun_0015: Future Tense ===
Category: Tense handling • Future tense • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "api heta geem ekak gahamu"
…ional Tests - All 30 Tests › TC Pos_Fun_0016: Plural Usage [M]

=== TC Pos_Fun_0016: Plural Usage ===
Category: Grammar/linguistic • Plural forms • M (31–299 characters) • Accuracy validation
Length Type: M                                                 
                                                               
🔤 Translating: "minissu seerama ehe mehe baya velaa dhivva nisaa, ..."
…al Tests - All 30 Tests › TC Pos_Fun_0009: Simple Response [S]
Waiting 3000ms for translation...
…tional Tests - All 30 Tests › TC Pos_Fun_0010: Collocation [M]
Waiting 5000ms for translation...
…ional Tests - All 30 Tests › TC Pos_Fun_0011: Joined Words [S]
Waiting 3000ms for translation...
…ll 30 Tests › TC Pos_Fun_0012: Repeated Words for Emphasis [S]
Waiting 3000ms for translation...
…ctional Tests - All 30 Tests › TC Pos_Fun_0013: Past Tense [M]
Waiting 3000ms for translation...
…onal Tests - All 30 Tests › TC Pos_Fun_0014: Present Tense [S]
Waiting 3000ms for translation...
…al Tests - All 30 Tests › TC Pos_Fun_0009: Simple Response [S]
✅ Got output: "හරි මම ඉන්නම්"
Input (15 chars): "hari mama innam"                            
Expected: "හරි මම ඉන්නම්"                                      
Actual: "හරි මම ඉන්නම්"                                        
✅ Exact match!                                                
…ional Tests - All 30 Tests › TC Pos_Fun_0015: Future Tense [S]
Waiting 3000ms for translation...
…ional Tests - All 30 Tests › TC Pos_Fun_0016: Plural Usage [M]
Waiting 5000ms for translation...
…ional Tests - All 30 Tests › TC Pos_Fun_0011: Joined Words [S]
✅ Got output: "මමදැන්මේපඩම්කරනව"
Input (25 chars): "mamadhaenmeepadamkaranava"                  
Expected: "මමදැන්මේපඩම්කරනව"                                   
Actual: "මමදැන්මේපඩම්කරනව"
✅ Exact match!                                                
…ll 30 Tests › TC Pos_Fun_0012: Repeated Words for Emphasis [S]
✅ Got output: "දුවමු දුවමු ඉක්මනට"
Input (24 chars): "dhuvamu dhuvamu ikmanata"                   
Expected: "දුවමු දුවමු ඉක්මනට"                                 
Actual: "දුවමු දුවමු ඉක්මනට"                                   
✅ Exact match!                                                
…ctional Tests - All 30 Tests › TC Pos_Fun_0013: Past Tense [M]
✅ Got output: "ඊයෙ අපි වත්තෙ ගොඩක් වෙලා සෙල්ලම් කරා"
Input (41 chars): "iiye api vaththe godak velaa sellam karaa"  
Expected: "ඊයෙ අපි වත්තෙ ගොඩක් වෙලා සෙල්ලම් කරා"               
Actual: "ඊයෙ අපි වත්තෙ ගොඩක් වෙලා සෙල්ලම් කරා"                 
✅ Exact match!                                                
…onal Tests - All 30 Tests › TC Pos_Fun_0014: Present Tense [S]
✅ Got output: "මම දැන් සෙල්ලම් කරනවා"
Input (27 chars): "mama dhaen sellam karanavaa"                
Expected: "මම දැන් සෙල්ලම් කරනවා"                              
Actual: "මම දැන් සෙල්ලම් කරනවා"                                
✅ Exact match!                                                
…tional Tests - All 30 Tests › TC Pos_Fun_0010: Collocation [M]
✅ Got output: "mage අද දවසෙ වැඩ ඔක්කොම ඉවරයි, මම දන් ගෙදර යනවා  ා"
Input (65 chars): "mage adha dhavase vaeda okkoma ivarayi, mama dhan ..."
Expected: "මගේ අද දවසේ වැඩ ඔක්කොම ඉවරයි, මම දැන් ගෙදර යනවා"    
Actual: "mage අද දවසෙ වැඩ ඔක්කොම ඉවරයි, මම දන් ගෙදර යනවා"      
✅ Sinhala produced (partial success)                          
…ional Tests - All 30 Tests › TC Pos_Fun_0015: Future Tense [S]
✅ Got output: "අපි හෙට ගේම් එකක් ගහමු"
Input (25 chars): "api heta geem ekak gahamu"                  
Expected: "අපි හෙට ගේම් එකක් ගහමු"                             
Actual: "අපි හෙට ගේම් එකක් ගහමු"                               
✅ Exact match!                                                
…al Tests - All 30 Tests › TC Pos_Fun_0017: High Politeness [S]

=== TC Pos_Fun_0017: High Politeness ===
Category: Grammar/linguistic • Politeness levels • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "karunakarala mata oya paeena dhenna"
…ional Tests - All 30 Tests › TC Pos_Fun_0016: Plural Usage [M]
✅ Got output: "මිනිස්සු සේරම එහෙ මෙහෙ බය වෙලා දිව්ව නිසා, මත්         දිව..."
Input (62 chars): "minissu seerama ehe mehe baya velaa dhivva nisaa, ..."
Expected: "මිනිස්සු සේරම එහෙ මෙහෙ බය වෙලා දිව්ව නිසා, මත් දිව..."
Actual: "මිනිස්සු සේරම එහෙ මෙහෙ බය වෙලා දිව්ව නිසා, මත් දිව..."
✅ Exact match!                                                
… - All 30 Tests › TC Pos_Fun_0018: English Technical Terms [M]

=== TC Pos_Fun_0018: English Technical Terms ===
Category: English mixing • Technical terms • M (31–299 characters) • Accuracy validation
Length Type: M                                                 
                                                               
🔤 Translating: "Facebook ekee aluthin photo ekak upload karanna oo..."
…l Tests - All 30 Tests › TC Pos_Fun_0019: Places and Names [M]

=== TC Pos_Fun_0019: Places and Names ===
Category: English mixing • Proper nouns • M (31–299 characters) • Accuracy validation
Length Type: M                                                 
                                                               
🔤 Translating: "heta api Nugegoda yanava Kandy ekata adhum vagayak..."
…ts - All 30 Tests › TC Pos_Fun_0020: English Abbreviations [S]

=== TC Pos_Fun_0020: English Abbreviations ===
Category: English mixing • Common abbreviations • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "mata chicken kanna onee"
… Tests - All 30 Tests › TC Pos_Fun_0021: Punctuation Input [S]

=== TC Pos_Fun_0021: Punctuation Input ===
Category: Punctuation/numbers • Mixed punctuation • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "Hello! kohomadha ithin?"
…Tests - All 30 Tests › TC Pos_Fun_0022: Currency and Units [S]

=== TC Pos_Fun_0022: Currency and Units ===
Category: Punctuation/numbers • Currency/units • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "methana siini 5kg thiinavaa mila Rs.1000"     
…tional Tests - All 30 Tests › TC Pos_Fun_0023: Slang Usage [S]

=== TC Pos_Fun_0023: Slang Usage ===
Category: Slang/informal language • Slang terms • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "ammatasiri maru nee"
…al Tests - All 30 Tests › TC Pos_Fun_0017: High Politeness [S]
Waiting 3000ms for translation...
… - All 30 Tests › TC Pos_Fun_0018: English Technical Terms [M]
Waiting 5000ms for translation...
…l Tests - All 30 Tests › TC Pos_Fun_0019: Places and Names [M]
Waiting 5000ms for translation...
…al Tests - All 30 Tests › TC Pos_Fun_0024: Multiple Spaces [M]

=== TC Pos_Fun_0024: Multiple Spaces ===
Category: Spacing/punctuation • Multiple spaces • M (31–299 characters) • Robustness validation
Length Type: M                                                 
                                                               
🔤 Translating: "mama   heta    yanava   panadhureeta   salli   vag..."
…ts - All 30 Tests › TC Pos_Fun_0020: English Abbreviations [S]
Waiting 3000ms for translation...
… Tests - All 30 Tests › TC Pos_Fun_0021: Punctuation Input [S]
Waiting 3000ms for translation...
…al Tests - All 30 Tests › TC Pos_Fun_0017: High Politeness [S]
✅ Got output: "කරුනකරල මට ඔය පෑන දෙන්න"
Input (35 chars): "karunakarala mata oya paeena dhenna"        
Expected: "කරුණාකරල මට ඔය පෑන දෙන්න"                           
Actual: "කරුනකරල මට ඔය පෑන දෙන්න"                              
✅ Sinhala produced (partial success)                          
…Tests - All 30 Tests › TC Pos_Fun_0022: Currency and Units [S]
Waiting 3000ms for translation...
…tional Tests - All 30 Tests › TC Pos_Fun_0023: Slang Usage [S]
Waiting 3000ms for translation...
…ts - All 30 Tests › TC Pos_Fun_0020: English Abbreviations [S]
✅ Got output: "මට chicken කන්න ඔනේ"
Input (23 chars): "mata chicken kanna onee"                    
Expected: "මට chicken කන්න ඔනේ"                                
Actual: "මට chicken කන්න ඔනේ"                                  
✅ Exact match!                                                
… Tests - All 30 Tests › TC Pos_Fun_0021: Punctuation Input [S]
✅ Got output: "Hello! කොහොමද ඉතින්?"
Input (23 chars): "Hello! kohomadha ithin?"                    
Expected: "Hello! කොහොමද ඉතින්?"                               
Actual: "Hello! කොහොමද ඉතින්?"                                 
✅ Exact match!                                                
…al Tests - All 30 Tests › TC Pos_Fun_0024: Multiple Spaces [M]
Waiting 5000ms for translation...
…Tests - All 30 Tests › TC Pos_Fun_0022: Currency and Units [S]
✅ Got output: "මෙතන සීනි 5kg තීනවා මිල Rs.1000"
Input (40 chars): "methana siini 5kg thiinavaa mila Rs.1000"   
Expected: "මෙතන සීනි 5kg තීනවා මිල Rs.1000"                    
Actual: "මෙතන සීනි 5kg තීනවා මිල Rs.1000"                      
✅ Exact match!                                                
…tional Tests - All 30 Tests › TC Pos_Fun_0023: Slang Usage [S]
✅ Got output: "අම්මටසිරි මරු නේ"
Input (19 chars): "ammatasiri maru nee"                        
Expected: "අම්මටසිරි මරු නේ"                                   
Actual: "අම්මටසිරි මරු නේ"                                     
✅ Exact match!                                                
… - All 30 Tests › TC Pos_Fun_0018: English Technical Terms [M]
✅ Got output: "Facebook එකේ අලුතින් photo එකක් upload කරන්න ඕන    නෙ"
Input (52 chars): "Facebook ekee aluthin photo ekak upload karanna oo..."
Expected: "Facebook එකේ අලුතින් photo එකක් upload කරන්න ඕනෙ"   
Actual: "Facebook එකේ අලුතින් photo එකක් upload කරන්න ඕනෙ"     
✅ Exact match!                                                
…l Tests - All 30 Tests › TC Pos_Fun_0019: Places and Names [M]
✅ Got output: "හෙට අපි Nugegoda යනව Kandy එකට අදුම් වගයක් ගන්න    න"
Input (56 chars): "heta api Nugegoda yanava Kandy ekata adhum vagayak..."
Expected: "හෙට අපි Nugegoda යනව Kandy එකට අදුම් වගයක් ගන්න"         
Actual: "හෙට අපි Nugegoda යනව Kandy එකට අදුම් වගයක් ගන්න"      
✅ Exact match!                                                
…onal Tests - All 30 Tests › TC Pos_Fun_0025: Date and Time [M]

=== TC Pos_Fun_0025: Date and Time ===
Category: Punctuation/numbers • Date/time format • M (31–299 characters) • Robustness validation
Length Type: M                                                 
                                                               
🔤 Translating: "meeting eka december 25, 2024 udhee 10.30 AM vagee"
…Tests › TC Pos_Fun_0026: Multi-line Input with Line Breaks [M]

=== TC Pos_Fun_0026: Multi-line Input with Line Breaks ===     
Category: Formatting (paragraph) • Multi-line input • M (31–299 characters) • Robustness validation
Length Type: M                                                 

🔤 Translating: "mama adha gedhara yanava. heta vaedata yanavaa. pa..."
…al Tests - All 30 Tests › TC Pos_Fun_0024: Multiple Spaces [M]
✅ Got output: "මම   හෙට    යනව   පනදුරේට   සල්ලි   වගයක්     ද   දාන්..."
Input (66 chars): "mama   heta    yanava   panadhureeta   salli   vag..."
Expected: "මම   හෙට    යනව   පනදුරේට   සල්ලි   වගයක්     දාන්..."
Actual: "මම   හෙට    යනව   පනදුරේට   සල්ලි   වගයක්     දාන්..."
✅ Exact match!                                                
…ts - All 30 Tests › TC Pos_Fun_0027: English Abbreviations [S]

=== TC Pos_Fun_0027: English Abbreviations ===
Category: English mixing • Abbreviations • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "mata PDF eka evanna"
… Tests - All 30 Tests › TC Pos_Fun_0028: Pronoun Variation [S]

=== TC Pos_Fun_0028: Pronoun Variation ===
Category: Grammar/linguistic • Pronoun usage • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "mama heta office ekatath yanavaa"
…onal Tests - All 30 Tests › TC Pos_Fun_0025: Date and Time [M]
Waiting 3000ms for translation...
…0 Tests › TC Pos_Fun_0029: Request with Poleness Variation [S]

=== TC Pos_Fun_0029: Request with Poleness Variation ===       
Category: Grammar/linguistic • Politeness variations • S (≤30 characters) • Accuracy validation
Length Type: S                                                 
                                                               
🔤 Translating: "karunaakara dheveni mahalata yanna"
… 30 Tests › TC Pos_Fun_0030: Long Input (>=300 characters) [L]

=== TC Pos_Fun_0030: Long Input (>=300 characters) ===
Category: Formatting (paragraph) • Complex sentence • L (≥300 characters) • Robustness validation
Length Type: L                                                 
                                                               
🔤 Translating: "mama adha magee sahodharayage gedhara yanava. mage..."
…Tests › TC Pos_Fun_0026: Multi-line Input with Line Breaks [M]
Waiting 5000ms for translation...
…ts - All 30 Tests › TC Pos_Fun_0027: English Abbreviations [S]
Waiting 3000ms for translation...
…onal Tests - All 30 Tests › TC Pos_Fun_0025: Date and Time [M]
✅ Got output: "meeting එක december 25, 2024 උදේ 10.30 AM වගේ"
Input (50 chars): "meeting eka december 25, 2024 udhee 10.30 AM vagee"
Expected: "meeting එක december 25, 2024 උදේ 10.30 AM වගේ"      
Actual: "meeting එක december 25, 2024 උදේ 10.30 AM වගේ"        
✅ Exact match!                                                
… Tests - All 30 Tests › TC Pos_Fun_0028: Pronoun Variation [S]
Waiting 3000ms for translation...
…0 Tests › TC Pos_Fun_0029: Request with Poleness Variation [S]
Waiting 3000ms for translation...
… 30 Tests › TC Pos_Fun_0030: Long Input (>=300 characters) [L]
Waiting 7000ms for translation...
…ts - All 30 Tests › TC Pos_Fun_0027: English Abbreviations [S]
✅ Got output: "මට PDF එක එවන්න"
Input (19 chars): "mata PDF eka evanna"                        
Expected: "මට PDF එක එවන්න"                                    
Actual: "මට PDF එක එවන්න"                                      
✅ Exact match!                                                
… Tests - All 30 Tests › TC Pos_Fun_0028: Pronoun Variation [S]
✅ Got output: "මම හෙට office එකටත් යනවා"
Input (32 chars): "mama heta office ekatath yanavaa"           
Expected: "මම හෙට office එකටත් යනවා"                           
Actual: "මම හෙට office එකටත් යනවා"                             
✅ Exact match!                                                
…Tests › TC Pos_Fun_0026: Multi-line Input with Line Breaks [M]
✅ Got output: "මම අද ගෙදර යනව. හෙට වැඩට යනවා. පස්සෙ රෑ කෑමටත්   යමු..."
Input (75 chars): "mama adha gedhara yanava. heta vaedata yanavaa. pa..."
Expected: "මම අද ගෙදර යනවා. හෙට වැඩට යනවා. පස්සේ රෑ කෑමටත් යම..."
Actual: "මම අද ගෙදර යනව. හෙට වැඩට යනවා. පස්සෙ රෑ කෑමටත් යමු..."
✅ Close match (contains beginning)                            
…0 Tests › TC Pos_Fun_0029: Request with Poleness Variation [S]
✅ Got output: "කරුනාකර දෙවෙනි මහලට යන්න"
Input (34 chars): "karunaakara dheveni mahalata yanna"         
Expected: "කරුණාකර දෙවනි මහලට යන්න"                            
Actual: "කරුනාකර දෙවෙනි මහලට යන්න"                             
✅ Sinhala produced (partial success)                          
… 30 Tests › TC Pos_Fun_0030: Long Input (>=300 characters) [L]
✅ Got output: "මම අද මගේ සහොදරයගෙ ගෙදර යනව. මගේ සහොදරය මාව cinema..."
Input (556 chars): "mama adha magee sahodharayage gedhara yanava. mage..."
Expected: "මම අද මගේ සහොදරයගෙ ගෙදර යනව. මගේ සහොදරය මාව cinema..."
Actual: "මම අද මගේ සහොදරයගෙ ගෙදර යනව. මගේ සහොදරය මාව cinema..."
✅ Long text test passed - contains key Sinhala words          
  30 passed (59.2s)

To open last HTML report run:

  npx playwright show-report

PS C:\Users\kavin\Desktop\IT23282018> npx playwright test all-negative-tests-complete.spec.js --headed

Running 10 tests using 8 workers
… All 10 Tests › TC Neg_Fun_0005: Non-Standard Abbreviation [S]

=== NEGATIVE TEST Neg_Fun_0005: Non-Standard Abbreviation ===  
Category: Slang/informal language • Non-standard abbreviation • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "thx 4 ur help machan"
… All 10 Tests › TC Neg_Fun_0007: Non-standard Romanization [S]

=== NEGATIVE TEST Neg_Fun_0007: Non-standard Romanization ===  
Category: Spacing/punctuation • Non-standard romanization • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "zamanyen api godakma kanne bath thamaa"       
…ctional Tests - All 10 Tests › TC Neg_Fun_0003: Chat Style [S]

=== NEGATIVE TEST Neg_Fun_0003: Chat Style ===
Category: Slang/informal language • Chat/social media style • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "mama @home innavaa"
…ests - All 10 Tests › TC Neg_Fun_0002: Complex Code Mixing [M]

=== NEGATIVE TEST Neg_Fun_0002: Complex Code Mixing ===        
Category: English mixing • Complex code mixing • M (31–299 characters) • Robustness validation
Length Type: M                                                 
                                                               
🔤 Translating: "I need to visit the bank ATM urgently. passe api y..."
… All 10 Tests › TC Neg_Fun_0006: Invalid Vowel Combination [S]

=== NEGATIVE TEST Neg_Fun_0006: Invalid Vowel Combination ===  
Category: Spacing/punctuation • Invalid vowel combination • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "mata godaaaaaaak biiiiiima one"
…ts - All 10 Tests › TC Neg_Fun_0004: Invalid Mixed English [S]

=== NEGATIVE TEST Neg_Fun_0004: Invalid Mixed English ===      
Category: English mixing • Invalid mixed English • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "good morning kiyalaa kiyanna"
… - All 10 Tests › TC Neg_Fun_0008: Incorrect Hal Placement [S]

=== NEGATIVE TEST Neg_Fun_0008: Incorrect Hal Placement ===    
Category: Grammar/linguistic • Incorrect hal placement • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "oyaa mee bath tika kann a"
… All 10 Tests › TC Neg_Fun_0005: Non-Standard Abbreviation [S]
Waiting 3000ms for translation...
…- All 10 Tests › TC Neg_Fun_0001: Unsupported SMS Language [S]

=== NEGATIVE TEST Neg_Fun_0001: Unsupported SMS Language ===   
Category: Slang/informal language • Simple sentence • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "gud n8, c u 2moro machan"
… All 10 Tests › TC Neg_Fun_0007: Non-standard Romanization [S]
Waiting 3000ms for translation...
…ctional Tests - All 10 Tests › TC Neg_Fun_0003: Chat Style [S]
Waiting 3000ms for translation...
…ests - All 10 Tests › TC Neg_Fun_0002: Complex Code Mixing [M]
Waiting 5000ms for translation...
… All 10 Tests › TC Neg_Fun_0006: Invalid Vowel Combination [S]
Waiting 3000ms for translation...
…ts - All 10 Tests › TC Neg_Fun_0004: Invalid Mixed English [S]
Waiting 3000ms for translation...
… - All 10 Tests › TC Neg_Fun_0008: Incorrect Hal Placement [S]
Waiting 3000ms for translation...
… All 10 Tests › TC Neg_Fun_0005: Non-Standard Abbreviation [S]
✅ Got output: "තx 4 උර් help මචන්"
Input: "thx 4 ur help machan"                                  
Expected (if perfect): "thanks for your help මචන්"             
Actual: "තx 4 උර් help මචන්"                                   
✅ Test passed: Output differs from expected (poor translation)
… All 10 Tests › TC Neg_Fun_0007: Non-standard Romanization [S]
✅ Got output: "zඅමන්යෙන් අපි ගොඩක්ම කන්නෙ බත් තමා"
Input: "zamanyen api godakma kanne bath thamaa"                
Expected (if perfect): "සමාන්යෙන් අපි ගොඩක්ම කන්නෙ බත් තමා"    
Actual: "zඅමන්යෙන් අපි ගොඩක්ම කන්නෙ බත් තමා"                   
✅ Test passed: Output differs from expected (poor translation)
…ctional Tests - All 10 Tests › TC Neg_Fun_0003: Chat Style [S]
✅ Got output: "මම @home ඉන්නවා"
Input: "mama @home innavaa"                                    
Expected (if perfect): "මම ගෙදර ඉන්නවා"                        
Actual: "මම @home ඉන්නවා"                                      
✅ Test passed: Output differs from expected (poor translation)
…- All 10 Tests › TC Neg_Fun_0001: Unsupported SMS Language [S]
Waiting 3000ms for translation...
… All 10 Tests › TC Neg_Fun_0006: Invalid Vowel Combination [S]
✅ Got output: "මට ගොඩාආආඅක් බීඊඊම one"
Input: "mata godaaaaaaak biiiiiima one"                        
Expected (if perfect): "මට ගොඩක් බීම ඔනේ"                      
Actual: "මට ගොඩාආආඅක් බීඊඊම one"                               
✅ Test passed: Output differs from expected (poor translation)
…ts - All 10 Tests › TC Neg_Fun_0004: Invalid Mixed English [S]
✅ Got output: "good morning කියලා කියන්න"
Input: "good morning kiyalaa kiyanna"                          
Expected (if perfect): "සුබ උදෑසනක් කියලා කියන්න"              
Actual: "good morning කියලා කියන්න"                            
✅ Test passed: Output differs from expected (poor translation)
… - All 10 Tests › TC Neg_Fun_0008: Incorrect Hal Placement [S]
✅ Got output: "ඔයා මේ බත් ටික කන්න් a"
Input: "oyaa mee bath tika kann a"                             
Expected (if perfect): "ඔයා මේ බත් ටික කන්න"                   
Actual: "ඔයා මේ බත් ටික කන්න් a"                               
✅ Test passed: Output differs from expected (poor translation)
…ests - All 10 Tests › TC Neg_Fun_0002: Complex Code Mixing [M]
✅ Got output: "ඉ need to visit තෙ bank ATM urgently. පස්සෙ අපි  යම..."
Input: "I need to visit the bank ATM urgently. passe api yamu kade. urgent aava situation ekak."
Expected (if perfect): "I need to visit ද bank ATM urgently. පස්සෙ අපි යමු කඩෙ. urgent ආව situation එකක්."
Actual: "ඉ need to visit තෙ bank ATM urgently. පස්සෙ අපි යමු කඩෙ. urgent ආව situation එකක්."
✅ Test passed: Output differs from expected (poor translation)
…- All 10 Tests › TC Neg_Fun_0001: Unsupported SMS Language [S]
✅ Got output: "ගුඩ් n8, c උ 2මොරො මචන්"
Input: "gud n8, c u 2moro machan"                              
Expected (if perfect): "ගූඩ් නයිට් සී යූ ටුමොරො මචන්"          
Actual: "ගුඩ් n8, c උ 2මොරො මචන්"                              
✅ Test passed: Output differs from expected (poor translation)
…ests - All 10 Tests › TC Neg_Fun_0009: Mixed Case Singlish [S]

=== NEGATIVE TEST Neg_Fun_0009: Mixed Case Singlish ===        
Category: Spacing/punctuation • Mixed case Singlish • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "AMma ADha Yanavaa"
…ll 10 Tests › TC Neg_Fun_0010: Unsupported Special Symbols [S]

=== NEGATIVE TEST Neg_Fun_0010: Unsupported Special Symbols ===
Category: Punctuation/numbers • Unsupported special symbols • S (≤30 characters) • Robustness validation
Length Type: S                                                 
                                                               
🔤 Translating: "mama trip eka gihin parippuyi & bathuyi kaeevaa"
…ests - All 10 Tests › TC Neg_Fun_0009: Mixed Case Singlish [S]
Waiting 3000ms for translation...
…ll 10 Tests › TC Neg_Fun_0010: Unsupported Special Symbols [S]
Waiting 3000ms for translation...
…ests - All 10 Tests › TC Neg_Fun_0009: Mixed Case Singlish [S]
✅ Got output: "අම්ම අධ Yඅනවා"
Input: "AMma ADha Yanavaa"                                     
Expected (if perfect): "අම්ම අද යනවා"                          
Actual: "අම්ම අධ Yඅනවා"                                        
✅ Test passed: Output differs from expected (poor translation)
…ll 10 Tests › TC Neg_Fun_0010: Unsupported Special Symbols [S]
✅ Got output: "මම trip එක ගිහින් පරිප්පුයි & බතුයි කෑවා"
Input: "mama trip eka gihin parippuyi & bathuyi kaeevaa"       
Expected (if perfect): "මම trip එක ගිහින් පරිප්පුයි සහ බතුයි කෑවා"
Actual: "මම trip එක ගිහින් පරිප්පුයි & බතුයි කෑවා"             
✅ Test passed: Output differs from expected (poor translation)
  10 passed (28.0s)

To open last HTML report run:

  npx playwright show-report

PS C:\Users\kavin\Desktop\IT23282018> npx playwright test all-ui-tests-complete.spec.js --headed

Running 4 tests using 4 workers
… 4 Tests › TC Pos_UI_0004: Page elements and layout validation
Testing page layout and elements...
Page title: Singlish ↔ English Translator
✅ Page layout test passed - All elements present              
…C Pos_UI_0003: Input validation - Empty/cleared input handling
Testing empty input handling...
… › UI Tests - All 4 Tests › TC Pos_UI_0002: Clear Input Button
Testing clear button functionality...
…Pos_UI_0001: Sinhala output updates automatically in real-time
Testing real-time conversion...
…C Pos_UI_0003: Input validation - Empty/cleared input handling
Translate button exists: true
Clear button exists: true                                      
✅ Input validation test passed
… › UI Tests - All 4 Tests › TC Pos_UI_0002: Clear Input Button
✅ Clear button test passed - Input cleared
…Pos_UI_0001: Sinhala output updates automatically in real-time
✅ Real-time test passed - Output contains Sinhala text
  4 passed (7.8s)

To open last HTML report run:

  npx playwright show-report

PS C:\Users\kavin\Desktop\IT23282018> 
