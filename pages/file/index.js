import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../../state/storeProvider';
import { hasCompleteToken } from '../../helper/storageHelper';
import FileListContainer from '../../components/file/fileListContainer';

function File() {
  const router = useRouter();
  const { state } = useContext(Store);
  const { authState, bearerToken } = state['auth'];

  useEffect(() => {
    let isMounted = true;

    const validToken = hasCompleteToken(authState, bearerToken);

    if (!validToken) {
      router.push('/');
    }

    return () => {
      isMounted = false;
    };
  });

  return (
    <>
      <FileListContainer />
    </>
  );
}

export default File;
