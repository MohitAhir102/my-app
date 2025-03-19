import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className="bg-gray-100 p-4 shadow-md flex items-center justify-between w-full">
      <h1 className="text-5xl font-bold text-gray-700">Geekofy</h1>
      <div className="flex items-center flex-grow mx-4 max-w-xl bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
        <div className="px-3">
          <Image src="/Vector.png" alt="location icon" width={16} height={16} />
        </div>
        <input
          type="text"
          placeholder="Find My Location | Search for Service/Business"
          className="flex-grow p-4 text-gray-6000 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
      <div className="flex gap-4 items-center">
        <button>
          <Image src="/mail.png" alt="mail icon" width={28} height={24} />
        </button>
        <button>
          <Image src="/mdi-light_bell.png" alt="notification icon" width={28} height={24} />
        </button>
        <button>
          <Image src="/User_Login.png" alt="profile icon" width={28} height={24} />
        </button>
      </div>
    </div>
  );
}
