const fs = require('fs');

describe('Visual testing', () => {
  it('should generate HTML file', () => {
    expect(fs.existsSync('public/resume.html')).toBe(true);
  });

  it('should generate PDF file', () => {
    expect(fs.existsSync('public/resume.pdf')).toBe(true);
  });
});
