import React, { FC } from 'react';
import './Layout.scss';
import SideBar from '../molecules/SideBar/SideBar';

interface Props {
  children?: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <main className="Layout">
      <SideBar />
      <section>{children}</section>
    </main>
  );
};

export default Layout;
