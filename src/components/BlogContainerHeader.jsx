import React from "react";
import Button from "./Button";

const BlogContainerHeader = () => {
  const isWideScreen = window.innerWidth > 768;

  return (
    <div className="flex justify-between  items-center mt-2">
      <span className="font-bold sm:hidden">Blogs</span>

      <Button
        label={"Create new blog"}
        variant="secondary"
        size={isWideScreen ? "medium" : "small"}
      />
    </div>
  );
};

export default BlogContainerHeader;
