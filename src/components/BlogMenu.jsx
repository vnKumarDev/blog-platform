import React from "react";
import SearchInput from "./SearchInput";
import CategoryFilter from "./CategoryFilter";

const BlogMenu = () => {
  return (
    <div
      style={{ height: "calc(100vh - 45px)" }}
      className="flex  overflow-y-hidden w-full"
    >
      <div className="p-3 flex flex-col gap-4 h-full border-r-2 border-gray-200 w-full">
        <div className="mt-2">
          <SearchInput />
        </div>

        <div className="font-semibold">Browse by category:</div>

        <CategoryFilter />
      </div>
    </div>
  );
};

export default BlogMenu;
