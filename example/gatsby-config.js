const resumeJson = require('./resume.json');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-jsonresume',
      options: {
        resumeJson,
      },
    },
    {
      resolve: 'gatsby-theme-jsonresume',
      options: {
        resumeJson,
        name: 'resume-custom-theme',
        theme: 'standard-resume',
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
