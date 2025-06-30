import { ArrowLeft } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBlog } from "../slices/blogsSlice";

const BlogDetails = () => {
  const blogsState = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  return (
    <div className="py-2 px-2 sm:px-3 gap-3 grid grid-cols-3 mt-2">
      <div
        className="col-span-3 flex gap-2 hover:cursor-pointer hover:font-bold"
        onClick={() => {
          dispatch(setSelectedBlog(null));
        }}
      >
        <ArrowLeft />
        Back
      </div>

      <div className="col-span-3 sm:col-span-2">Blog details goes here</div>

      <div className="col-span-3 sm:col-span-1">Related articles goes here</div>
    </div>
  );
};

export default BlogDetails;
