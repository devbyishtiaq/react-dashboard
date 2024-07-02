import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { showToast } from "../components/common/utils/showToast.util";

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const { user } = useUserContext();
  const isAdmin =
    user?.role === "SUPER_ADMIN" ||
    user?.role === "ACCOUNTING" ||
    user?.role === "ACCOUNT_MANAGER";

  const isPosUser = user?.role === "CASHIER";

  if (
    user &&
    !isAdmin &&
    !isPosUser &&
    (user?.isFreeTrial
      ? user?.freeTrial?.isFreeTrialEnded
      : !user?.isSubscriptionPlanCompleted)
  ) {
    showToast("Please set up your subscription plan!", "error");
    return <Navigate to="/set-plan" />;
  } else {
    return user && roles.includes(user.role) ? (
      <Component {...rest} />
    ) : (
      <Navigate to="/unauthorized" />
    );
  }
};

export default ProtectedRoute;
