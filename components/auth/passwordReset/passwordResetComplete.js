import React from 'react';
import { urlConstants } from '../../../helper/urlConstants';
import AuthFormContainer from '../authFormContainer';

const PasswordResetComplete = () => {
  return (
    <AuthFormContainer
      title="Password Changed"
      subTitle="Your password has been successfully updated."
    >
      <a
        className="inline-flex justify-center px-4 py-2 font-semibold leading-6 w-96 text-sm shadow rounded text-white bg-black hover:bg-gray-800"
        href={urlConstants.get('SIGNIN')}
      >
        Sign In
      </a>
    </AuthFormContainer>
  );
};

export default PasswordResetComplete;
