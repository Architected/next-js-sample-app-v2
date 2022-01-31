import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Store } from '../../state/storeProvider';
import * as fileActionType from 'architected-client/app-state/constants/file.js';
import { fileClient } from '../../services/defaultServices.js';
import { hasCompleteToken, hasValidToken } from '../../helper/storageHelper';
import FileListHeader from '../../components/file/fileListHeader';
import FileListGrid from '../../components/file/fileListGrid';
import ModalContainer from '../../components/shared/modalContainer';
import { SubmitButton } from '../../components/shared/formFields';

function File() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  // const [previewUrl, setPreviewUrl] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);

  const { authState, bearerToken } = state['auth'];
  const {
    displayModal,
    modalTitle,
    isSavingFile,
    saveFileError,
    isLoadingList,
    loadingError,
    files,
    previewUrl,
  } = state['file'];

  const initModal = () => {
    dispatch({ type: fileActionType.SHOW_MODAL, payload: 'Create File' });
    // setPreviewUrl(null);
    setCurrentFile(null);
  };

  const hideModal = () => {
    dispatch({ type: fileActionType.HIDE_MODAL });
    fileDispatch({ type: fileActionType.UPDATE_PREVIEW_URL, payload: null });
    reset();
  };

  const launchCreateFile = (e) => {
    e.preventDefault();
    initModal();
    resetFileInput();
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

    setCurrentFile(e.target.files[0]);
    const previewUrl = URL.createObjectURL(file);

    fileDispatch({
      type: fileActionType.UPDATE_PREVIEW_URL,
      payload: previewUrl,
    });
  };

  const createFile = (data) => {
    const request = {
      file: currentFile,
      name: data.name,
      description: data.description,
    };
    fileClient.uploadFile(request, dispatch, bearerToken.tokenValue);
    setPreviewUrl(null);
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

  useEffect(() => {
    let isMounted = true;

    const validToken = hasCompleteToken(authState, bearerToken);
    console.log('validToken' + validToken);
    if (!validToken) {
      router.push('/');
    } else {
      if (!displayModal && bearerToken) {
        reloadHandler().then(() => {
          if (isMounted) reset();
        });
      }
    }

    return () => {
      isMounted = false;
    };
  }, [displayModal]);

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
          modalTitle={modalTitle}
          handleClose={hideModal}
        >
          <form onSubmit={handleSubmit(createFile)}>
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
                  <Image src={previewUrl} width="380" alt="preview" />
                </div>
              </div>
            )}
            {(previewUrl || isSavingFile) && (
              <SubmitButton
                title="Upload"
                callInProgress={isSavingFile}
                errorMessage={saveFileError}
              ></SubmitButton>
            )}
          </form>
        </ModalContainer>
      </div>
    </>
  );
}

export default File;
