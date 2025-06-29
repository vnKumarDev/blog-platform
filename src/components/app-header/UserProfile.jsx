import React from "react";

const UserProfile = () => {
  const userName = "N";

  return (
    <div className="w-7 h-7 flex justify-center items-center align-baseline bg-blue-500 rounded-full font-semibold text-white shadow text-sm">
      {userName}
    </div>
  );
};

export default UserProfile;
