import React, { Fragment } from 'react';
import Link from 'next/link'
import { Global, css } from '@emotion/core';
// Components
import Meta from './Meta';
import Header from './Header';

const Layout = props => {
  return (
    <Fragment>

      <Global 
        styles={css`
          html{
            font-family: var(--font-0)!important;
            color: var(--primary);
          }
        `}
      />

      <Meta />{/* Component contain of Metadata */}

      <Header />{/* Header component */}

      <main>

        { props.children }

      </main>

    </Fragment>
  );
};

export default Layout;