const fs = require('fs');
const path = require('path');

const RESUME_FOLDER = path.join(__dirname, 'static');

describe('Generator', () => {
  it('should generate html resume', () => {
    expect(fs.existsSync(path.join(RESUME_FOLDER, 'resume.html'))).toBe(true);
  });

  it('should generate pdf resume', () => {
    expect(fs.existsSync(path.join(RESUME_FOLDER, 'resume.pdf'))).toBe(true);
  });

  it('should generate html custom theme resume', () => {
    expect(
      fs.existsSync(path.join(RESUME_FOLDER, 'resume-custom-theme.html')),
    ).toBe(true);
  });

  it('should generate pdf custom theme resume', () => {
    expect(
      fs.existsSync(path.join(RESUME_FOLDER, 'resume-custom-theme.pdf')),
    ).toBe(true);
  });
});
