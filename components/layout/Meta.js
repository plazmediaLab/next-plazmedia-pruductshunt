import React from 'react';
import Head from 'next/head';
import { ModularCSSfonstRequired } from 'modular-css';

const Meta = () => {

  return (
    <Head>
      <title>Plazmedia ProductHunt</title>
      <link rel="icon" href="/favicon-color.png" />
      <meta name="theme-color" content="#191919" />
      <link href={ModularCSSfonstRequired} rel="stylesheet" /> 
    </Head>
  );
};

export default Meta;