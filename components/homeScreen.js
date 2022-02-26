import React from 'react';
import Link from 'next/link';
import { architectedConfig } from '../architectedConfig';

const DappModeScreen = () => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center lg:items-start">
        <h2 className="font-bold text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
          Upload, store, sell
        </h2>
        <p className="text-lg text-center lg:text-left mb-6">
          Discover NFTs in a marketplace bridging the cloud and the blockchain
        </p>
        <div className="flex flex-row">
          <div className="justify-center gap-6 mb-6">
            <Link href="/auth/signin/connect" passHref>
              <a className="bg-black text-white py-2 px-4 rounded">Connect</a>
            </Link>
          </div>
          <div className="justify-center gap-6 mx-6 mb-6">
            <Link href="/explore" passHref>
              <a className="bg-black text-white py-2 px-4 rounded">Explore</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const AppModeScreen = () => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center lg:items-start">
        <h2 className="font-bold text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
          Upload your files
        </h2>
        <p className="text-lg text-center lg:text-left mb-6">
          Storage for your favourite digital assets
        </p>
        <div className="flex justify-center flex-wrap gap-6 mb-6">
          <Link href="/auth/signin/email" passHref>
            <a className="bg-black text-white py-2 px-4 rounded">Sign In</a>
          </Link>
        </div>
        <div className="flex justify-center flex-wrap gap-2 text-sm ">
          Don&apos;t have an account?
          <Link href="/auth/signup/email" passHref>
            <a>Sign up</a>
          </Link>
        </div>
      </div>
    </>
  );
};

const HomeScreen = () => {
  return (
    <>
      {architectedConfig.siteMode == 'dapp' ? (
        <DappModeScreen />
      ) : (
        <AppModeScreen />
      )}
    </>
  );
};

export default HomeScreen;
