export default function ResultCard() {
    return (
      <div className="bg-white p-4 shadow-md rounded-md mb-4">
        <h3 className="text-blue-500 font-semibold text-lg">Log On Fix It</h3>
        <p className="text-yellow-500 text-sm">★★★★☆ 4.9 (852) <span className="text-green-500">Excellent</span></p>
  
        <div className="flex gap-4 mt-2">
          <img src="/globe.svg" alt="logo" className="w-20 h-20 bg-gray-200 rounded" />
          <div className="flex-grow">
            <p>
              <span className="text-blue-600 font-semibold">Opens at :</span> 03:00pm - 10:00pm
            </p>
            <p>
              <span className="font-semibold">Flat Fee :</span> $99.99 <span className="text-gray-500">(for Virus Removal)</span>
            </p>
            <p><span className="font-semibold">Distance :</span> 0.4 Miles</p>
            <p><span className="font-semibold">Year Founded :</span> 2009</p>
            <p className="text-gray-500 mt-1">We offer an affordable online remote computer repair service & support since 1999...</p>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">💬 Live Chat</button>
        </div>
  
        <div className="flex gap-2 mt-2 text-gray-500 text-sm">
          🛡️ Money Back Guarantee 🛡️ Money Back Guarantee 🛡️ Money Back Guarantee
        </div>
      </div>
    );
  }
  