import React from "react";
import BlogList from "./BlogList";
import SearchInput from "./SearchInput";
import CategoryFilter from "./CategoryFilter";
import BlogContainerHeader from "./BlogContainerHeader";
import { useSelector } from "react-redux";
import { BlogListLoader } from "./Loaders";
import BlogDetails from "./BlogDetails";

const BlogContainer = () => {
  const utilityState = useSelector((state) => state.utility);
  const blogsState = useSelector((state) => state.blogs);

  console.log("blogState", blogsState.selectedBlog);
  return !blogsState.selectedBlog ? (
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

      {utilityState.loading?.["blogs-list"] ? (
        <BlogListLoader />
      ) : (
        <div className="">
          <BlogList />
        </div>
      )}
    </div>
  ) : (
    <BlogDetails />
  );
};

export default BlogContainer;
