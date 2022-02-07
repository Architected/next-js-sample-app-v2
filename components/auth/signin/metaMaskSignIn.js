import Image from 'next/image';
import { OnClickButton } from '../../shared/formFields';
import AuthFormContainer from '../authFormContainer';
import MetamaskImage from '../../../public/metamask.png';

const MetamaskSignIn = ({
  signInHandler,
  isLoading,
  errorMessage,
  warningMessage,
}) => {
  return (
    <AuthFormContainer containerClass="flex flex-1 flex-col items-center">
      <div className="p-10">
        <Image
          width={100}
          height={100}
          src={MetamaskImage}
          alt="Metamask logo"
        />
      </div>

      <OnClickButton
        title="Sign in"
        isLoading={isLoading}
        warningMessage={warningMessage}
        errorMessage={errorMessage}
        onClickHandler={signInHandler}
      />
    </AuthFormContainer>
  );
};

export default MetamaskSignIn;
