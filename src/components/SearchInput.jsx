import { Search } from "lucide-react";
import React, { useRef } from "react";
import { setSearchText } from "../slices/utilitySlice";
import { useDispatch } from "react-redux";
import { useConnectMiddleware } from "../middleware/connectMiddleware";

const SearchInput = ({ placeholder = "Search blog..." }) => {
  const dispatch = useDispatch();
  const { connectMiddleware } = useConnectMiddleware();

  const searchInputRef = useRef(null);

  // Debounced search to avoid, API call during user press the keys
  const handleSearchOnChange = (e) => {
    if (searchInputRef.current) {
      clearTimeout(searchInputRef.current);
    }

    searchInputRef.current = setTimeout(() => {
      // Todo handle search text, filter value in load blogs middleware
      connectMiddleware("blogs", "LOAD_BLOGS", { component: "blogs-list" });

      dispatch(
        setSearchText({
          component: "blogs-search-input",
          searchText: e.target.value,
        })
      );
    }, 600);
  };

  return (
    <div className="flex items-center gap-2 w-full bg-white">
      <span className="text-gray-400 text-xs sm:hidden">
        <Search />
      </span>
      {/* Todo need to implement controlled search, Small screen search value not persisting */}
      <input
        type="text"
        placeholder={placeholder}
        className="border-1 rounded border-gray-300 px-2 py-1.5 w-full text-xs sm:text-sm sm:py-1"
        onChange={handleSearchOnChange}
      />
    </div>
  );
};

export default SearchInput;
