import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'globuscomponents',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'global', dest: 'global' //copies the stylesheets from the source folder to the destination folder in the dist folder on build
        },
        { src: 'assets', dest: 'assets' }
      ]
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'assets', dest: 'build/assets' }
      ]
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
