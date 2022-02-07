import FileCard from './fileCard';
import { DefaultListContainer } from './fileLayout';
import TokenCard from './tokenCard';

export default function TokenListGrid({
  isLoadingList,
  loadingError,
  nfts,
  isMarketPlace,
  buyNFT,
}) {
  const defaultOwner = '0x0000000000000000000000000000000000000000';

  return (
    <DefaultListContainer
      isLoadingList={isLoadingList}
      loadingError={loadingError}
      list={files}
      listEmptyMessage="You have not uploaded any files yet!"
    >
      {nfts &&
        nfts.map((nft) => (
          <TokenCard
            key={nft.tokenId}
            nft={nft}
            isMarketPlace={isMarketPlace}
            buyNFT={buyNFT}
          />
        ))}
    </DefaultListContainer>
  );
}
