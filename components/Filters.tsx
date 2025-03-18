export default function Filters() {
    return (
      <div className="w-full md:w-1/4 bg-white p-4 shadow-md rounded-md mb-4 md:mb-0 md:mr-4">
        <h3 className="font-semibold mb-2">Availability</h3>
        {["Open Now", "By Appointment", "24/7 Open"].map((item) => (
          <label key={item} className="block mb-2">
            <input type="checkbox" className="mr-2" /> {item}
          </label>
        ))}
  
        <h3 className="font-semibold mt-4 mb-2">Pricing</h3>
        {["Flat Fee", "Under $70", "$70 - $100", "Above $100"].map((item) => (
          <label key={item} className="block mb-2">
            <input type="radio" name="price" className="mr-2" /> {item}
          </label>
        ))}
  
        <h3 className="font-semibold mt-4 mb-2">Support Type</h3>
        {["Remote Support", "Local Support", "House Call", "Pick & Drop"].map((item) => (
          <label key={item} className="block mb-2">
            <input type="checkbox" className="mr-2" /> {item}
          </label>
        ))}
      </div>
    );
  }
  