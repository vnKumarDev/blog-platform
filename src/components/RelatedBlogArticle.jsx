import React from "react";
import BlogList from "./BlogList";

const RelatedBlogArticle = () => {
  return (
    <div className="border-t-2 sm:border-l-2 border-gray-200 sm:px-2 py-2">
      <div className="font-bold sticky">Related Articles:</div>

      <BlogList source="relatedArticles" />
    </div>
  );
};

export default React.memo(RelatedBlogArticle);
