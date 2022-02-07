import FileDetailAttribute from './fileDetailAttribute';
import FileDetailMain from './fileDetailMain';
import FileDetailThumbnail from './fileDetailThumbnail';
import { useState } from 'react';
import { LoadingPanel, TabList, TabPanel } from '../shared/tabList';
import FileDetailIPFS from './fileDetailIPFS';
import FileDetailToken from './fileDetailToken';

const FileDetailContainer = ({
  siteMode,
  isLoadingItem,
  loadingError,
  file,
  updateFile,
  isUpdatingFile,
  updatingError,
  deleteFile,
  isDeletingFile,
  deletingError,
}) => {
  const tabList = [
    {
      id: 1,
      text: 'Thumbnail',
    },
    {
      id: 2,
      text: 'Details',
    },
    {
      id: 3,
      text: 'Attributes',
    },
  ];

  const nftList = [
    {
      id: 4,
      text: 'IPFS',
    },
    {
      id: 5,
      text: 'NFT',
    },
  ];

  const pageTabList = () => {
    return siteMode == 'dapp' ? [...tabList, ...nftList] : tabList;
  };

  const tabClicked = (idx) => {
    console.log('clicked idx:' + idx);
    setActiveTab(idx);
  };

  const [activeTab, setActiveTab] = useState('1');

  return (
    <>
      <LoadingPanel isLoadingItem={isLoadingItem} loadingError={loadingError}>
        <TabList
          tabList={pageTabList()}
          tabClicked={tabClicked}
          activeTab={activeTab}
        />
        <div id="panels" className="bg-white">
          <TabPanel tabId="1" activeTab={activeTab}>
            <FileDetailThumbnail file={file} />
          </TabPanel>
          <TabPanel tabId="2" activeTab={activeTab}>
            <FileDetailMain
              file={file}
              updateFile={updateFile}
              isUpdatingFile={isUpdatingFile}
              updatingError={updatingError}
              deleteFile={deleteFile}
              isDeletingFile={isDeletingFile}
              deletingError={deletingError}
            />
          </TabPanel>
          <TabPanel tabId="3" activeTab={activeTab}>
            <FileDetailAttribute file={file} />
          </TabPanel>
          <TabPanel tabId="4" activeTab={activeTab}>
            <FileDetailIPFS
              file={file}
              isUpdatingFile={isUpdatingFile}
              updatingError={updatingError}
              uploadToIPFS={uploadToIPFS}
            />
          </TabPanel>
          <TabPanel tabId="5" activeTab={activeTab}>
            <FileDetailToken
              file={file}
              isUpdatingFile={isUpdatingFile}
              updatingError={updatingError}
              previewToken={previewToken}
              mintToken={mintToken}
            />
          </TabPanel>
        </div>
      </LoadingPanel>
    </>
  );
};

export default FileDetailContainer;
