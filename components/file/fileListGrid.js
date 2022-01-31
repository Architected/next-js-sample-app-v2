import FileCard from './fileCard';

export default function FileListGrid({
  isLoadingList,
  loadingError,
  files,
  downloadFile,
}) {
  return (
    <div className="p-5">
      {isLoadingList && (
        <div className="px-4 py-3 leading-normal text-blue-700 rounded border-2 border-gray-100">
          <p>Loading files ...</p>
        </div>
      )}
      {loadingError && (
        <div className="px-4 py-3 leading-normal text-red-700 rounded-lg border-2 border-gray-100">
          <p>{loadingError}</p>
        </div>
      )}
      {files && files.length == 0 && (
        <>
          <div className="px-4 py-3 leading-normal text-blue-700 rounded-lg border-2 border-gray-100">
            <p>You have not uploaded any files yet!</p>
          </div>
        </>
      )}
      {files && files.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-between">
            {files.map((file) => (
              <FileCard
                file={file}
                key={file.globalId}
                downloadFile={downloadFile}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
