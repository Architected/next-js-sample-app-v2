import React from 'react';
import { OnClickButton } from '../shared/formFields';
import { AttributeRow } from './fileLayout';

const FileDetailIPFS = (props) => {
  const { file, isUpdatingFile, updatingError, uploadToIPFS } = props;
  return (
    <>
      {file && (
        <>
          {file.isIPFSLinked ? (
            <div>
              <div className="form-group row">
                <label className="form-label col-form-label col-sm-12">
                  This file is now stored on the interplanetary file system at
                  the following url:
                </label>
              </div>
              <AttributeRow labelName="Asset Url" value={file.ipfsAssetUrl} />
              <AttributeRow
                labelName="Thumbnail Url"
                value={file.ipfsThumbnailUrl}
              />
            </div>
          ) : (
            <div>
              <div className="form-group row">
                <label className="form-label col-form-label col-sm-12 font-semibold">
                  If you would like to store your file on the Interplanetary
                  File System. Click the Upload button below.
                </label>
              </div>
              <OnClickButton
                title="Upload to IPFS"
                isLoading={isUpdatingFile}
                errorMessage={updatingError}
                onClickHandler={uploadToIPFS}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default FileDetailIPFS;
