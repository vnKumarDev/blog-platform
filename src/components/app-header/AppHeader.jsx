import React from "react";
import UserProfile from "./UserProfile";
import AppLogo from "./AppLogo";

const AppHeader = () => {
  return (
    <div className="flex justify-between bg-gradient-to-r from-blue-200 to-purple-200 shadow-lg  py-2 px-2 sm:px-3">
      <AppLogo />

      <UserProfile />
    </div>
  );
};

export default AppHeader;
