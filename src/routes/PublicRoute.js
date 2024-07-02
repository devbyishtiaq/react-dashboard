import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { showToast } from "../components/common/utils/showToast.util";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useUserContext();

  if (
    user &&
    (user?.isFreeTrial
      ? user?.freeTrial?.isFreeTrialEnded
      : !user?.isSubscriptionPlanCompleted)
  ) {
    debugger;
    showToast("Please set up your subscription plan!", "error");
    return <Navigate to="/set-plan" />;
  }

  return user && user?.role !== "SUPER_ADMIN" ? (
    <Navigate to="/dashboard" />
  ) : user && user?.role === "SUPER_ADMIN" ? (
    <Navigate to="/admin/dashboard" />
  ) : (
    <Component {...rest} />
  );
};

export default PublicRoute;
