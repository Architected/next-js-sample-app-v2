import { useContext, useEffect, useRef, useState } from 'react';
import { Store } from '../../state/storeProvider';
import { fileClient } from '../../services/defaultServices.js';
import TokenListHeader from './tokenListHeader';
import TokenListGrid from './tokenListGrid';

const TokenListContainer = () => {
  const { dispatch, state } = useContext(Store);
  const { bearerToken } = state['auth'];
  const { isSavingFile, saveFileError, isLoadingList, loadingError, files } =
    state['file'];
  const initialRender = useRef(true);

  useEffect(() => {
    let isMounted = true;

    if (initialRender.current) {
      if (isMounted && bearerToken) {
        initialRender.current = false;
        reloadHandler().then(() => {});
      }
    }

    return () => {
      isMounted = false;
    };
  });

  const reloadHandler = async () => {};

  return (
    <>
      <div className="flex flex-col p-5">
        <TokenListHeader title="NFT Marketplace" reloadList={reloadHandler} />
        {/* <TokenListGrid
          isLoadingList={isLoadingList}
          loadingError={loadingError}
          nfts={nfts}
          isMarketPlace={true}
          buyNFT={buyNFT}
        /> */}
      </div>
    </>
  );
};

export default TokenListContainer;
