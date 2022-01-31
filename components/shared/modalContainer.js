const ModalContainer = ({
  displayModal,
  id,
  modalTitle,
  handleClose,
  children,
}) => {
  return (
    <>
      {displayModal && (
        <div className={`${id} container flex justify-center mx-auto`}>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="max-w-4xl px-5 bg-white">
              <div className="flex items-center justify-between border-b-2 border-gray-200 py-5">
                <h3 className="text-2xl text-bold">{modalTitle}</h3>
                <a href="#" onClick={handleClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-4">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalContainer;
