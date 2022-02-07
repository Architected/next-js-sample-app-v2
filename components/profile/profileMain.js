import { useForm } from 'react-hook-form';
import { FormFieldRow, SubmitButton } from '../shared/formFields';

const ProfileMain = ({
  profile,
  updateProfile,
  isUpdatingItem,
  updatingError,
  successMessage,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <>
      {profile && (
        <form onSubmit={handleSubmit(updateProfile)} autoComplete="off">
          <FormFieldRow
            id="firstName"
            title="First name"
            register={register}
            errors={errors}
            config={{
              required: 'Please enter a first name',
              value: profile.firstName,
            }}
          />
          <FormFieldRow
            id="middleName"
            title="Middle name"
            register={register}
            errors={errors}
            config={{
              value: profile.middleName,
            }}
          />
          <FormFieldRow
            id="lastName"
            title="Last name"
            register={register}
            errors={errors}
            config={{
              required: 'Please enter a last name',
              value: profile.lastName,
            }}
          />
          <SubmitButton
            title="Update"
            isLoading={isUpdatingItem}
            errorMessage={updatingError}
            successMessage={successMessage}
          />
        </form>
      )}
    </>
  );
};

export default ProfileMain;
