# gatsby-theme-jsonresume

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5f3d0f3-3897-44ca-8956-01ca42e9df70/deploy-status)](https://app.netlify.com/sites/sad-neumann-882ab2/deploys)

<p align="center">
  <a href="https://github.com/jsonresume">
    <img alt="JSON Resume" src="https://avatars3.githubusercontent.com/u/7943272?s=200&v=4" width="60" />
  </a>
  <img src="https://image.flaticon.com/icons/svg/148/148836.svg" alt="Heart" width="30" />
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

> A [Gatsby Theme](https://www.gatsbyjs.org) with [JSONResume](https://jsonresume.org/) to generate your Resume and add a new Route into your Application ✨

### [Live Example](https://sad-neumann-882ab2.netlify.com/)

## Installation

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

## Usage

To generate your resume your need to provide a valid `JSON` object with your information. You can find more information about the schema in this [link](https://jsonresume.org/schema/).

I highly recommend using [LinkedIn to JSON Resume](https://jmperezperez.com/linkedin-to-json-resume/) that can generate a valid `JSON` schema from your LinkedIn information.

The way this theme adds a new route in your application is by generating a plain `html` file, as well as the `pdf` file, and placing them inside the `static` folder.

The way Gatsby works with static files is they are going to be copied on the `build` step, they **won't be accessible during development**.

The last step is then to build and serve your serve. At this point, you should be able to access the new route.

```bash
> gatsby build
> gatsby serve
info gatsby serve running at: http://localhost:9000/
```

### Usage

| Name         | Description                     | Required | Default Value |
| ------------ | ------------------------------- | -------- | ------------- |
| `resumeJson` | Data for resume                 | `true`   |               |
| `theme`      | Theme to be used in JSONResume  | `false`  | "flat"        |
| `name`       | Name/Route for the resulting CV | `false`  | "resume"      |

#### Using a different theme

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
        resumeJson: { // ...JSON Resume Schema },
        name: 'cv',
      },
    },
  ],
};
```

## Development

This repository is using [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). The structure is the following:

- `/example`: Demo project which shows how to use the theme.
- `/gatsby-theme-jsonresume`: the theme itself.

In order to start, you need to install the dependencies in the root which will install the dependencies for both folders and link the projects.

```bash
> yarn --ignore-engines # resume-cli is hard coding the node engine, this is only needed when developing locally
```

Available scripts:

- `start`: Build the demo project and host it in localhost.
- `test`: Build the demo project and run tests.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
