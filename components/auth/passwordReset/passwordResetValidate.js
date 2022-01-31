import React from 'react';
import { FormFieldRow, SubmitButton } from '../../shared/formFields';
import AuthFormContainer from '../authFormContainer';
import { useForm } from 'react-hook-form';

function PasswordResetValidate({
  submitHandler,
  isLoading,
  errorMessage,
  warningMessage,
  successMessage,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <AuthFormContainer
      title="Validate Password Reset"
      subTitle="A verification message has been sent to your inbox. Please
      enter the verification code below to proceed."
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
    </AuthFormContainer>
  );
}

export default PasswordResetValidate;
