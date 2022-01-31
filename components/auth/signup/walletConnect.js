import { useForm } from 'react-hook-form';
import {
  emailRegex,
  FormFieldRow,
  SubmitButton,
} from '../../shared/formFields';
import AuthFormContainer from '../authFormContainer';

function WalletConnect({
  submitHandler,
  isLoading,
  errorMessage,
  warningMessage,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <AuthFormContainer
      title="Connect email"
      subTitle="Please enter an email address to link to your wallet."
    >
      <form onSubmit={handleSubmit(submitHandler)} autoComplete="off">
        <FormFieldRow
          id="email"
          title="Email"
          register={register}
          errors={errors}
          config={{
            required: 'Please enter your email',
            pattern: {
              value: emailRegex,
              message: 'Invalid email address',
            },
          }}
        />
        <SubmitButton
          title="Connect"
          isLoading={isLoading}
          warningMessage={warningMessage}
          errorMessage={errorMessage}
        />
      </form>
    </AuthFormContainer>
  );
}

export default WalletConnect;
