// Layout.js
import React from 'react';
import BackgroundImages from './BackgroundImages';

const Layout = ({ children }) => {
  return (
    <div>
      <BackgroundImages />
      {children}
    </div>
  );
};

export default Layout;