const resumeJson = require('./resume.json');

module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-theme-jsonresume',
      options: {
        resumeJson,
        // fix for workspaces
        theme: '../node_modules/jsonresume-theme-standard-resume',
      },
    },
    {
      resolve: 'gatsby-theme-jsonresume',
      options: {
        resumeJson,
        name: 'resume-custom-theme',
        // fix for workspaces
        theme: '../node_modules/jsonresume-theme-standard-resume',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
};
