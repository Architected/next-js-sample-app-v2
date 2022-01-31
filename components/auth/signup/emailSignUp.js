import AuthFormContainer from '../authFormContainer';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import {
  emailRegex,
  FormFieldRow,
  SubmitButton,
} from '../../shared/formFields';

const EmailSignUp = ({
  submitHandler,
  isLoading,
  errorMessage,
  warningMessage,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <AuthFormContainer title="Sign Up" subTitle="Please enter your details">
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
        <FormFieldRow
          id="password"
          title="Password"
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

        <SubmitButton
          title="Sign up"
          isLoading={isLoading}
          warningMessage={warningMessage}
          errorMessage={errorMessage}
        />
      </form>
      <p className="text-sm mb-4">
        Have an account?&nbsp;
        <Link href="/auth/signin/email" passHref>
          <a>Sign In</a>
        </Link>
      </p>
    </AuthFormContainer>
  );
};

export default EmailSignUp;
