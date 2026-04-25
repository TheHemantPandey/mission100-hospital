export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-[#f7f9fc] p-6 space-y-8">
      {/* Skeleton for Hero Section */}
      <div className="max-w-7xl mx-auto animate-pulse">
        <div className="h-10 bg-gray-200 rounded-md w-1/3 mb-6"></div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <div className="h-16 bg-gray-200 rounded-lg w-full"></div>
            <div className="h-16 bg-gray-200 rounded-lg w-3/4"></div>
          </div>
          <div className="w-64 h-64 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Skeleton for Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-white border border-gray-100 rounded-2xl p-4 space-y-4 shadow-sm animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            <div className="h-20 bg-gray-100 rounded w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}