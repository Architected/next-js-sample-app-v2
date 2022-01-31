import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const FileListHeader = ({ reloadList, launchCreateFile }) => {
  return (
    <>
      <div className="flex flex-row justify-between px-5">
        <div className="flex space-x-4">
          <h2 className="font-bold text-3xl">My Files</h2>
        </div>
        <div className="flex items-center space-x-6">
          <div>
            <a href="#" onClick={reloadList}>
              <FontAwesomeIcon icon={faSyncAlt} size="lg" />
            </a>
          </div>
          <div>
            <a
              className="bg-black text-white text-sm py-2 px-6 rounded"
              href="#"
              onClick={launchCreateFile}
            >
              Upload File
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileListHeader;
