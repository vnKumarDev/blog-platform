import { useDispatch } from "react-redux";
import {
  loadBlogCategories,
  loadBlogs,
  setSelectedCategory,
} from "../slices/blogsSlice";
import { blogsList, categories } from "../mock-data/blogs";
import { setLoading } from "../slices/utilitySlice";

export const useBlogsMiddleware = () => {
  const dispatch = useDispatch();

  const blogsMiddleware = async (action, payload) => {
    switch (action) {
      case "LOAD_BLOG_CATEGORIES":
        // Todo integrate backend API
        // Fetch blogs category mock data
        dispatch(
          setLoading({
            component: payload.component,
            loading: true,
          })
        );

        await new Promise((resolve) => {
          setTimeout(() => {
            dispatch(loadBlogCategories(categories));

            dispatch(
              setLoading({
                component: payload.component,
                loading: false,
              })
            );
          }, 800);

          resolve();
        });
        break;

      case "LOAD_BLOGS":
        // Todo integrate backend API
        // Fetch blogs mock data
        dispatch(
          setLoading({
            component: payload.component,
            loading: true,
          })
        );

        await new Promise((resolve) => {
          setTimeout(() => {
            dispatch(loadBlogs(blogsList));

            dispatch(
              setLoading({
                component: payload.component,
                loading: false,
              })
            );
          }, 1000);

          resolve();
        });
        break;

      case "CREATE_BLOG":
        // Todo integrate backend API to create a blog
        // Todo integrate socket to push notification to admin for approval
        break;

      case "LOAD_BLOGS_BY_CATEGORY":
        // Todo integrate backend API
        // Fetch blogs mock data
        dispatch(
          setLoading({
            component: payload.component,
            loading: true,
          })
        );

        await new Promise((resolve) => {
          setTimeout(() => {
            dispatch(loadBlogs(blogsList));

            dispatch(
              setLoading({
                component: payload.component,
                loading: false,
              })
            );

            dispatch(setSelectedCategory(payload.category));
          }, 1000);

          resolve();
        });
        break;

      default:
        console.warn("No action matched");
    }
  };
  return { blogsMiddleware };
};
