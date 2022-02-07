import { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../state/storeProvider';
import { profileClient } from '../services/defaultServices';
import ProfileContainer from '../components/profile/profileContainer';
import { hasCompleteToken } from '../helper/storageHelper';

function Profile() {
  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  const { authState, bearerToken } = state['auth'];
  const { isLoadingItem, loadingError, isUpdatingItem, updatingError } =
    state['global'];

  const [profile, setProfile] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const initialRender = useRef(true);

  useEffect(() => {
    let isMounted = true;

    if (initialRender.current) {
      const validToken = hasCompleteToken(authState, bearerToken);

      if (!validToken) {
        router.push('/');
      } else {
        if (isMounted && bearerToken) {
          initialRender.current = false;
          getProfile().then(() => {});
        }
      }
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const getProfile = async () => {
    setProfile(null);

    const data = await profileClient.getProfile(
      dispatch,
      bearerToken.tokenValue
    );

    if (data && !data.InError) {
      setProfile(data);
    }
  };

  const updateProfile = async (data) => {
    setSuccessMessage(null);

    var profileUpdateRequest = {
      globalId: profile.globalId,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
    };

    await profileClient.saveProfile(
      profileUpdateRequest,
      dispatch,
      bearerToken.tokenValue
    );

    await getProfile('updateProfile');

    setSuccessMessage('Profile updated successfully!');
  };

  return (
    <div className="w-full flex flex-col px-5">
      <div className="w-full flex flex-row justify-between p-5">
        <div className="flex space-x-4">
          <h2 className="font-bold text-3xl">Profile</h2>
        </div>
        <div className="flex">
          <div className="mt-2"></div>
        </div>
      </div>
      <ProfileContainer
        updateProfile={updateProfile}
        profile={profile}
        isLoadingItem={isLoadingItem}
        loadingError={loadingError}
        isUpdatingItem={isUpdatingItem}
        updatingError={updatingError}
        successMessage={successMessage}
      />
    </div>
  );
}

export default Profile;
