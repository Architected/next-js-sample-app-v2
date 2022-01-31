import Link from 'next/link';
import {
  emailRegex,
  FormFieldRow,
  SubmitButton,
} from '../../shared/formFields';
import AuthFormContainer from '../authFormContainer';
import { useForm } from 'react-hook-form';

function PasswordResetStart({
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
      title="Forgotten Password"
      subTitle="Please provide your email address to start the password reset
      process."
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
          title="Submit"
          isLoading={isLoading}
          warningMessage={warningMessage}
          errorMessage={errorMessage}
        />
      </form>
      <p className="text-sm mb-4">
        <Link href="/" passHref>
          <a>Cancel</a>
        </Link>
      </p>
    </AuthFormContainer>
  );
}

export default PasswordResetStart;
