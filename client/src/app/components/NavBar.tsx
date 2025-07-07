import {Menu, SquareX} from 'lucide-react'
import { useState } from 'react';

export default function Page() {

    // Function to handle the click event of the menu button
    const [onClick, setOnClick] = useState(true);
    const MenuButtonClick = () => {
        setOnClick(!onClick);
        const menu = document.querySelector('.mobile-menu');
        if (menu) {
            menu.classList.toggle('hidden');
        }
        console.log("Menu button clicked");
    }

  return (
    <div className='text-white text-sm fixed top-0 left-0 right-0 z-10 width-full'>
        <div className=" ">
            <div className="flex flex-row items-center justify-between max-w-7xl">
                {/* logo and title desktop*/}
                <div className="flex bg-gray-800 rounded-2xl shadow-lg hidden md:flex ml-1 mt-1 animate-fadeLeft"> 
                    <p className="text-left text-l text-yellow-500 font-bold pl-4 pt-3 pb-3">
                        Kasun
                    </p>
                    <p className="text-left text-l text-grey-900 font-bold mr-3 mt-2 mb-2 ml-1 bg-yellow-500 border-l-2 border-yellow-500 p-1 rounded-md">
                        Tours 
                    </p>
                </div>

                {/* logo and title mobile*/}
                <div className="flex bg-gray-800 rounded-2xl shadow-lg md:hidden mt-1 ml-1 animate-fadeLeft"> 
                    <p className="text-left text-m text-yellow-500 font-bold pl-4 pt-3 pb-3">
                        Kasun
                    </p>
                    <p className="text-left text-m text-grey-900 font-bold mr-3 mt-2 mb-2 ml-1 bg-yellow-500 border-l-2 border-yellow-500 p-1 rounded-md">
                        Tours 
                    </p>
                </div>


                {/* Navigation buttons*/}
                <div className="hidden md:flex">
                    <ul className="flex justify-center space-x-5 text-gray-300 text-sm">
                        <li><a href="/" className="hover:text-yellow-500">Home</a></li>
                        <li><a href="/tours" className="hover:text-yellow-500">Tours</a></li>
                        <li><a href="/gallery" className="hover:text-yellow-500">Gallery</a></li>
                        <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
                    </ul>
                </div>
                {/* Mobile menu button */}
                <div>
                    <button className="md:hidden p-4 text-gray-300" onClick={MenuButtonClick}>
                        {onClick ?
                            <Menu className="h-6 w-6 text-yellow-500" />:<SquareX className="h-6 w-6 text-yellow-500" />}
                    </button>
                </div>
            </div>
            
        </div>
        {/* Mobile menu */}
        <div>
            {onClick ==false && (
                <div className="mobile-menu bg-gray-800 text-yellow-500 p-4 m-2 rounded-md shadow-lg md:hidden">
                    <ul className="flex flex-col space-y-2">
                        <li><a href="/">Home</a></li>
                        <li><a href="/tours">Tours</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            )}
        </div>
    </div>
  );
}