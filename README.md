# gatsby-theme-jsonresume

[![Master](https://github.com/EmaSuriano/gatsby-theme-jsonresume/actions/workflows/master.yml/badge.svg)](https://github.com/EmaSuriano/gatsby-theme-jsonresume/actions/workflows/master.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/131caa59-db03-4369-a485-1980d99a7af6/deploy-status)](https://app.netlify.com/sites/gatsby-theme-jsonresume/deploys)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](https://badge.fury.io/js/gatsby-theme-jsonresume.svg)](https://badge.fury.io/js/gatsby-theme-jsonresume)

> A [Gatsby Theme](https://www.gatsbyjs.org) with [JSONResume](https://jsonresume.org/) to host your Resume in HTML and PDF

### [Demo ✨](https://gatsby-theme-jsonresume.netlify.com/)

## Installation 📦

This package is a Gatsby Theme, therefore you need a project using Gatsby v2 installed to use it. You can check the [official documentation](https://www.gatsbyjs.org/docs/quick-start/) to bootstrap a Gatsby project.

```bash
> yarn add gatsby-theme-jsonresume
```

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: { // ...JSON Resume Schema }
      },
    },
  ],
};
```

## Usage 🔋

To generate your resume your need to provide a valid `JSON` object with your information. You can find more information about the schema in this [link](https://jsonresume.org/schema/).

I highly recommend using [LinkedIn to JSON Resume](https://jmperezperez.com/linkedin-to-json-resume/) that can generate a valid `JSON` schema from your LinkedIn information.

The way this theme adds a new route in your application is by generating a plain `html` file, as well as the `pdf` file, and placing them inside the `static` folder.

The way Gatsby works with static files is they are going to be copied on the `build` step, they **won't be accessible during development**. But it will be obviously accessible after you deploy your site.

The last step is then to build and serve your serve. At this point, you should be able to access the new route.

```bash
> gatsby build
> gatsby serve
info gatsby serve running at: http://localhost:9000/
```

### Configuration 🛠

| Name         | Description                     | Required | Default Value             |
| ------------ | ------------------------------- | -------- | ------------------------- |
| `resumeJson` | Data for resume                 | `true`   |                           |
| `theme`      | Theme to be used in JSONResume  | `false`  | `"jsonresume-theme-flat"` |
| `name`       | Name/Route for the resulting CV | `false`  | `"resume"`                |

#### Using a different Theme 🌈

In case you want to change how your CV looks, JSONResume does a very good jobs regarding theming. Check the official documentation for more information: [JSONResume themes](https://jsonresume.org/themes/).

To use a different theme you need to first install it inside your project, and then send only the name of the theme (not the whole name of the library) as an option of the theme inside your `gatsby-config`.

**Example:**

```bash
> yarn add jsonresume-theme-orbit
```

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: { // ...JSON Resume Schema },
        theme: 'jsonresume-theme-orbit',
      },
    },
  ],
};
```

#### Changing Route 🛣

By default, the plugin will host your resume under a route called `resume`. In case you want to change it, you can specify it inside the `name` property. This change will apply for the `html` and `pdf` format.

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-jsonresume`,
      options: {
        resumeJson: { // ...JSON Resume Schema },
        name: 'cv',
      },
    },
  ],
};
```

## Development 👷‍♂️

This repository is using [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). The structure is the following:

- `/gatsby-starter-jsonresume`: Demo project which shows how to use the theme.
- `/gatsby-theme-jsonresume`: the theme itself.

In order to start, you need to install the dependencies in the root which will install the dependencies for both folders and link the projects.

```bash
> yarn
```

Available scripts:

- `start`: Build the demo project and host it in localhost.
- `test`: Build the demo project and run tests.

## Contributing 🙌

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License 🗒

[MIT](https://choosealicense.com/licenses/mit/)
