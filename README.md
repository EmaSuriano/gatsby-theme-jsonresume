# gatsby-theme-jsonresume

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5f3d0f3-3897-44ca-8956-01ca42e9df70/deploy-status)](https://app.netlify.com/sites/sad-neumann-882ab2/deploys)

<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h2 align="center">
  A wrapper of <a href="https://jsonresume.org/">JSONResume</a> as a <a href="https://www.gatsbyjs.org">Gatsby Theme</a>
</h2>

### [Live Example](sad-neumann-882ab2.netlify.com)

## Installation

This package is a Gatsby Theme, therefore you need a project using Gatsby v2 installed to use it.

```bash
yarn add gatsby-theme-jsonresume
```

## Usage

To generate your resume your need to provide a valid `JSON` object with the information of you. You can find more information about the schema in this [link](https://jsonresume.org/schema/).

I highly recommend using [LinkedIn to Json Resume](https://jmperezperez.com/linkedin-to-json-resume/) that can generate a valid `JSON` schema from your LinkedIn information.

Once you have your data with the correct structure, you need to add the plugin to your Gatsby site.

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: require('./resume.json'),
      },
    },
  ],
};
```

The way this theme adds a new route in your application is by generating a plain `html` file, as well as the `pdf` file, and placing them inside the `static` folder.

The way Gatsby works with static files is they are going to be copied on the `build` step, they **won't be accessible during development**.

The last step is then to build and serve your serve. At this point, you should be able to access the new route.

```bash
> gatsby build
> gatsby serve
info gatsby serve running at: http://localhost:9000/
```

### Theme Options

| Name         | Description                     | Required | Default Value |
| ------------ | ------------------------------- | -------- | ------------- |
| `resumeJson` | Data for resume                 | `true`   |               |
| `theme`      | Theme to be used in JSONResume  | `false`  | "flat"        |
| `name`       | Name/Route for the resulting CV | `false`  | "resume"      |

#### Using a different theme

In case you want to change how your CV looks, JSONResume has a huge community of people who built a large collection of themes. All of them are Open Source and you can find them inside [`npm`](https://www.npmjs.com/search?q=jsonresume-theme-*).

To use a different theme you need to first install inside your project, and then send only the name of the theme (not the whole name of the library).

**Example:**

```bash
yarn add jsonresume-theme-orbit
```

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: require('./resume.json'),
        theme: 'orbit',
      },
    },
  ],
};
```

#### Changing route and name of the resume

By default, the plugin will generate a route called `resume`. In case you want to change it, to for example `cv`, you need to send it as

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: require('./resume.json'),
        name: 'cv',
      },
    },
  ],
};
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
