import { useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../state/storeProvider';
import { hasValidToken } from '../helper/storageHelper';
import HomeScreen from '../components/homeScreen';
import AuthContainer from '../components/layout/authContainer';
import { urlConstants } from '../helper/urlConstants';

const Index = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { authState, bearerToken } = state['auth'];
  const validToken = useRef(false);

  useEffect(() => {
    let isMounted = true;
    const tokenValid = hasValidToken(authState, bearerToken, dispatch);

    if (tokenValid) {
      router.push(urlConstants.get('PAGE_FILE_LIST'));
    }

    validToken.current = tokenValid;
    return () => {
      isMounted = false;
    };
  });

  return (
    <>
      {!validToken.current && (
        <AuthContainer pageTitle="Home">
          <HomeScreen />
        </AuthContainer>
      )}
    </>
  );
};

export default Index;
