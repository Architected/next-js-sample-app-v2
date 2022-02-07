import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../../../../state/storeProvider';

import { getClientDetails } from '../../../../helper/clientHelper';
import { nextStep } from '../../../../helper/scopeHelper';
import { urlConstants } from '../../../../helper/urlConstants';
import { saveToStore } from '../../../../helper/storageHelper';

import * as authActionType from 'architected-client/app-state/constants/iam.js';
import { walletService } from '../../../../services/walletServices';
import MetamaskSignIn from '../../../../components/auth/signin/metaMaskSignIn';
import AuthContainer from '../../../../components/layout/authContainer';

function SignInWallet() {
  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  const { authState, callInProgress, errorMessage, warningMessage } =
    state['auth'];
  const [hideForm, setHideForm] = useState(false);
  useEffect(() => {
    dispatch({ type: authActionType.INIT_DEFAULT_LAYOUT });

    if (authState && authState.signinScope === 'COMPLETE') {
      router.push(urlConstants.get('PAGE_MARKETPLACE'));
    }
  }, []);

  const signInHandler = async () => {
    console.log('in signInHandler');
    const clientDetails = await getClientDetails();
    var responseData = await walletService.walletSignIn(
      clientDetails,
      dispatch
    );
    if (responseData && !responseData.inError) {
      saveToStore('_tokenWrapper', responseData.tokenWrapper);
      var nextUrl = await nextStep(responseData.tokenWrapper);
      setHideForm(true);
      router.push(nextUrl);
    }
  };

  return (
    <>
      {!hideForm && (
        <AuthContainer>
          <MetamaskSignIn
            signInHandler={signInHandler}
            isLoading={callInProgress}
            errorMessage={errorMessage}
            warningMessage={warningMessage}
          />
        </AuthContainer>
      )}
    </>
  );
}

export default SignInWallet;
