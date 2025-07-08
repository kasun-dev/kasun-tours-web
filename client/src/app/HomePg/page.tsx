import { Check } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 ">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
       
        <div className="flex items-center justify-center relative z-0">
          <img
            src="./bg.png"
            alt="Home Animation"
            className="max-w-full animate-fadeLeft"
          />
          <button className="absolute bottom-4 left-1/2 transform px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-xl hover:bg-yellow-600 shadow-lg transition duration-300 transform md:hidden animate-fadeUp animate-float">
              Start Planning
          </button>
          
        </div>
        
        {/*mobile view*/}
        <div className="flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-yellow-50 to-white rounded-lg shadow-md md:hidden animate-fadeUp mx-1">
          <h1 className="text-4xl font-extrabold text-yellow-600 mb-4 text-left">
            Welcome to, <span className="text-gray-800 text-5xl text-center">Kasun Tours</span>
          </h1>
          <p className="text-sm text-gray-600 max-w-xl mb-6">
            Your next great adventure starts here. Explore breathtaking destinations, cultural treasures, and unforgettable memories — all with us.
          </p>

        </div>

        {/* desktop view */}
<div className="flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-yellow-50 to-white rounded-lg shadow-md hidden md:block my-10 mx-20 animate-fadeUp">
  <div className="flex flex-col items-start justify-center mb-10">
    <h1 className="text-4xl font-extrabold text-yellow-600 mb-4 text-left">
      Welcome to,
    </h1>
    <span className="text-gray-800 text-5xl font-extrabold text-center mb-4">
      Kasun Tours
    </span>
    <p className="text-md text-gray-600 max-w-xl mb-6">
      Your next great adventure starts here. Explore breathtaking destinations,
      cultural treasures, and unforgettable memories — all with us.
    </p>
    <button className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full hover:bg-yellow-600 shadow-lg transition duration-300 transform hover:scale-105">
      Start Planning
    </button>
  </div>

    {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10 ">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition duration-300 animate-float">
          <h2 className="text-xl font-bold text-yellow-600 mb-3">Affordable Packages</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <Check className="text-green-500 w-4 h-4 mt-1" />
              Budget-friendly pricing for all travelers
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 w-4 h-4 mt-1" />
              No hidden costs
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 w-4 h-4 mt-1" />
              Seasonal discounts
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition duration-300 animate-float">
          <h2 className="text-xl font-bold text-yellow-600 mb-3">Trusted Guides</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <Check className="text-green-500 w-4 h-4 mt-1" />
              Local professionals with deep knowledge
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 w-4 h-4 mt-1" />
              Multilingual tour leaders
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 w-4 h-4 mt-1" />
              Highly rated by previous guests
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition duration-300 animate-float">
          <h2 className="text-xl font-bold text-yellow-600 mb-3">Custom Itineraries</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2">
              <Check className="text-green-500 w-4 h-4 mt-1" />
              Tailored to your travel style
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 w-4 h-4 mt-1" />
              Flexible day-to-day schedules
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 w-4 h-4 mt-1" />
              Private or group options
            </li>
          </ul>
        </div>
      </div>
    </div>


      </div>
    </div>
  );
}