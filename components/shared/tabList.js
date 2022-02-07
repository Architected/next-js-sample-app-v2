const Tab = ({ t, activeTab, tabClicked }) => {
  return (
    <button
      data-target={`panel-${t.id}`}
      className={`tab text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ${
        activeTab == t.id ? 'active' : ''
      } `}
      onClick={() => tabClicked(t.id)}
    >
      {t.text}
    </button>
  );
};
export const TabList = ({ tabList, tabClicked, activeTab }) => {
  const tabItems = tabList.map((t, i) => (
    <Tab key={i} t={t} activeTab={activeTab} tabClicked={tabClicked} />
  ));
  return (
    <>
      <div className="bg-white">
        <nav className="tabs flex flex-col sm:flex-row">{tabItems}</nav>
      </div>
    </>
  );
};

export const LoadingPanel = ({ isLoadingItem, loadingError, children }) => {
  return (
    <div className="h-screen px-5">
      {isLoadingItem && (
        <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg">
          <p>Loading ...</p>
        </div>
      )}
      {loadingError && (
        <div className="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg">
          <p>{loadingError}</p>
        </div>
      )}
      {!isLoadingItem && (
        <>
          <div className="border-1">{children}</div>
        </>
      )}
    </div>
  );
};

export const TabPanel = ({ tabId, activeTab, children }) => (
  <div
    className={`panel-${tabId} tab-content p-5 ${
      activeTab == tabId ? 'active' : ''
    }`}
  >
    {children}
  </div>
);
