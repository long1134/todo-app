/*
 * Copyright (c) 2023.
 * File Name: Router.tsx
 * Author: Coderthemes
 */
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "@src/components/ScrollToTop";
import { Routes } from "@src/routes/routes";

const Router = () => {
  return (
    <BrowserRouter basename={"/attex_mui/"}>
      <ScrollToTop />
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
