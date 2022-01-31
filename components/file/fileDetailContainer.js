import FileDetailAttribute from './fileDetailAttribute';
import FileDetailMain from './fileDetailMain';
import FileDetailThumbnail from './fileDetailThumbnail';
import { useState } from 'react';
const TabList = ({ tabList, tabClicked, activeTab }) => {
  return (
    <>
      <div className="bg-white">
        <nav className="tabs flex flex-col sm:flex-row">
          {tabList.map((tab) => {
            <button
              data-target={`panel-${id}`}
              className={`tab text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
                activeTab == id ? 'active' : ''
              } `}
              onClick={() => tabClicked(id)}
            >
              {tab.text}
            </button>;
          })}
        </nav>
      </div>
    </>
  );
};

const FileDetailContainer = ({
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

  const tabClicked = (idx) => {
    console.log('clicked idx:' + idx);
    setActiveTab(idx);
  };

  const [activeTab, setActiveTab] = useState('1');

  return (
    <>
      <div className="h-screen px-5">
        {isLoadingItem && (
          <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg">
            <p>Loading file ...</p>
          </div>
        )}
        {loadingError && (
          <div className="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg">
            <p>{loadingError}</p>
          </div>
        )}
        {!isLoadingItem && (
          <div className="border-2">
            <TabList
              tabList={tabList}
              tabClicked={tabClicked}
              activeTab={activeTab}
            />
            <div id="panels" className="bg-white">
              <div
                className={`panel-1 tab-content p-5 ${
                  activeTab == '1' ? 'active' : ''
                }`}
              >
                <FileDetailThumbnail file={file} />
              </div>
              <div
                className={`panel-1 tab-content p-5 ${
                  activeTab == '2' ? 'active' : ''
                }`}
              >
                <FileDetailMain
                  file={file}
                  updateFile={updateFile}
                  isUpdatingFile={isUpdatingFile}
                  updatingError={updatingError}
                  deleteFile={deleteFile}
                  isDeletingFile={isDeletingFile}
                  deletingError={deletingError}
                />
              </div>
              <div
                className={`panel-1 tab-content p-5 ${
                  activeTab == '3' ? 'active' : ''
                }`}
              >
                <FileDetailAttribute file={file} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FileDetailContainer;
