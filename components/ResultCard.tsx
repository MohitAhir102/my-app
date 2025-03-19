export default function ResultCard() {
  return (
    <div className="bg-white  shadow-md rounded-lg mb-4 w-[90%] sm:w-[600px] mx-auto">
    
  
    <div className=" p-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-blue-500 font-semibold text-lg">Log On Fix It</h3>
          <p className="text-yellow-500 text-m">
            ★★★★☆ 4.9 (852) <span className="text-green-500">Excellent</span>
          </p>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Live Chat
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
          <img
            src="/default.png"
            alt="Company Logo"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-grow">
          <p>
            <span className="text-blue-600 font-semibold">Opens at :</span> 03:00pm - 10:00pm
          </p>
          <p>
            <span className="font-semibold">Flat Fee :</span> $99.99{" "}
            <span className="text-gray-500">(for Virus Removal)</span>
          </p>
          <p>
            <span className="font-semibold">Distance :</span> 0.4 Miles
          </p>
          <p>
            <span className="font-semibold">Year Founded :</span> 2009
          </p>
          <p className="text-gray-500 mt-1">
            We offer an affordable online remote computer repair service & support since 1999...
          </p>
        </div>
      </div>

      
    </div>
    {/* Feature Section - Icons and Text in the Same Line */}
    <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mt-1 p-2 text-gray-700 text-xs text-center"
        style={{ backgroundColor: "#D5E8FF80" }}
      >
        {[
          { icon: "icon_1.png", text: "Money Back Guarantee" },
          { icon: "icon_1.png", text: "Secure Payments" },
          { icon: "icon_2.png", text: "Certified Technicians" },
          { icon: "icon_3.png", text: "24/7 Support" },
          { icon: "icon_3.png", text: "Same Day Service" },
          { icon: "icon_3.png", text: "100% Satisfaction" },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-center gap-2 p-2">
            <img src={item.icon} alt={item.text} className="w-7 h-7" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}