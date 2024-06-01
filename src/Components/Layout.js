// Layout.js
import React from 'react';
import BackgroundImages from './BackgroundImages';
// I'd tried mapping the images directly but they set nicer this way by having them wrapped like this. Won't lie, I still don't entirely understand "children" as the passed in value when it is outside Images, but the code works. Will revisit later.
const Layout = ({ children }) => {
  return (
    <div>
      <BackgroundImages />
      {children}
    </div>
  );
};

export default Layout;