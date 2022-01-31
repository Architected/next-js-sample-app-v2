import Head from 'next/head';
import SidePanel from '../shared/sidePanel';

const AuthContainer = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className="relative">
        <div className="container flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28 px-4">
          {children}
          <SidePanel />
        </div>
      </section>
    </>
  );
};

export default AuthContainer;
