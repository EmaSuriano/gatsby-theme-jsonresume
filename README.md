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

## Roadmap

- [ ] Test it in another starter
- [ ] Fix issue with the nodeEngine

## Installation

```bash
yarn add gatsby-theme-jsonresume
```

## Usage

In order to generate your resume your need to provide valid `JSON` object with the information of you. You can find more information about the schema in this [link](https://jsonresume.org/schema/).

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

The last step is then to build and serve your serve. At this point you should be able to access the new route.

```bash
> gatsby build
> gatsby serve
info gatsby serve running at: http://localhost:9000/
```

### Theme Options

| Name         | Description                     | Required | Default Value |
| ------------ | ------------------------------- | -------- | ------------- |
| `resumeJson` | Data for resume                 | `true`   |               |
| `theme`      | Theme to be used in JSONResume  | `false`  | `flat`        |
| `name`       | Name/Route for the resulting CV | `false`  | `resume       |

#### Using a different theme

In case you want to change how your CV looks, JSONResume has a huge community of people who built a large collection of themes. All of them are Open Source and you can find them inside [`npm`](https://www.npmjs.com/search?q=jsonresume-theme-*).

In order to use a different theme you need to first install inside your project, and then send only the name of the theme (not the whole name of the library).

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

```shell
gatsby new my-theme https://github.com/gatsbyjs/gatsby-starter-theme-workspace
cd my-theme
yarn workspace example develop
```

## Layout

```shell
.
├── README.md
├── gatsby-theme-minimal
│   ├── README.md
│   ├── gatsby-config.js
│   ├── index.js
│   └── package.json
├── example
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   └── src
├── package.json
└── yarn.lock

3 directories, 10 files
```

### `gatsby-theme-minimal`

This directory is the theme package itself. You should rename this at
some point to be `gatsby-theme-{my-theme-name}`. Also change the
`package.json` name field and the corresponding dependency in the
example directory's `package.json`/`gatsby-config.js` to match the chosen name.

- `gatsby-theme-minimal/`
  - `gatsby-config.js`: An empty gatsby-config that you can use as a starting point for building functionality into your theme.
  - `index.js`: Since themes also function as plugins, this is an empty file that
    gatsby needs to use this theme as a plugin.
  - `package.json`: The dependencies that your theme will pull in when people install it. `gatsby` should be a `peerDependency`.

### `example`

This is an example usage of your theme. It should look the same as the
site of someone who installed and used your theme from npm.

- `example/`
  - `gatsby-config.js`: Specifies which theme to use and any other one-off config a site might need.
  - `src/`: Source code such as one-off pages or components that might live in
    a user's site.

You can run the example with:

```shell
yarn workspace example develop
```
