import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { walletService } from '../services/walletServices.js';
import * as authActionType from 'architected-client/app-state/constants/iam.js';
import * as fileActionType from 'architected-client/app-state/constants/file.js';

import { getMarketplaceItems, purchaseToken } from '../helper/contractHelper';
import { hasValidToken } from '../helper/storageHelper';
import { urlConstants } from '../helper/urlConstants';
import { Store } from '../state/storeProvider';
import TokenListContainer from '../components/file/tokenListContainer.js';

function Explore() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { authState, bearerToken } = state['auth'];
  const { isLoadingList, loadingError } = state['file'];
  const [nfts, setNfts] = useState([]);
  const [accountChangedHandler, setAccountChangedHandler] = useState(false);
  const [chainChangedHandler, setChainChangedHandler] = useState(false);

  const getTokens = async () => {
    try {
      dispatch({ type: fileActionType.FILELIST_FETCH_REQUEST });

      if (window.ethereum) {
        if (!chainChangedHandler) {
          window.ethereum.on('chainChanged', handleChainChanged);
          setChainChangedHandler(true);
        }

        if (!accountChangedHandler) {
          window.ethereum.on('accountsChanged', handleAccountChanged);
          setAccountChangedHandler(true);
        }
      }

      const currentChain = await walletService.validateChain(dispatch);

      if (!currentChain.success) {
        dispatch({
          type: fileActionType.FILELIST_FETCH_FAIL,
          payload: currentChain.reason,
        });
        return;
      }

      const items = await getMarketplaceItems();

      dispatch({ type: fileActionType.FILELIST_FETCH_SUCCESS, payload: [] });

      return items;
    } catch (err) {
      console.log(err);
      dispatch({
        type: fileActionType.FILELIST_FETCH_FAIL,
        payload: 'An error has occured',
      });
    }
  };

  useEffect(() => {
    let isMounted = true;
    dispatch({ type: authActionType.INIT_MARKETPLACE_LAYOUT });

    getTokens().then((items) => {
      if (isMounted) setNfts(items);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  function handleChainChanged() {
    window.location.reload();
  }

  function handleAccountChanged() {
    router.push(urlConstants.get('SIGNOUT'));
  }

  async function buyNFT(nft) {
    try {
      const validToken = hasValidToken(authState, bearerToken, dispatch);
      if (validToken) {
        await purchaseToken(nft);
        router.push('/my-purchases');
      } else {
        router.push('/auth/signin/wallet');
      }
    } catch (err) {
      console.log(err);
      console.log('A problem has occured with purchase');
    }
  }

  return (
    <>
      <TokenListContainer
        title="NFT Marketplace"
        action="purchased"
        isLoadingList={isLoadingList}
        loadingError={loadingError}
        nfts={nfts}
        isMarketPlace={true}
        buyNFT={buyNFT}
      />
    </>
  );
}

export default Explore;
