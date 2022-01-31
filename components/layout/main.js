import TopNavigation from './topNavigation';
import FooterNavigation from './footer';
import LeftNavigation from './leftNavigation';
import Head from 'next/head';
import { useContext } from 'react';
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
      {((authState && authState.signinScope === 'COMPLETE') || marketPlace) && (
        <>
          <TopNavigation />
          <div className="flex">
            {/* <aside className="h-screen sticky top-0">
              <LeftNavigation />
            </aside> */}
            <main className="w-screen">{props.children}</main>
          </div>
        </>
      )}
      {(!authState || authState.signinScope !== 'COMPLETE') && (
        <>
          <div>
            <div className="flex flex-col h-screen">
              <TopNavigation />
              <main className="flex-grow">
                <div className="max-w-6xl mx-auto px-4">{props.children}</div>
              </main>
              <FooterNavigation />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Layout;
