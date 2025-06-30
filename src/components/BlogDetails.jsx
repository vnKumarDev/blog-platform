import { ArrowLeft, Clock } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBlog } from "../slices/blogsSlice";
import RelatedBlogArticle from "./RelatedBlogArticle";
import Avatar from "./Avatar";
import { formatTimestamp } from "../utils/utility";

const BlogDetails = () => {
  const dispatch = useDispatch();

  const selectedBlog = useSelector((state) => state.blogs.selectedBlog);

  return (
    <div className="gap-3 grid grid-cols-3 mt-2 sm:overflow-auto">
      <div className="col-span-3 sm:col-span-2 flex flex-col gap-2 overflow-auto">
        <div
          className="flex gap-2 hover:cursor-pointer hover:font-bold"
          onClick={() => {
            dispatch(setSelectedBlog(null));
          }}
        >
          <ArrowLeft />
          Back
        </div>

        <div className="text-xl font-bold">{selectedBlog.title}</div>

        <div className="">
          <img
            src={selectedBlog.image}
            className="w-full max-h-[300px] object-cover rounded"
            alt={selectedBlog.title}
          />
        </div>

        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-3 flex gap-2 items-center">
            <Avatar userName={selectedBlog.createdBy} size="md" />

            <div className="flex flex-col gap-0.5">
              <div className="line-clamp-1 text-sm font-semibold text-gray-600">
                {selectedBlog.createdBy}
              </div>
              <div className="text-xs text-gray-500 line-clamp-1">
                {formatTimestamp(selectedBlog.createdAt)}
              </div>
            </div>
          </div>

          <div className="col-span-2 text-xs text-gray-500 flex items-center justify-end gap-2">
            <Clock size={16} />
            <span>{selectedBlog.timeToRead}</span>
          </div>
        </div>

        <div className="text-sm mt-4">{selectedBlog.content}</div>
      </div>

      <div className="col-span-3 sm:col-span-1 sm:overflow-auto">
        <RelatedBlogArticle />
      </div>
    </div>
  );
};

export default BlogDetails;
