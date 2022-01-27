import Layout from '../components/layout/main';
import { StoreProvider } from '../state/storeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;

// /homeScreen

// /shared/sidePanel

// /layout/authContainer
// state
// side panel
// page title

// /layout/contentContainer

// /layout/footer

// /layout/leftNav

// /latout/topNav
