import { SubmitButton } from '../shared/formFields';
import ModalContainer from '../shared/modalContainer';
import FileListGrid from './fileListGrid';
import FileListHeader from './fileListHeader';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useRef, useState } from 'react';
import { Store } from '../../state/storeProvider';
import { fileClient } from '../../services/defaultServices.js';

const FileListContainer = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { dispatch, state } = useContext(Store);
  const { bearerToken } = state['auth'];
  const { isSavingFile, saveFileError, isLoadingList, loadingError, files } =
    state['file'];
  const [displayModal, setDisplayModal] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const initialRender = useRef(true);

  useEffect(() => {
    let isMounted = true;

    if (initialRender.current) {
      if (isMounted && bearerToken) {
        initialRender.current = false;
        reloadHandler().then(() => {});
      }
    }

    return () => {
      isMounted = false;
    };
  });

  const initModal = () => {
    setDisplayModal(true);
    setPreviewUrl(null);
  };

  const hideModal = () => {
    setDisplayModal(false);
    setPreviewUrl(null);
    reset();
  };

  const launchCreateFile = (e) => {
    e.preventDefault();
    initModal();
    reset();
  };

  const previewFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileSize = file.size;
    const fileType = file.type;
    const validFile = fileClient.validateFileBasic(
      fileSize,
      fileType,
      dispatch
    );

    if (!validFile) return;

    const previewUrl = URL.createObjectURL(file);
    setPreviewUrl(previewUrl);
  };

  const uploadFileHandler = (data) => {
    const currentFile = data.file[0];

    const request = {
      file: currentFile,
      name: data.name,
      description: data.description,
    };

    fileClient
      .uploadFile(request, dispatch, bearerToken.tokenValue)
      .then(() => {
        setDisplayModal(false);
        reloadHandler().then(() => {});
      });
  };

  const downloadFileHandler = async (fileGlobalId, fileName) => {
    return fileClient.downloadFile(
      fileGlobalId,
      fileName,
      bearerToken.tokenValue
    );
  };

  const reloadHandler = async () => {
    await fileClient.getAllFiles(dispatch, bearerToken.tokenValue);
  };

  return (
    <>
      <div className="flex flex-col p-5">
        <FileListHeader
          reloadList={reloadHandler}
          launchCreateFile={launchCreateFile}
        />
        <FileListGrid
          isLoadingList={isLoadingList}
          loadingError={loadingError}
          files={files}
          downloadFile={downloadFileHandler}
        />
        <ModalContainer
          id="file-upload"
          displayModal={displayModal}
          modalTitle="Create File"
          handleClose={hideModal}
        >
          <form onSubmit={handleSubmit(uploadFileHandler)}>
            <div className="mb-4 flex flex-col sm:flex-row align-middle">
              <div className="flex flex-col">
                <input
                  className="border rounded w-full py-2 px-3 w-96 align-middle"
                  {...register('file', {
                    required: 'Please select a file',
                  })}
                  type="file"
                  onChange={previewFile}
                />
              </div>
            </div>
            {previewUrl && (
              <div className="mb-4 flex flex-col sm:flex-row align-middle">
                <div className="flex flex-col">
                  <img src={previewUrl} width="380" alt="preview" />
                </div>
              </div>
            )}
            {(previewUrl || isSavingFile) && (
              <SubmitButton
                title="Upload"
                isLoading={isSavingFile}
                errorMessage={saveFileError}
              ></SubmitButton>
            )}
          </form>
        </ModalContainer>
      </div>
    </>
  );
};

export default FileListContainer;
