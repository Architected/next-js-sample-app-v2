import React from 'react';
import HomeScreen from '../components/homeScreen';
import AuthContainer from '../components/layout/authContainer';

const Index = () => {
  return (
    <>
      <AuthContainer pageTitle="Home">
        <HomeScreen />
      </AuthContainer>
    </>
  );
};

export default Index;
