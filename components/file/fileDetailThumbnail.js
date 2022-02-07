import { getDisplayName } from 'next/dist/shared/lib/utils';
import { getGroupIcon } from '../../helper/contentTypeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FileDetailThumbnail = ({ file }) => {
  return (
    <div className="bg-white">
      {file &&
        (file.hasThumbnail ? (
          <>
            <div className="flex flex-col sm:flex-row mb-4">
              <div className="text-sm font-bold w-32 ">File Name</div>
              <div>{file != null ? file.fileName : ''}</div>
            </div>
            <img
              className="block mb-2 w-1/4 rounded-lg"
              src={file.thumbnailPath}
              alt={getDisplayName(file.fileName)}
            />
          </>
        ) : (
          <div className="flex items-center p-7">
            <div className="w-full text-center">
              <FontAwesomeIcon
                className="inline-block"
                icon={getGroupIcon(mimeTypeMapping[file.contentType])}
                size="10x"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default FileDetailThumbnail;
