import { getFileSize } from 'architected-client/helper/fileHelper';
import { AttributeRow } from './fileLayout';

const FileDetailAttribute = ({ file }) => {
  return (
    <>
      {file && (
        <div>
          <AttributeRow labelName="File Name" value={file.fileName} />
          <AttributeRow
            labelName="File Size"
            value={getFileSize(file.fileSize)}
          />
          <AttributeRow labelName="File Hash" value={file.fileHash} />
          <AttributeRow labelName="File Type" value={file.contentType} />
          <AttributeRow labelName="Status" value={file.fileStatus} />
        </div>
      )}
    </>
  );
};

export default FileDetailAttribute;
