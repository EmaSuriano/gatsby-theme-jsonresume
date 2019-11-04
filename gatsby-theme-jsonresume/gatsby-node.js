const { exportResume } = require('resume-cli/lib');
const { existsSync, mkdirSync, renameSync } = require('fs');

const exportPromise = ({ format, theme, name, resumeJson }) =>
  new Promise((resolve, reject) => {
    exportResume(
      resumeJson,
      name,
      {
        format,
        theme,
        dir: __dirname,
      },
      error => (error ? reject(error) : resolve()),
    );
  });

const moveToStatic = file => {
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
module.exports.createPages = (
  _,
  { resumeJson, theme = 'flat', name = 'resume' },
) => {
  Promise.all(
    ['html', 'pdf'].map(async format => {
      await exportPromise({ format, resumeJson, theme, name });
      moveToStatic(`${name}.${format}`);
    }),
  );
};
