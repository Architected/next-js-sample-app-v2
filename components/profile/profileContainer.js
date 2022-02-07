import { useState } from 'react';
import { LoadingPanel, TabList, TabPanel } from '../shared/tabList';
import ProfileMain from './profileMain';

const ProfileContainer = ({
  isLoadingItem,
  loadingError,
  profile,
  updateProfile,
  isUpdatingItem,
  updatingError,
  successMessage,
}) => {
  const tabList = [
    {
      id: 1,
      text: 'My Details',
    },
  ];

  const tabClicked = (idx) => {
    setActiveTab(idx);
  };

  const [activeTab, setActiveTab] = useState('1');

  return (
    <>
      <LoadingPanel isLoadingItem={isLoadingItem} loadingError={loadingError}>
        <TabList
          tabList={tabList}
          tabClicked={tabClicked}
          activeTab={activeTab}
        />
        <div id="panels" className="bg-white">
          <TabPanel tabId="1" activeTab={activeTab}>
            <ProfileMain
              profile={profile}
              updateProfile={updateProfile}
              isUpdatingItem={isUpdatingItem}
              updatingError={updatingError}
              successMessage={successMessage}
            />
          </TabPanel>
        </div>
      </LoadingPanel>
    </>
  );
};

export default ProfileContainer;
