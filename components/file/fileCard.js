import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faStroopwafel,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

import {
  getFileSize,
  getDisplayName,
  isProcessing,
  isProcessed,
  isScanFailed,
  isFileError,
  getGridDisplayName,
} from 'architected-client/helper/fileHelper.js';
import moment from 'moment';
import { getGroupIcon } from '../../helper/contentTypeIcons';
import { mimeTypeMapping } from 'architected-client/helper/mimeTypeHelper.js';
import Image from 'next/image';
import Link from 'next/link';

const FileCard = ({ file, downloadFile }) => {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <div className="bg-white ring-1 ring-gray-700 ring-opacity-5 shadow-lg rounded">
            <Link href={`/file/${file.globalId}`} passHref>
              <a>
                {file.hasThumbnail && (
                  <img
                    className="block mb-2 w-full rounded-t-lg"
                    src={file.thumbnailPath}
                    alt={getDisplayName(file.fileName)}
                  />
                )}
                {!file.hasThumbnail && (
                  <div className="flex items-center p-7">
                    <div className="w-full text-center">
                      <FontAwesomeIcon
                        className="inline-block"
                        icon={getGroupIcon(mimeTypeMapping[file.contentType])}
                        size="20x"
                      />
                    </div>
                  </div>
                )}
              </a>
            </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-black text-xl mb-2">
                {getGridDisplayName(file)}
              </div>
              <ul>
                <li>
                  <strong className="text-sm">Created:</strong>&nbsp;
                  {moment(file.createdDate).format('MMM Do YYYY hh:mm')}
                </li>
                <li>
                  <strong className="text-sm">Modified:</strong>&nbsp;
                  {moment(file.modifiedDate).format('MMM Do YYYY hh:mm')}
                </li>
                <li>
                  <strong className="text-sm">Size:</strong>&nbsp;
                  {getFileSize(file.fileSize)}
                </li>
              </ul>
              <div className="flex justify-between mt-2">
                <div className="flex space-x-4">
                  {isProcessing(file.fileStatus) && (
                    <span className="inline-flex items-center justify-center px-2 py-2 mr-2 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">
                      Processing
                    </span>
                  )}
                  {isProcessed(file.fileStatus) && (
                    <span className="inline-flex items-center justify-center px-2 py-2 mr-2 text-xs font-bold leading-none text-blue-100 bg-blue-600 rounded-full">
                      Processed
                    </span>
                  )}
                  {isScanFailed(file.fileStatus) && (
                    <span className="inline-flex items-center justify-center px-2 py-2 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                      Scan Failed
                    </span>
                  )}
                  {isFileError(file.fileStatus) && (
                    <span className="inline-flex items-center justify-center px-2 py-2 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                      Error
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-1">
                  <div>
                    {file.isTokenCreated && (
                      <span title="NFT Created">
                        <FontAwesomeIcon icon={faStroopwafel} size="sm" />
                      </span>
                    )}
                  </div>
                  <div>
                    {file.isIPFSLinked && (
                      <span title="Uploaded to IPFS">
                        <FontAwesomeIcon icon={faGlobe} size="sm" />
                      </span>
                    )}
                  </div>
                  <div>
                    {isProcessed(file.fileStatus) && (
                      <a
                        href="#"
                        onClick={() =>
                          downloadFile(file.globalId, file.fileName)
                        }
                        title="Download file"
                      >
                        <FontAwesomeIcon icon={faDownload} size="lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileCard;
