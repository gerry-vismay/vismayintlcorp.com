const SkeletonCard = () => (
  <div className="animate-pulse mx-10 my-6">
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-6"></div>
    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-y-6 lg:gap-0">
      <div className="flex-1 w-full lg:mr-6">
        <div className="mb-4">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <ul className="space-y-2 ml-5">
            {[...Array(3)].map((_, i) => (
              <li key={i} className="h-3 bg-gray-200 rounded w-3/4"></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          <ul className="space-y-2 ml-5">
            {[...Array(2)].map((_, i) => (
              <li key={i} className="h-3 bg-gray-200 rounded w-1/2"></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-10 w-32 bg-gray-300 rounded"></div>
    </div>
  </div>
);

export default SkeletonCard;
