import React from 'react';

const AuthFormContainer = ({ title, subTitle, children }) => {
  return (
    <div className="flex flex-1 flex-col items-center lg:items-start">
      <h2 className="font-bold text-3xl mb-4">{title}</h2>
      <p className="mb-4">{subTitle}</p>
      {children}
    </div>
  );
};

export default AuthFormContainer;
