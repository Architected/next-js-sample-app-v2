import TopNavigation from './topNavigation';
import FooterNavigation from './footer';
import LeftNavigation from './leftNavigation';
import Head from 'next/head';
import React, { useContext } from 'react';
import { Store } from '../../state/storeProvider';

function Layout(props) {
  const { state } = useContext(Store);
  const { marketPlace, authState } = state['auth'];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {(authState && authState.signinScope === 'COMPLETE') || marketPlace ? (
        <div className="dashboard-wrap">
          <TopNavigation />
          <LeftNavigation />
          <main className="main">{props.children}</main>
        </div>
      ) : (
        <div>
          <TopNavigation />
          <main className="main">{props.children}</main>
          <FooterNavigation />
        </div>
      )}
    </>
  );
}

export default Layout;
