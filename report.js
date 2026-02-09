const reporter = require('k6-html-reporter');

reporter.generateSummaryReport({
  jsonFile: 'summary.json',
  output: 'summary.html',
  title: 'k6 Performance Test Report',
});
