import { FormFieldRow, SubmitButton } from '../../shared/formFields';
import AuthFormContainer from '../authFormContainer';
import { useForm } from 'react-hook-form';

const EmailValidate = ({
  submitHandler,
  isLoading,
  errorMessage,
  warningMessage,
  successMessage,
  resendHandler,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <AuthFormContainer
      title="Verify email"
      subTitle="A verification message has been to your inbox. Please enter
      the verification code below."
    >
      <form onSubmit={handleSubmit(submitHandler)} autoComplete="off">
        <FormFieldRow
          id="code"
          title="Verification Code"
          register={register}
          errors={errors}
          config={{
            required: 'Please enter your verification code',
            pattern: {
              message: 'Invalid verification code',
            },
          }}
        />

        <SubmitButton
          title="Verify"
          isLoading={isLoading}
          warningMessage={warningMessage}
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
      </form>
      <p className="text-sm mb-4">
        <a onClick={resendHandler}>Resend Verification Code</a>
      </p>
    </AuthFormContainer>
  );
};

export default EmailValidate;
