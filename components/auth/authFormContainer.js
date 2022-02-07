import React from 'react';

const AuthFormContainer = ({ title, subTitle, containerClass, children }) => {
  const containerStyle = containerClass
    ? containerClass
    : 'flex flex-1 flex-col items-center lg:items-start';
  return (
    <div className={containerStyle}>
      {title && <h2 className="font-bold text-3xl mb-4">{title}</h2>}
      {subTitle && <p className="mb-4 w-96">{subTitle}</p>}
      {children}
    </div>
  );
};

export default AuthFormContainer;
