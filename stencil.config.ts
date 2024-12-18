import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
export const config: Config = {
  sourceMap: false,
  namespace: 'multiselect',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }
  ],
  plugins: [sass()]
};
