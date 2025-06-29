import Button from "./Button";
import { categories } from "../mock-data/blogs";
import { useSelector } from "react-redux";
import { CategoryFilterLoader } from "./Loaders";
import { useConnectMiddleware } from "../middleware/connectMiddleware";

const CategoryFilter = () => {
  const { connectMiddleware } = useConnectMiddleware();

  const blogsState = useSelector((state) => state.blogs);
  const utilityState = useSelector((state) => state.utility);

  const handleCategorySelection = (category) => {
    connectMiddleware("blogs", "LOAD_BLOGS_BY_CATEGORY", {
      component: "blogs-list",
      category,
    });
  };

  if (utilityState.loading?.["blogs-category-list"]) {
    return <CategoryFilterLoader />;
  }

  return (
    <div className="flex gap-2 overflow-auto sm:flex-col sm:gap-4">
      {categories.map((category, index) => {
        const isActive =
          (!blogsState.selectedCategory && index === 0) ||
          blogsState.selectedCategory === category;

        return (
          <Button
            key={category}
            label={category}
            variant={isActive ? "primary" : "outline"}
            onClick={() => handleCategorySelection(category)}
          />
        );
      })}
    </div>
  );
};

export default CategoryFilter;
