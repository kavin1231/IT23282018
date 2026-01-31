
const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

async function generateExcelReport() {
  console.log('📊 Generating Excel Test Report...');
  
  // Create a new workbook
  const workbook = new ExcelJS.Workbook();
  
  // Create main test results sheet
  const testSheet = workbook.addWorksheet('Test Results');
  
  // Define headers exactly as in your requirements
  testSheet.columns = [
    { header: 'TC ID', width: 15 },
    { header: 'Test case name', width: 30 },
    { header: 'Input length type', width: 20 },
    { header: 'Input', width: 40 },
    { header: 'Expected output', width: 40 },
    { header: 'Actual output', width: 40 },
    { header: 'Status', width: 10 },
    { header: 'Accuracy justification/ Description of issue type', width: 80 },
    { header: 'What is covered by the test', width: 60 }
  ];
  
  // Style headers
  testSheet.getRow(1).eachCell((cell) => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF4F81BD' }  // Blue color
    };
    cell.font = {
      color: { argb: 'FFFFFFFF' },    // White text
      bold: true,
      size: 11
    };
    cell.alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: true
    };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  });
  
  // Read test results from your JSON file if it exists
  let testResults = [];
  try {
    if (fs.existsSync('test-results.json')) {
      const data = fs.readFileSync('test-results.json', 'utf8');
      testResults = JSON.parse(data);
      console.log(`📁 Loaded ${testResults.length} test results from JSON file`);
    } else {
      console.log('ℹ️ No test-results.json found, using sample data');
      // Sample data for demonstration
      testResults = [
        {
          "TC ID": "Pos_Fun_0001",
          "Test case name": "Simple positive statement",
          "Input length type": "S",
          "Input": "mata kiri bonna oonee",
          "Expected output": "මට කිරි බොන්න ඕනේ",
          "Actual output": "මට කිරි බොන්න ඕනේ",
          "Status": "Pass",
          "Accuracy justification/ Description of issue type": "The intended meaning 'I need to drink milk' is accurately conveyed. Correct Sinhala syntax maintained with subject-object-verb structure.",
          "What is covered by the test": "Daily language usage • Simple sentence • S (≤30 characters) • Accuracy validation"
        },
        {
          "TC ID": "Pos_Fun_0002",
          "Test case name": "Compound Sentence",
          "Input length type": "M",
          "Input": "mama kiri bonne naee, haebaeyi naqqgi bonavaa",
          "Expected output": "මම කිරි බොන්නෙ නෑ, හැබැයි නංගි බොනවා",
          "Actual output": "මම කිරි බොන්නෙ නෑ, හැබැයි නංගි බොනවා",
          "Status": "Pass",
          "Accuracy justification/ Description of issue type": "Contrast conjunction 'හැබැයි' correctly separates two clauses. 'නෑ' accurately represents informal negation.",
          "What is covered by the test": "Daily language usage • Compound sentence • M (31–299 characters) • Accuracy validation"
        },
        {
          "TC ID": "Neg_Fun_0001",
          "Test case name": "Unsupported SMS Language",
          "Input length type": "S",
          "Input": "gud n8, c u 2moro machan",
          "Expected output": "ගූඩ් නයිට් සී යූ ටුමොරො මචන්",
          "Actual output": "ගුඩ් n8, c උ 2මොරො මචන්",
          "Status": "Fail",
          "Accuracy justification/ Description of issue type": "SMS abbreviations transliterated character-by-character. Intended meaning completely lost. Produces nonsense Sinhala-English hybrid.",
          "What is covered by the test": "Slang/informal language • Simple sentence • S (≤30 characters) • Robustness validation"
        },
        {
          "TC ID": "Pos_UI_0001",
          "Test case name": "Sinhala output updates automatically in real-time",
          "Input length type": "S",
          "Input": "mama gedhara yanavaa",
          "Expected output": "මම ගෙදර යනවා",
          "Actual output": "මම ගෙදර යනවා",
          "Status": "Pass",
          "Accuracy justification/ Description of issue type": "Output updates immediately with each keystroke. Tests the core real-time conversion feature.",
          "What is covered by the test": "Usability flow (real-time conversion) • Simple sentence • S (≤30 characters) • Real-time output update behavior"
        }
      ];
    }
  } catch (error) {
    console.error('Error loading test results:', error.message);
  }
  
  // Add test data to sheet
  testResults.forEach((result, index) => {
    const row = testSheet.addRow([
      result["TC ID"],
      result["Test case name"],
      result["Input length type"],
      result["Input"],
      result["Expected output"],
      result["Actual output"],
      result["Status"],
      result["Accuracy justification/ Description of issue type"],
      result["What is covered by the test"]
    ]);
    
    // Apply alternating row colors
    if (index % 2 === 0) {
      row.eachCell((cell) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFF2F2F2' }
        };
      });
    }
    
    // Apply borders to all cells
    row.eachCell((cell) => {
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
      cell.alignment = {
        vertical: 'top',
        horizontal: 'left',
        wrapText: true
      };
    });
    
    // Color code status column
    const statusCell = row.getCell(7); // Column 7 is Status
    if (result.Status === 'Pass') {
      statusCell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFC6EFCE' }  // Light green
      };
      statusCell.font = {
        color: { argb: 'FF006100' },    // Dark green text
        bold: true
      };
    } else if (result.Status === 'Fail') {
      statusCell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFC7CE' }   // Light red
      };
      statusCell.font = {
        color: { argb: 'FF9C0006' },    // Dark red text
        bold: true
      };
    }
  });
  
  // Create summary sheet
  const summarySheet = workbook.addWorksheet('Summary');
  
  // Calculate statistics
  const totalTests = testResults.length;
  const passedTests = testResults.filter(t => t.Status === 'Pass').length;
  const failedTests = testResults.filter(t => t.Status === 'Fail').length;
  const passRate = totalTests > 0 ? ((passedTests / totalTests) * 100).toFixed(2) : 0;
  
  summarySheet.columns = [
    { header: 'Metric', width: 40 },
    { header: 'Value', width: 30 }
  ];
  
  // Add summary data
  const summaryData = [
    ['Project', 'Singlish to Sinhala Translator Test Automation'],
    ['Generated Date', new Date().toLocaleString()],
    ['Student ID', 'IT23282018'],
    ['', ''],
    ['TEST SUMMARY', ''],
    ['Total Test Cases', totalTests],
    ['Passed Tests', passedTests],
    ['Failed Tests', failedTests],
    ['Pass Rate', `${passRate}%`],
    ['', ''],
    ['TEST CATEGORIES', ''],
    ['Positive Tests', testResults.filter(t => t["TC ID"].startsWith('Pos_Fun')).length],
    ['Negative Tests', testResults.filter(t => t["TC ID"].startsWith('Neg_Fun')).length],
    ['UI Tests', testResults.filter(t => t["TC ID"].startsWith('Pos_UI')).length]
  ];
  
  summaryData.forEach(([metric, value], index) => {
    const row = summarySheet.addRow([metric, value]);
    
    // Style headers and important rows
    if (metric === 'TEST SUMMARY' || metric === 'TEST CATEGORIES' || metric === 'Project') {
      row.eachCell((cell) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF4F81BD' }
        };
        cell.font = {
          color: { argb: 'FFFFFFFF' },
          bold: true
        };
      });
    }
  });
  
  // Create charts sheet
  const chartsSheet = workbook.addWorksheet('Charts');
  chartsSheet.addRow(['Test Category', 'Count']);
  chartsSheet.addRow(['Passed', passedTests]);
  chartsSheet.addRow(['Failed', failedTests]);
  
  // Save the workbook
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const fileName = `Test_Report_IT23282018_${timestamp}.xlsx`;
  
  await workbook.xlsx.writeFile(fileName);
  
  console.log(`✅ Excel report generated: ${fileName}`);
  console.log(`📁 File saved to: ${path.resolve(fileName)}`);
  console.log('\n📊 REPORT SUMMARY:');
  console.log(`   Total Tests: ${totalTests}`);
  console.log(`   Passed: ${passedTests}`);
  console.log(`   Failed: ${failedTests}`);
  console.log(`   Pass Rate: ${passRate}%`);
  
  return fileName;
}

// Run the report generator
generateExcelReport().catch(console.error);
EOF