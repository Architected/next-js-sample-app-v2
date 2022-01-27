import React, { useContext } from 'react';
import { Store } from '../../state/storeProvider';

function TopNavigation(props) {
  const { state } = useContext(Store);
  const { marketPlace, authState } = state['auth'];

  return (
    <>
<nav class="border-b-2 border-gray-100" bind:this={root}>
	<div class="mx-auto px-10">
		<div class="flex justify-between">
			<div class="flex space-x-4">
				<div>
					<a href="/" class="flex items-center py-5 text-gray-700 hover:text-gray-900">
						<span class="font-bold"
							>{architectedConfig.siteName}
							{architectedConfig.appEnv != 'prod' ? ` - [${architectedConfig.appEnv}]` : ''}</span
						>
					</a>
				</div>
			</div>
			<!-- top right hand side nav -->
			<div class="hidden md:flex items-center space-x-1">
				{#if $AuthStore.authState && $AuthStore.authState.signinScope === 'COMPLETE'}
					<div class="py-2 px-2">{$AuthStore.authState.identifier}</div>
					<div class="ml-3 relative">
						<button class="context-menu-button py-2">
							<Fa icon={faUserCircle} size="2x" />
						</button>
						<div
							class="context-menu hidden absolute right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-gray-700 ring-opacity-5 focus:outline-none"
						>
							<a
								href="/profile"
								class="flex block px-4 py-2 text-sm text-gray-700 items-center hover:bg-gray-200"
							>
								<Fa icon={faUserCircle} size="sm" />
								<p class="ml-2">Your Profile</p>
							</a>
							<a
								href="/changepassword"
								class="flex block px-4 py-2 text-sm text-gray-700 items-center hover:bg-gray-200"
							>
								<Fa icon={faCog} size="sm" />
								<p class="ml-2">Change Password</p>
							</a>
							<a
								href="/auth/signout"
								class="flex block px-4 py-2 text-sm text-gray-700 items-center  hover:bg-gray-200"
							>
								<Fa icon={faSignOutAlt} size="sm" />
								<p class="ml-2">Sign out</p>
							</a>
						</div>
					</div>
				{/if}
				{#if $AuthStore.authState == null && !$AuthStore.isAuthFlow}
					<a href="/auth/signup/email" class="py-2 px-4 text-black">Sign Up</a>
					<a href="/auth/signin/email" class="py-2 px-4 text-black">Sign In</a>
				{/if}
			</div>
			<!-- mobile button -->
			<div class="md:hidden flex items-center">
				<button class="mobile-menu-button">
					<Fa icon={faBars} size="2x" />
				</button>
			</div>
		</div>
	</div>

	<!-- mobile nav -->
	<div class="mobile-menu hidden md:hidden">
		{#if $AuthStore.authState && $AuthStore.authState.signinScope === 'COMPLETE'}
			<a href="/file" class="block py-2 px-6 text-sm hover:bg-gray-200">My Files</a>
			<a href="/profile" class="block py-2 px-6 text-sm hover:bg-gray-200">Profile</a>
			<a href="/changepassword" class="block py-2 px-6 text-sm hover:bg-gray-200">Change Password</a
			>
			<a href="/auth/signout" class="block py-2 px-6 text-sm hover:bg-gray-200">Sign Out</a>
		{/if}
		{#if $AuthStore.authState == null && !$AuthStore.isAuthFlow}
			<a href="/auth/signup/email" class="block py-2 px-6 text-sm hover:bg-gray-200">Sign Up</a>
			<a href="/auth/signin/email" class="block py-2 px-6 text-sm hover:bg-gray-200">Sign In</a>
		{/if}
	</div>
</nav>
    </>
  );
}

export default TopNavigation;
