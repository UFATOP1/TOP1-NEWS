import React, { FC } from "react";

import Header from "../components/Header";

const MainLayout: FC = ({ children }) => (
  <>
    <Header title=" TOP1 Highlight" />
    {children}
  </>
);

export default MainLayout;
