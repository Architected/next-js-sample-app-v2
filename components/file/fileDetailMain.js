import { useForm } from 'react-hook-form';
import { FormFieldRow, SubmitButton } from '../shared/formFields';

const FileDetailMain = ({
  file,
  updateFile,
  isUpdatingFile,
  updatingError,
  deleteFile,
  isDeletingFile,
  deletingError,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <>
      {file && (
        <form onSubmit={handleSubmit(updateFile)} autoComplete="off">
          <div className="flex flex-col sm:flex-row mb-4">
            <div className="text-sm font-bold w-32 ">File Name</div>
            <div>{file != null ? file.fileName : ''}</div>
          </div>
          <FormFieldRow
            id="name"
            title="Title"
            register={register}
            errors={errors}
            config={{
              required: 'Please enter a title',
              value: file.name,
            }}
          />
          <FormFieldRow
            id="description"
            title="Description"
            register={register}
            errors={errors}
            controlType="textarea"
            config={{
              required: 'Please enter a description',
              value: file.description,
            }}
          />
          <SubmitButton
            title="Update"
            isLoading={isUpdatingFile}
            errorMessage={updatingError}
          />
        </form>
      )}
    </>
  );
};

export default FileDetailMain;
