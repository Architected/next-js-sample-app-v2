import FileCard from './fileCard';
import { DefaultListContainer } from './fileLayout';

export default function FileListGrid({
  isLoadingList,
  loadingError,
  files,
  downloadFile,
}) {
  return (
    <DefaultListContainer
      isLoadingList={isLoadingList}
      loadingError={loadingError}
      list={files}
      listEmptyMessage="You have not uploaded any files yet!"
    >
      {files && (
        <>
          {files.map((file) => (
            <FileCard
              file={file}
              key={file.globalId}
              downloadFile={downloadFile}
            />
          ))}
        </>
      )}
    </DefaultListContainer>
  );
}
