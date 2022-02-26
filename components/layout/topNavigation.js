import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { Store } from '../../state/storeProvider';
import Identicon from 'react-identicons';
import { architectedConfig } from '../../architectedConfig';
import { urlConstants } from '../../helper/urlConstants';
import { hasCompleteToken } from '../../helper/storageHelper';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCog,
  faSignOutAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

function TopNavigation(props) {
  const { state } = useContext(Store);
  const { authState, bearerToken, isAuthFlow } = state['auth'];
  const { asPath } = useRouter();
  const { marketPlace } = state['global'];
  const isLoggedIn = hasCompleteToken(authState, bearerToken);

  const [mobileMenuHidden, setMobileMenuHidden] = useState(true);
  const [contextMenuHidden, setContextMenuHidden] = useState(true);

  const signInUrl =
    architectedConfig.siteMode == 'dapp'
      ? '/auth/signin/connect'
      : '/auth/signin/email';
  const signInTitle =
    architectedConfig.siteMode == 'dapp' ? 'Connect' : 'Sign in';

  const displayConnect =
    architectedConfig.siteMode == 'dapp' && asPath != '/auth/signin/connect';

  const displayConnect =
    architectedConfig.siteMode == 'dapp' && asPath != '/auth/signin/connect';

  const toggleMobileMenu = (e) => {
    setMobileMenuHidden(!mobileMenuHidden);
    if (e) e.stopPropagation();
  };

  const toggleContextMenu = (e) => {
    setContextMenuHidden(!contextMenuHidden);
    if (e) e.stopPropagation();
  };

  const hideMenuIfVisible = () => {
    if (!mobileMenuHidden) {
      setMobileMenuHidden(true);
    }

    if (!contextMenuHidden) {
      setContextMenuHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener('click', hideMenuIfVisible);

    return () => {
      window.removeEventListener('click', hideMenuIfVisible);
    };
  }, [mobileMenuHidden, contextMenuHidden]);

  const ContextMenuLink = ({ href, icon, title }) => {
    return (
      <Link href={href} passHref>
        <a className="flex block px-4 py-2 text-sm text-gray-700 items-center hover:bg-gray-200">
          <FontAwesomeIcon icon={icon} size="sm" />
          <p className="ml-2">{title}e</p>
        </a>
      </Link>
    );
  };

  const ContextMenu = () => {
    return (
      <div className="context-menu absolute right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-gray-700 ring-opacity-5 focus:outline-none">
        <ContextMenuLink
          href="/profile"
          icon={faUserCircle}
          title="Your profile"
        />
        {architectedConfig.siteMode == 'app' && (
          <ContextMenuLink
            href="/changepassword"
            icon={faCog}
            title="Change password"
          />
        )}
        <ContextMenuLink
          href="/auth/signout"
          icon={faSignOutAlt}
          title="Sign out"
        />
      </div>
    );
  };

  const TopRightNavLink = ({ link, title }) => {
    return (
      <>
        <Link href={link} passHref>
          <a className="py-2 px-4 text-black">{title}</a>
        </Link>
      </>
    );
  };

  const TopRightMenuLinks = () => {
    return (
      <>
        {architectedConfig.siteMode == 'dapp' ? (
          <>
            {displayConnect && (
              <TopRightNavLink link="/auth/signin/connect" title="Connect" />
            )}
          </>
        ) : (
          <>
            <TopRightNavLink link="/auth/signup/email" title="Sign Up" />
            <TopRightNavLink link="/auth/signin/email" title="Sign In" />
          </>
        )}
      </>
    );
  };

  const ResponsiveMenuLink = ({ link, title }) => {
    return (
      <Link href={link} passHref>
        <a className="block py-2 px-6 text-sm hover:bg-gray-200">{title}</a>
      </Link>
    );
  };

  const ResponsiveMenuLinks = () => {
    return (
      <>
        {architectedConfig.siteMode == 'dapp' ? (
          <>
            <ResponsiveMenuLink link="/file" title="My Files" />
            <ResponsiveMenuLink link="/profile" title="Profile" />
            <ResponsiveMenuLink
              link="/changepassword"
              title="Change Password"
            />
            <ResponsiveMenuLink link="/auth/signout" title="Sign Out" />
          </>
        ) : (
          <>
            <ResponsiveMenuLink link="/file" title="My Files" />
            <ResponsiveMenuLink link="/profile" title="Profile" />
            <ResponsiveMenuLink
              link="/changepassword"
              title="Change Password"
            />
            <ResponsiveMenuLink link="/auth/signout" title="Sign Out" />
          </>
        )}
      </>
    );
  };

  return (
    <>
      <nav className="border-b-2 border-gray-100">
        <div className="mx-auto px-10">
          <div className="flex justify-between">
            {/* 
            LHS Portion 
            */}
            <div className="flex space-x-4">
              <div>
                <Link href="/" passHref>
                  <a className="flex items-center py-5 text-gray-700 hover:text-gray-900">
                    <span className="font-bold">
                      {architectedConfig.siteName}
                      {architectedConfig.appEnv != 'prod'
                        ? ` - [${architectedConfig.appEnv}]`
                        : ''}
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            {/* 
            RHS Portion 
            */}
            <div className="hidden md:flex items-center space-x-1">
              {/* 
              Signed in options 
              */}
              {authState && authState.signinScope === 'COMPLETE' && (
                <>
                  <div className="py-2 px-2">{authState.identifier}</div>
                  <div className="ml-3 relative">
                    <button
                      className="context-menu-button py-2"
                      onClick={(e) => toggleContextMenu(e)}
                    >
                      <Identicon string={authState.identifier} size={30} />
                    </button>
                    {!contextMenuHidden && <ContextMenu />}
                  </div>
                </>
              )}
              {/* 
                unauthenticated options 
                */}
              {!authState && !isAuthFlow && <TopRightMenuLinks />}
            </div>
            {/* 
              Responsive menu toggle icon 
              */}
            <div className="md:hidden flex items-center">
              <button
                className="mobile-menu-button"
                onClick={(e) => toggleMobileMenu(e)}
              >
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>
            </div>
          </div>
        </div>
        {/* 
          Responsive menu content
        */}
        {!mobileMenuHidden && (
          <div className="mobile-menu md:hidden px-5">
            {authState && authState.signinScope === 'COMPLETE' && (
              <>
                <ResponsiveMenuLinks />
              </>
            )}
          </div>
        )}
      </nav>
    </>
  );
}

export default TopNavigation;
