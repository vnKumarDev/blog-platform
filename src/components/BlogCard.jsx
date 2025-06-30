import React from "react";
import Chip from "./Chip";
import Avatar from "./Avatar";
import { formatTimestamp } from "../utils/utility";
import { Clock } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSelectedBlog } from "../slices/blogsSlice";

const BlogCard = ({ blog, index, source }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={blog.id}
      className="border-1 rounded p-2 border-gray-300 grid grid-cols-3 gap-2 bg-white hover:cursor-pointer transition-transform duration-200 ease-in-out hover:shadow-md hover:-translate-y-1 h-full"
      onClick={() => {
        dispatch(setSelectedBlog(blog));
      }}
    >
      <div className="col-span-1 flex items-center justify-center overflow-hidden rounded h-auto bg-gray-100">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover h-full w-full"
        />
      </div>

      <div className="col-span-2 flex flex-col justify-between">
        {/* Top Content */}
        <div>
          <Chip label={blog.category} variant="success" />

          <div className="grid grid-cols-4 gap-2 mt-2">
            <div className="col-span-4 font-bold text-sm line-clamp-1">
              {blog.title}
            </div>

            <div
              className={`col-span-4 text-xs text-gray-500
    line-clamp-2
    ${source === "blogList" && index === 0 ? "md:line-clamp-5" : ""}
  `}
            >
              {blog.content}
            </div>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="mt-3">
          <div className="grid grid-cols-5 gap-2">
            <div className="col-span-3 flex gap-2 items-center">
              <Avatar userName={blog.createdBy} size="sm" />

              <div className="flex flex-col gap-0.5">
                <div className="text-xs text-gray-500 font-semibold line-clamp-1">
                  {blog.createdBy}
                </div>
                <div className="text-xs text-gray-500 line-clamp-1">
                  {formatTimestamp(blog.createdAt)}
                </div>
              </div>
            </div>

            <div className="col-span-2 text-xs text-gray-500 flex items-center justify-end gap-2">
              <Clock size={16} />
              <span>{blog.timeToRead}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
