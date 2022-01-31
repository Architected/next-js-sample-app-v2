import { urlConstants } from '../../../helper/urlConstants';
import AuthFormContainer from '../authFormContainer';

const EmailValidate = () => {
  return (
    <AuthFormContainer
      title="Sign Up Complete"
      subTitle="Your account is now ready to use."
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

export default EmailValidate;
