import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";
import ResultCard from "@/components/ResultCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header SearchBar */}
      <SearchBar />

      <div className="flex flex-col md:flex-row mt-4">
        {/* Sidebar Filters */}
        <Filters />

        {/* Results Section */}
        <div className="flex-1">
          <h2 className="text-lg font-semibold mb-4">Showing Results For: Search term comes here</h2>
          {[1, 2].map((_, index) => (
            <ResultCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
