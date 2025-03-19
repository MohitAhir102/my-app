export default function Filters() {
  return (
    <div className="w-full md:w-64 bg-white p-4 shadow-md rounded-md space-y-4">


      {/* Availability */}
      <div>
        <h3 className="font-semibold mb-2 text-gray-800">Availability</h3>
        {['Open Now', 'By Appointment', '24/7 Open'].map((item) => (
          <label key={item} className="block mb-1 text-sm text-gray-700">
            <input type="checkbox" className="mr-2 align-middle" /> {item}
          </label>
        ))}
      </div>

      {/* Reviews */}
      <div>
        <h3 className="font-semibold mb-2 text-gray-800">Reviews</h3>
        <label className="block mb-1 text-sm text-gray-700">
          ⭐⭐⭐⭐ & Up
        </label>
      </div>

      {/* Pricing */}
     {/* Pricing */}
     <div>
        <h3 className="font-semibold mb-2 text-gray-800">Pricing</h3>
        <label className="block mb-1 text-sm text-gray-700">
          <input type="checkbox" className="mr-2 align-middle" /> Flat Fee
        </label>
        {['Under $70', '$70 - $100', 'Above $100'].map((item) => (
          <label key={item} className="block mb-1 ml-4 text-sm text-gray-700">
            <input type="radio" name="pricing" className="mr-2 align-middle" /> {item}
          </label>
        ))}
        <div className="flex space-x-2 mt-2">
          <input type="number" placeholder="$ Min" className="w-1/2 p-1 border border-gray-300 rounded-md text-sm" />
          <input type="number" placeholder="$ Max" className="w-1/2 p-1 border border-gray-300 rounded-md text-sm" />
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">Go</button>
        </div>
        {['Hourly Fee', 'Starts At', 'Call For Pricing'].map((item) => (
          <label key={item} className="block mt-1 text-sm text-gray-700">
            <input type="checkbox" className="mr-2 align-middle" /> {item}
          </label>
        ))}
      </div>


      {/* Support Type */}
      <div>
        <h3 className="font-semibold mb-2 text-gray-800">Support Type</h3>
        {['Remote Support', 'Local Instore Support', 'House Call', 'Pick & Drop'].map((item) => (
          <label key={item} className="block mb-1 text-sm text-gray-700">
            <input type="checkbox" className="mr-2 align-middle" /> {item}
          </label>
        ))}
      </div>

      {/* Usage Type */}
      <div>
        <h3 className="font-semibold mb-2 text-gray-800">Usage Type</h3>
        {['Personal Use', 'Business Use'].map((item) => (
          <label key={item} className="block mb-1 text-sm text-gray-700">
            <input type="checkbox" className="mr-2 align-middle" /> {item}
          </label>
        ))}
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="font-semibold mb-2 text-gray-800">Payment Method</h3>
        {['Zelle Pay', 'Klarna', 'Credit/Debit Card', 'PayPal', 'Google Pay', 'Apple Pay', 'Cash', 'Cryptocurrency'].map((item) => (
          <label key={item} className="block mb-1 text-sm text-gray-700">
            <input type="checkbox" className="mr-2 align-middle" /> {item}
          </label>
        ))}
      </div>

      {/* Employee Strength */}
      <div>
        <h3 className="font-semibold mb-2 text-gray-800">Employee Strength</h3>
        {['Solo', '2 - 5', '6 - 10', '11 - 20', '20 - 50', '50+'].map((item) => (
          <label key={item} className="block mb-1 text-sm text-gray-700">
            <input type="checkbox" className="mr-2 align-middle" /> {item}
          </label>
        ))}
      </div>

      {/* Years in Business */}
      <div>
        <h3 className="font-semibold mb-2 text-gray-800">Years in Business</h3>
        <select className="w-full p-2 border border-gray-300 rounded-md">
          {[...Array(20).keys()].map((year) => (
            <option key={year} value={year + 1}>
              {year + 1}
            </option>
          ))}
        </select>
      </div>

      

      

      
    </div>
  );
}