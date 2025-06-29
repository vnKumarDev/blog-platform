import { useSelector } from "react-redux";
import { blogsList, categories } from "../mock-data/blogs";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const blogsState = useSelector((state) => state.blogs);
  const utilityState = useSelector((state) => state.utility);

  const selected = blogsState?.selectedCategory || "All";
  const searchText =
    utilityState?.searchText?.["blogs-search-input"]?.toLowerCase() || "";

  return (
    <div className="overflow-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mt-2">
        {blogsState?.blogsList
          ?.slice()
          .filter((blog) => {
            const matchesCategory =
              selected === "All" || blog.category === selected;
            const matchesSearch =
              blog.title.toLowerCase().includes(searchText) ||
              blog.content.toLowerCase().includes(searchText) ||
              blog.createdBy.toLowerCase().includes(searchText);

            return matchesCategory && matchesSearch;
          })
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          ?.map((blog, index) => {
            return (
              <div
                key={blog.id}
                className={`col-span-1 ${index === 0 ? "sm:col-span-2" : ""}`}
              >
                <BlogCard blog={blog} index={index} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
