/*
 * Copyright (c) 2023.
 * File Name: VerticalLayout.tsx
 * Author: Coderthemes
 */

import { Suspense, lazy, useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { CircularProgress, styled } from "@mui/material";
import { useAuthContext } from "@src/states";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "@src/app/store";
import { setLoading } from "@src/app/feature/authSlice";

const LeftSideBar = lazy(() => import("@src/layouts/LeftSideBar"));
const RightSideBar = lazy(() => import("@src/layouts/RightSideBar"));
const Topbar = lazy(() => import("@src/layouts/Topbar"));
const Footer = lazy(() => import("@src/layouts/Footer"));

const ContentWrapper = styled("div")(({ theme }) => {
  return {
    backgroundColor: theme.palette.mode == "light" ? "#f2f2f7" : "#2d333c",
    padding: "24px",
    paddingTop: 0,
    height: "100%",
  }
})

const VerticalLayout = () => {
  const navigate = useNavigate();
  const {loading} = useSelector((state: RootState) => state.auth)
  const isLogin =  localStorage.getItem("loginUser");

  const dispatch = useDispatch()
  useEffect(()=>{
    if(!isLogin) {
      navigate("/login")
    }
    dispatch(setLoading(false))
  },[isLogin])

  return (loading? <CircularProgress /> : 
    <div style={{ display: "flex" }}>
      <Suspense fallback={<div />}>
        <LeftSideBar />
      </Suspense>
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          width:"100%"
        }}>
        <Suspense fallback={<div />}>
          <Topbar />
        </Suspense>

        <ContentWrapper>
          <Suspense fallback={<div />}>
            <Outlet />
          </Suspense>
        </ContentWrapper>

        <Suspense fallback={<div />}>
          <Footer />
        </Suspense>

        <Suspense fallback={<div />}>
          <RightSideBar />
        </Suspense>
      </div>
    </div>
  )
};

export default VerticalLayout;
