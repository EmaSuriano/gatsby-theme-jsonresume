module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: require('./resume.json'),
      },
    },
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: require('./resume.json'),
        name: 'resume-custom-theme',
        theme: 'mantra',
      },
    },
  ],
};
