export default function SearchBar() {
    return (
      <div className="bg-white p-4 shadow-md rounded-md flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-700">Geekofy</h1>
        <div className="flex gap-2 items-center flex-grow mx-4">
          <button className="px-3 py-1 bg-red-500 text-white rounded">📍 Find My Location</button>
          <input
            type="text"
            placeholder="Search for Service/Business"
            className="flex-grow border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex gap-2">
          <button>🔔</button>
          <button>✉️</button>
          <button>👤</button>
        </div>
      </div>
    );
  }
  