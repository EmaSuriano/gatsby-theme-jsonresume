module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resume: require('./resume.json'),
        theme: 'paper',
      },
    },
  ],
};
