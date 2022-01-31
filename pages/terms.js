import ContentContainer from '../components/layout/contentContainer';
import { contentClient } from '../services/defaultServices';

const pageKey = 'TERMS';

function Terms(props) {
  const { pageData } = props;

  return (
    <>
      <ContentContainer pageData={pageData} pageKey={pageKey} />
    </>
  );
}

export default Terms;

export async function getServerSideProps() {
  const responseData = await contentClient.getPageByKey(pageKey);
  const { data } = responseData;
  return {
    props: {
      pageData: data,
    },
  };
}
