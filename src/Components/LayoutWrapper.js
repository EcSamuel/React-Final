import React from 'react';
import BackgroundImages from './BackgroundImages';
import Layout from './Layout';

const LayoutWrapper = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <BackgroundImages />
      <Layout>{children}</Layout>
    </div>
  );
};

export default LayoutWrapper;