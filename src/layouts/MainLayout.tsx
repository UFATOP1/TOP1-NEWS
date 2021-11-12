import React, { FC } from "react";

import Header from "../components/Header";

const MainLayout: FC = ({ children }) => (
  <>
    <Header title="" />
    {children}
  </>
);

export default MainLayout;
