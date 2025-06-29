import React, { useEffect } from "react";
import AppHeader from "../app-header/AppHeader";
import BlogMenu from "../BlogMenu";
import BlogContainer from "../BlogContainer";
import { useConnectMiddleware } from "../../middleware/connectMiddleware";

const AppContainer = () => {
  const { connectMiddleware } = useConnectMiddleware();

  useEffect(() => {
    connectMiddleware("blogs", "LOAD_BLOG_CATEGORIES", {
      component: "blogs-category-list",
    });

    connectMiddleware("blogs", "LOAD_BLOGS", { component: "blogs-list" });
  }, []);

  return (
    <div className="grid grid-cols-5 bg-[#f2f9ff]">
      <div className="col-span-5">
        <AppHeader />
      </div>
      <div className="hidden sm:col-span-1 sm:flex">
        <BlogMenu />
      </div>
      <div className="col-span-5 sm:col-span-4">
        <BlogContainer />
      </div>
    </div>
  );
};

export default AppContainer;
