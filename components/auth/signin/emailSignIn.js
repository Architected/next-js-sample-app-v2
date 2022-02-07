import Link from 'next/link';
import {
  emailRegex,
  FormFieldRow,
  SubmitButton,
} from '../../shared/formFields';
import AuthFormContainer from '../authFormContainer';
import { useForm } from 'react-hook-form';

const EmailSignIn = ({
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
    <AuthFormContainer title="Sign In" subTitle="Please enter your details">
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
            required: 'Please enter your password',
          }}
        />
        <SubmitButton
          title="Sign in"
          isLoading={isLoading}
          warningMessage={warningMessage}
          errorMessage={errorMessage}
        />
      </form>
      <p className="text-sm mb-4">
        Don&apos;t have an account?&nbsp;
        <Link href="/auth/signup/email" passHref>
          <a>Sign Up</a>
        </Link>
      </p>
      <p className="text-sm mb-4">
        Forgotten password?&nbsp;
        <Link href="/auth/password-reset/start" passHref>
          <a>Click here</a>
        </Link>
      </p>
    </AuthFormContainer>
  );
};

export default EmailSignIn;
