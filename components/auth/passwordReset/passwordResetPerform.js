import { useRef } from 'react';
import { FormFieldRow, SubmitButton } from '../../shared/formFields';
import AuthFormContainer from '../authFormContainer';
import { useForm } from 'react-hook-form';

function PasswordResetPerform({
  submitHandler,
  isLoading,
  errorMessage,
  warningMessage,
}) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const newPassword = useRef({});
  newPassword.current = watch('newPassword', '');
  return (
    <AuthFormContainer
      title="Change Password"
      subTitle="Please provide your new password."
    >
      <form onSubmit={handleSubmit(submitHandler)} autoComplete="off">
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
            minLength: {
              validate: (value) =>
                value === newPassword.current || 'The passwords do not match',
            },
          }}
        />
        <SubmitButton
          title="Submit"
          isLoading={isLoading}
          warningMessage={warningMessage}
          errorMessage={errorMessage}
        />
      </form>
    </AuthFormContainer>
  );
}

export default PasswordResetPerform;
