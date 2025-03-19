import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";
import ResultCard from "@/components/ResultCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header SearchBar */}
      <SearchBar />

      {/* Search Results Header with Dropdown (Aligned Right) */}
      <div className="flex items-center justify-between mb-4 mt-3">
        <h2 className="text-lg font-medium whitespace-nowrap">
          Showing Results For: Search term comes here
        </h2>
        <select className="p-2 border rounded-lg bg-white text-gray-700 shadow-sm ml-auto">
          <option value="All">Sort by: Distance</option>
          <option value="Services">Services</option>
          <option value="Businesses">Businesses</option>
          <option value="Products">Products</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        {/* Sidebar Filters */}
        <Filters />

        {/* Results Section */}
        <div className="flex-1">
          {[1, 2].map((_, index) => (
            <ResultCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
