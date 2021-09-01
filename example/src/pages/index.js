import React from 'react';
import { grommet as theme, base } from 'grommet/themes';
import { Heading, Grommet, Anchor, Paragraph } from 'grommet';
import GithubCorner from 'react-github-corner';
import { Flex, Box } from 'reflexbox';
import SyntaxHighlighter from 'react-syntax-highlighter';
import jsonResume from '../../resume.json';
import Html from '../assets/html.svg';
import Pdf from '../assets/pdf.svg';

export default () => (
  <Grommet theme={theme}>
    <Heading level="1">Gatsby-theme-JSONResume</Heading>

    <Heading level="2">
      <Anchor href="https://www.gatsbyjs.org">Gatsby Theme</Anchor> with{' '}
      <Anchor href="https://jsonresume.org/">JSONResume</Anchor> to generate
      your Resume and add it into your Application{' '}
      <span role="img" aria-label="spark">
        ✨
      </span>
    </Heading>

    <GithubCorner
      href="https://github.com/EmaSuriano/gatsby-theme-jsonresume"
      bannerColor={base.global.colors.brand}
    />

    <Flex flexDirection={['column', 'column', 'row']}>
      <Box minWidth={['375px', '375px', '450px']} mr={2}>
        <Heading level="3">
          How does it work?{' '}
          <span role="img" aria-label="thinking">
            🤔
          </span>
        </Heading>
        <Paragraph>
          Provide a valid JSON structure with your data, and when starting
          Gatsby and it will generate your resume in <code>HTML</code> and{' '}
          <code>PDF</code> format.
        </Paragraph>
        <Flex direction="row">
          <Anchor href="/resume.html" target="_blank">
            <Html width="80px" />
          </Anchor>
          <Anchor href="/resume.pdf" target="_blank">
            <Pdf width="80px" />
          </Anchor>
        </Flex>
        <Heading level="3">
          Theming{' '}
          <span role="img" aria-label="rainbow">
            🌈
          </span>
        </Heading>
        <Paragraph>
          You can customize how your resume will look like by changing the theme
          property. You can use of the themes available for{' '}
          <Anchor href="">JSON Resume</Anchor>.
        </Paragraph>
        <Flex direction="row">
          <Anchor href="/resume-custom-theme.html" target="_blank">
            <Html width="80px" />
          </Anchor>
          <Anchor href="/resume-custom-theme.pdf" target="_blank">
            <Pdf width="80px" />
          </Anchor>
        </Flex>
        <Paragraph>
          For more information please check the{' '}
          <Anchor href="https://github.com/EmaSuriano/gatsby-theme-jsonresume#usage">
            Usage Documentation
          </Anchor>
          .
        </Paragraph>
      </Box>

      <Flex width="auto" height="700px" flexDirection="column">
        <Heading level="3">
          Resume Data{' '}
          <span role="img" aria-label="note">
            📝
          </span>
        </Heading>
        <SyntaxHighlighter language="json" showLineNumbers>
          {JSON.stringify(jsonResume, null, 2)}
        </SyntaxHighlighter>
      </Flex>
    </Flex>

    <Flex as="footer" justifyContent="space-between">
      <Paragraph>
        Powered by <Anchor href="https://www.netlify.com/">Netlify</Anchor>
      </Paragraph>

      <Paragraph>
        Made by{' '}
        <Anchor href="https://github.com/EmaSuriano/">EmaSuriano</Anchor>
      </Paragraph>
    </Flex>
  </Grommet>
);
