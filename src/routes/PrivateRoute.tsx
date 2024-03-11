/*
 * Copyright (c) 2023.
 * File Name: PrivateRoute.tsx
 * Author: Coderthemes
 */
import React from "react";
import { useAuthContext } from "@src/states";
import { Navigate, useLocation } from "react-router-dom";

type RouteProps = {
  component: React.ComponentType;
};

export const RouteWrapper = ({ component: RouteComponent }: RouteProps) => {
  return <RouteComponent />
}

export const PrivateRouteWrapper = ({ component: RouteComponent }: RouteProps) => {
  const { isAuthenticated } = useAuthContext()
  const location = useLocation()
  return isAuthenticated ? <RouteComponent /> : <Navigate to={`/auth/login?next=${location.pathname}`} replace />
}

export default RouteWrapper
