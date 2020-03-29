import React from 'react';
import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <title>Plazmedia ProductHunt</title>
      <link rel="icon" href="/favicon-color.png" />
      <meta name="theme-color" content="#191919" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,900|Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i,900,900i|Zilla+Slab:400,400i,600,600i,700,700i&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://plazmedia.puntowebs.com/PLAZfont-CDN/font-style.css" />
      <link rel="stylesheet" href="https://plazmedia.puntowebs.com/PLAZreset-CSS-CDN/plazreset.css" />
      <script src="https://plazmedia.puntowebs.com/PLAZreset-CSS-CDN/plaz.main.js" />
    </Head>
  );
};

export default Meta;