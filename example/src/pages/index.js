import React from 'react';
import { grommet as theme, base } from 'grommet/themes';
import { Box, Heading, Grommet, Anchor, Paragraph } from 'grommet';
import GithubCorner from 'react-github-corner';

export default () => (
  <Grommet theme={theme} full>
    <Box pad="large" flex={1}>
      <Heading level="1">Gatsby-theme-JSONResume</Heading>

      <Heading level="2">Base Theme</Heading>
      <ul>
        <li>
          <Anchor href="/resume.html" label="Online" size="large" />
        </li>
        <li>
          <Anchor href="/resume.pdf" label="PDF" size="large" />
        </li>
      </ul>

      <Heading level="2">Custom Theme</Heading>
      <ul>
        <li>
          <Anchor
            href="/resume-custom-theme.html"
            label="Online"
            size="large"
          />
        </li>
        <li>
          <Anchor href="/resume-custom-theme.pdf" label="PDF" size="large" />
        </li>
      </ul>
    </Box>
    <Box as="footer" style={{ position: 'absolute', bottom: 0 }} margin="large">
      <Paragraph margin="none">
        Made with ❤️ by <a href="https://github.com/EmaSuriano/">EmaSuriano</a>
      </Paragraph>
    </Box>

    <GithubCorner
      href="https://github.com/EmaSuriano/gatsby-theme-jsonresume"
      bannerColor={base.global.colors.brand}
    />
  </Grommet>
);
