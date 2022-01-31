import { contentClient } from '../services/defaultServices';
import ContentContainer from '../components/layout/contentContainer';

const pageKey = 'PRIVACY';

function Privacy(props) {
  const { pageData } = props;

  return (
    <>
      <ContentContainer pageData={pageData} pageKey={pageKey} />
    </>
  );
}

export default Privacy;

export async function getServerSideProps() {
  const responseData = await contentClient.getPageByKey(pageKey);
  const { data } = responseData;
  return {
    props: {
      pageData: data,
    },
  };
}
