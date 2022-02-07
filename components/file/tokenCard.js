import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getGroupIcon } from '../../helper/contentTypeIcons';
import { mimeTypeMapping } from 'architected-client/helper/mimeTypeHelper.js';
import { OnClickButton } from '../shared/formFields';

const TokenCard = ({ nft }) => {
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <div className="bg-white ring-1 ring-gray-700 ring-opacity-5 shadow-lg rounded">
            {nft.image && (
              <img
                className="block mb-2 w-full rounded-t-lg"
                src={nft.image}
                alt={nft.Name}
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
            <div className="px-6 py-4">
              <div className="font-bold text-black text-xl mb-2">
                {nft.name}
              </div>
              <ul>
                <li>{nft.description}</li>
                <li>
                  <strong className="text-sm">Price:</strong>&nbsp;
                  {nft.price}&nbsp;MATIC
                </li>
                <li>
                  {isMarketPlace && (
                    <tr>
                      <td>
                        {nft.owner == defaultOwner ? (
                          <OnClickButton
                            title="Purchase"
                            onClickHandler={() => buyNFT(nft)}
                          />
                        ) : (
                          <div>Item Sold</div>
                        )}
                      </td>
                    </tr>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenCard;
