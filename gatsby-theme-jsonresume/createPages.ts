import { GatsbyCreatePages, JsonResumeSchema, ResumeFormat } from './types';
import { existsSync, mkdirSync, renameSync } from 'fs';
import { exportResume } from 'resume-cli/lib';

const FORMAT: ResumeFormat[] = ['html', 'pdf'];
const RESUME_FILE_NAME = 'resume';

const exportPromise = (opt: JsonResumeSchema, format: ResumeFormat) =>
  new Promise((resolve, reject) => {
    exportResume(
      opt.resume,
      'resume',
      {
        format,
        theme: opt.theme,
        dir: __dirname,
      },
      error => (error ? reject(error) : resolve()),
    );
  });

const moveFileToStatic = (filename: string) => {
  if (!existsSync('static/')) mkdirSync('static');
  renameSync(filename, `static/${filename}`);
};

const createPages: GatsbyCreatePages<JsonResumeSchema> = (
  gatsbyConfig,
  themeOptions,
) => {
  Promise.all(
    FORMAT.map(async format => {
      await exportPromise(themeOptions, format);
      moveFileToStatic(`${RESUME_FILE_NAME}.${format}`);
    }),
  );
};

module.exports = createPages;
