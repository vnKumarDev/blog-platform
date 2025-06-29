import React from "react";
import BlogList from "./BlogList";
import SearchInput from "./SearchInput";
import CategoryFilter from "./CategoryFilter";
import Button from "./Button";
import BlogContainerHeader from "./BlogContainerHeader";
import { useSelector } from "react-redux";
import { BlogListLoader } from "./Loaders";

const BlogContainer = () => {
  const utilityState = useSelector((state) => state.utility);

  if (utilityState.loading?.["blogs-list"]) {
    return <BlogListLoader />;
  }

  return (
    <div
      className="py-2 px-2 sm:px-3 flex flex-col gap-3 overflow-y-auto"
      style={{
        height: "calc(100vh - 45px)",
      }}
    >
      <BlogContainerHeader />

      <div className="sm:hidden">
        <SearchInput />
      </div>

      <div className="sm:hidden">
        <CategoryFilter />
      </div>

      <div className="">
        <BlogList />
      </div>
    </div>
  );
};

export default BlogContainer;
