import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

const TokenListHeader = ({ title, reloadList }) => {
  return (
    <>
      <div className="flex flex-row justify-between px-5">
        <div className="flex space-x-4">
          <h2 className="font-bold text-3xl">{title}</h2>
        </div>
        <div className="flex items-center space-x-6">
          <div>
            <a href="#" onClick={reloadList}>
              <FontAwesomeIcon icon={faSyncAlt} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenListHeader;
