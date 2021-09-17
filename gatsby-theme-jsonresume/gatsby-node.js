const exportResume = require('resume-cli/build/export-resume');
const { existsSync, mkdirSync, renameSync } = require('fs');

const exportPromise = ({ format, theme, fileName, resume }) =>
    new Promise((resolve, reject) => {
        exportResume({
            format,
            theme,
            fileName,
            resume,
        }, (error) => (error ? reject(error) : resolve()))
    });

const moveToStatic = (file) => {
  if (!existsSync('static/')) mkdirSync('static');
  renameSync(file, `static/${file}`);
};

/**
 * @param {Object} _
 * @param {Object} themeOptions - Theme configuration
 * @param {Object} themeOptions.resumeJson - Data of your resume
 * @param {string} themeOptions.theme - Theme to be used in JSONResume
 * @param {string} themeOptions.name - Name/Route for the resulting CV
 */
module.exports.createPages = async (
  _,
  { resumeJson, theme = 'jsonresume-theme-flat', name = 'resume' },
) => {
  await Promise.all(
    ['html', 'pdf'].map(async (format) => {
      await exportPromise({ format, resume: resumeJson, theme, fileName: name });
      moveToStatic(`${name}.${format}`);
    }),
  );
};
