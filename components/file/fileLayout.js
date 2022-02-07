export const AttributeRow = ({ labelName, value }) => {
  return (
    <div className="flex flex-col sm:flex-row mb-4">
      <div className="text-sm font-bold w-32 ">{labelName}</div>
      <div>{value}</div>
    </div>
  );
};

export const DefaultListContainer = ({
  isLoadingList,
  loadingError,
  list,
  listEmptyMessage,
  children,
}) => {
  return (
    <>
      <div className="p-5">
        {isLoadingList && (
          <div className="px-4 py-3 leading-normal text-blue-700 rounded border-2 border-gray-100">
            <p>Loading ...</p>
          </div>
        )}
        {loadingError && (
          <div className="px-4 py-3 leading-normal text-red-700 rounded-lg border-2 border-gray-100">
            <p>{loadingError}</p>
          </div>
        )}
        {list &&
          (list.length == 0 ? (
            <>
              <div className="px-4 py-3 leading-normal text-blue-700 rounded-lg border-2 border-gray-100">
                <p>{listEmptyMessage}</p>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-between">
                {children}
              </div>
            </>
          ))}
      </div>
    </>
  );
};
