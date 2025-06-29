import React from "react";
import { Earth } from "lucide-react";

const AppLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Earth
        style={{
          color: "blue",
        }}
      />

      <span className="font-bold sm:text-xl">
        Blog
        <span className="text-[#0000ff]">Sphere</span>
      </span>
    </div>
  );
};

export default AppLogo;
