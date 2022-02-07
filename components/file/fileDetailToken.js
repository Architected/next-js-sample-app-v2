import {
  CreateTokenView,
  IpfsContentView,
  MintTokenView,
  NftTokenView,
} from './tokenFragment';

const FileDetailToken = (props) => {
  const { file, isUpdatingFile, updatingError, previewToken, mintToken } =
    props;

  const getState = (file) => {
    let nextAction;
    if (file.isTokenMinted) {
      nextAction = 'VIEW_TOKEN';
    } else if (file.isTokenCreated) {
      nextAction = 'MINT_TOKEN';
    } else if (file.isIPFSLinked) {
      nextAction = 'CREATE_TOKEN';
    } else {
      nextAction = 'CREATE_IPFS';
    }

    return nextAction;
  };

  return (
    <div>
      {getState(file) == 'CREATE_IPFS' && <IpfsContentView />}
      {getState(file) == 'CREATE_TOKEN' && (
        <CreateTokenView file={file} previewToken={previewToken} />
      )}
      {getState(file) == 'VIEW_TOKEN' && <NftTokenView />}
      {getState(file) == 'MINT_TOKEN' && (
        <MintTokenView
          file={file}
          mintToken={mintToken}
          isUpdatingFile={isUpdatingFile}
          updatingError={updatingError}
        />
      )}
    </div>
  );
};

export default FileDetailToken;
