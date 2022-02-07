import { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../state/storeProvider';
import { hasCompleteToken } from '../helper/storageHelper';
import PasswordChangeMain from '../components/admin/passwordChangeMain';
import { profileClient } from '../services/defaultServices';

function ChangePassword() {
  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  const {
    authState,
    bearerToken,
    callInProgress,
    errorMessage,
    warningMessage,
    successMessage,
  } = state['auth'];

  const initialRender = useRef(true);

  useEffect(() => {
    let isMounted = true;

    if (initialRender.current) {
      const validToken = hasCompleteToken(authState, bearerToken);

      if (!validToken) {
        router.push('/');
      } else {
        if (isMounted && bearerToken) {
          initialRender.current = false;
        }
      }
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const submitHandler = async ({ currentPassword, newPassword }) => {
    const responseData = await profileClient.changePassword(
      currentPassword,
      newPassword,
      dispatch,
      bearerToken.tokenValue
    );
  };

  return (
    <div className="w-full flex flex-col px-5">
      <div className="w-full flex flex-row justify-between p-5">
        <PasswordChangeMain
          submitHandler={submitHandler}
          callInProgress={callInProgress}
          errorMessage={errorMessage}
          warningMessage={warningMessage}
          successMessage={successMessage}
        />
      </div>
    </div>
  );
}

export default ChangePassword;
