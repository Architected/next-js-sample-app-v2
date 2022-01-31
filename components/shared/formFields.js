import MessagePanel from './messagePanel';

const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const FormLabel = ({ id, title }) => {
  return (
    <label className="block mb-3 text-sm font-bold mt-2 w-32" htmlFor={id}>
      {title}
    </label>
  );
};

const FormTextBox = ({ id, config, register, errors }) => {
  const type = id.toLowerCase().indexOf('password') > -1 ? 'password' : 'text';
  return (
    <>
      <div className="flex flex-col">
        <input
          placeholder=""
          className="border rounded w-full py-2 px-3 w-64 align-middle"
          autoComplete="off"
          type={type}
          {...register(id, config)}
        />
        {errors && errors[id] && (
          <p className="flex flex-col text-red-400 text-sm">
            {errors[id].message}
          </p>
        )}
      </div>
    </>
  );
};

const FormFieldRow = ({ id, title, config, register, errors }) => {
  return (
    <div className="mb-4 flex flex-col sm:flex-row align-middle">
      <FormLabel id={id} title={title} />
      <FormTextBox
        id={id}
        config={config}
        register={register}
        errors={errors}
      />
    </div>
  );
};

const AnimatedButton = () => {
  return (
    <>
      <button
        type="button"
        className="inline-flex justify-center px-4 py-3 font-semibold leading-6 w-96 text-sm shadow rounded text-white bg-black hover:bg-gray-800 transition ease-in-out duration-150 cursor-not-allowed"
        disabled={true}
      >
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </button>
    </>
  );
};

const BasicButton = ({ title }) => {
  return (
    <>
      <button
        className="bg-black text-white px-4 py-3 rounded text-sm w-96"
        type="submit"
      >
        {title}
      </button>
    </>
  );
};

const SubmitButton = ({
  title,
  isLoading,
  warningMessage,
  errorMessage,
  successMessage,
}) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        {isLoading ? (
          <AnimatedButton />
        ) : (
          <BasicButton title={title} isLoading={isLoading} />
        )}
      </div>
      <MessagePanel
        errorMessage={errorMessage}
        warningMessage={warningMessage}
        successMessage={successMessage}
      />
    </>
  );
};

export {
  FormLabel,
  FormTextBox,
  FormFieldRow,
  AnimatedButton,
  BasicButton,
  SubmitButton,
  emailRegex,
};
