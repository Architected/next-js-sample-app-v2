import { useRef } from 'react';
import AuthFormContainer from '../auth/authFormContainer';
import { useForm } from 'react-hook-form';
import { FormFieldRow, SubmitButton } from '../shared/formFields';

function PasswordChangeMain({
  submitHandler,
  callInProgress,
  errorMessage,
  warningMessage,
  successMessage,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const newPassword = useRef({});
  newPassword.current = watch('newPassword', '');

  const submitForm = async (data) => {
    console.log('data in submitForm');
    // await submitHandler(data);
    // reset();
  };
  return (
    <AuthFormContainer
      title="Change Password"
      subTitle="Please provide your new password."
    >
      <form onSubmit={handleSubmit(submitForm)} autoComplete="off">
        <FormFieldRow
          id="newPassword"
          title="New Password"
          register={register}
          errors={errors}
          config={{
            required: 'Please enter your new password',
            minLength: {
              value: 9,
              message: 'Password must have at least 9 characters',
            },
          }}
        />
        <FormFieldRow
          id="confirmPassword"
          title="Confirm Password"
          register={register}
          errors={errors}
          config={{
            required: 'Please confirm your password',
            validate: (value) => {
              return (
                value === newPassword.current ||
                'The passwords entered do not match'
              );
            },
          }}
        />
        <SubmitButton
          title="Submit"
          isLoading={callInProgress}
          warningMessage={warningMessage}
          errorMessage={errorMessage}
          successMessage={successMessage}
        />
      </form>
    </AuthFormContainer>
  );
}

export default PasswordChangeMain;
