export default function Page() {
  return (
    <div className="bg-gray-900 text-white text-sm fixed top-0 left-0 right-0 width-full">
        <div className="flex flex-row items-center justify-between max-w-7xl">
            {/* logo and title*/}
            <div className="flex"> 
                <p className="text-left text-xl text-yellow-500 font-bold pl-4 pt-4 pb-4">
                    Kasun
                </p>
                <p className="text-left text-xl text-grey-900 font-bold mr-3 mt-3 mb-3 ml-1 bg-yellow-500 border-l-2 border-yellow-500 p-1 rounded-md">
                    Tours 
                </p>
            </div>
            {/* Navigation buttons*/}
            <div>
                <ul className="flex justify-center space-x-5 text-gray-300 text-sm">
                    <li><a href="/" className="hover:text-yellow-500">Home</a></li>
                    <li><a href="/tours" className="hover:text-yellow-500">Tours</a></li>
                    <li><a href="/gallery" className="hover:text-yellow-500">Gallery</a></li>
                    <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}