export const BlogListLoader = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      <div className="md:col-span-2 mt-2">
        <div className="h-10 bg-gray-200 rounded animate-pulse" />
      </div>

      {[...new Array(7)].map((_, index) => (
        <div
          key={index}
          className={`${
            index === 0 ? "md:col-span-2" : "md:col-span-1"
          } w-full`}
        >
          <div className="border border-gray-300 rounded p-3 bg-white animate-pulse grid grid-cols-3 gap-2">
            {/* Image */}
            <div className={`col-span-1 bg-gray-200 h-24 w-full rounded`} />
            {/* Content */}
            <div className="col-span-2 flex flex-col gap-2 justify-between">
              <div className="h-3 w-1/3 bg-gray-200 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-gray-200 rounded-full" />
                  <div className="flex flex-col gap-1">
                    <div className="h-2 w-16 bg-gray-200 rounded" />
                    <div className="h-2 w-12 bg-gray-200 rounded" />
                  </div>
                </div>
                <div className="h-2 w-10 bg-gray-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const CategoryFilterLoader = () => {
  return (
    <div className="flex gap-2 overflow-auto sm:flex-col sm:gap-4">
      {[...new Array(6)].map((_, index) => (
        <div
          key={index}
          className="w-24 h-8 sm:w-full bg-gray-200 rounded animate-pulse"
        />
      ))}
    </div>
  );
};
