import Head from 'next/head';

const ContentContainer = ({ pageData, pageKey }) => {
  let pageTitle = '';
  let content = '';

  if (pageData.inError) {
    pageTitle = pageKey;
    content = 'Error loading page content please check your site configuration';
  } else {
    pageTitle = pageData.page.pageTitle;
    content = pageData.page.content;
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <h2 className="font-bold text-3xl mt-10 px-2 my-2">{pageTitle}</h2>
      <div className="px-2" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default ContentContainer;
