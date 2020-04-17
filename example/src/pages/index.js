import React from 'react';
import { grommet as theme, base } from 'grommet/themes';
import { Heading, Grommet, Anchor, Paragraph } from 'grommet';
import GithubCorner from 'react-github-corner';
import { Flex, Box } from 'reflexbox';
// import ReactJson from 'react-json-view';
import jsonResume from '../../resume.json';
import Html from '../assets/html.svg';
import Pdf from '../assets/pdf.svg';

const Footer = () => (
  <Box as="footer" style={{ position: 'absolute', bottom: 0, right: 0 }} mx="3">
    <Paragraph>
      Powered by <a href="https://www.netlify.com/">Netlify</a>. Made with ❤️ by{' '}
      <a href="https://github.com/EmaSuriano/">EmaSuriano</a>.
    </Paragraph>
  </Box>
);

export default () => (
  <Grommet theme={theme} full>
    <Box p="4" flex={1}>
      <Heading level="1">Gatsby-theme-JSONResume</Heading>
      <Heading level="2">
        <Anchor href="https://www.gatsbyjs.org">Gatsby Theme</Anchor> with{' '}
        <Anchor href="https://jsonresume.org/">JSONResume</Anchor> to generate
        your Resume and add it into your Application{' '}
        <span role="img" aria-label="spark">
          ✨
        </span>
      </Heading>
      <Flex flexDirection={['column', 'row']}>
        <Box width="500px">
          <Heading level="3">
            How does it work?{' '}
            <span role="img" aria-label="thinking">
              🤔
            </span>
          </Heading>
          <Paragraph>
            Provide a valid JSON structure and it will generate your resume in{' '}
            <code>HTML</code> and <code>PDF</code> format.
          </Paragraph>
          {/* <ReactJson src={jsonResume} collapsed={1} /> */}
        </Box>

        <Box>
          <Heading level="3">Default Theme</Heading>
          <Flex direction="row">
            <Anchor href="/resume.html" target="_blank">
              <Html width="100px" />
            </Anchor>
            <Anchor href="/resume.pdf" target="_blank">
              <Pdf width="100px" />
            </Anchor>
          </Flex>
          <Heading level="3">Custom Theme</Heading>
          <Flex direction="row">
            <Anchor href="/resume-custom-theme.html" target="_blank">
              <Html width="100px" />
            </Anchor>
            <Anchor href="/resume-custom-theme.pdf" target="_blank">
              <Pdf width="100px" />
            </Anchor>
          </Flex>
        </Box>
      </Flex>
      <Footer />
      <GithubCorner
        href="https://github.com/EmaSuriano/gatsby-theme-jsonresume"
        bannerColor={base.global.colors.brand}
      />
    </Box>
  </Grommet>
);
