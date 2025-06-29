import { useBlogsMiddleware } from "./blogsMiddleware";

export const useConnectMiddleware = () => {
  const { blogsMiddleware } = useBlogsMiddleware();

  const middlewareMap = {
    blogs: blogsMiddleware,
  };

  const connectMiddleware = (module, action, payload = {}) => {
    const middlewareByModule = middlewareMap[module];

    if (!middlewareByModule) {
      console.error("Error middleware not found for - " + module);
      return;
    }
    middlewareByModule(action, payload);
  };

  return { connectMiddleware };
};
