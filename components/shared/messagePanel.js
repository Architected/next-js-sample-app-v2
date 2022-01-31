const MessagePanel = ({ errorMessage, warningMessage, successMessage }) => {
  return (
    <>
      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 w-96"
          role="alert"
        >
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
      {warningMessage && (
        <div
          className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative mb-4 w-96"
          role="alert"
        >
          <span className="block sm:inline">{warningMessage}</span>
        </div>
      )}
      {successMessage && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 w-96"
          role="alert"
        >
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
    </>
  );
};

export default MessagePanel;
