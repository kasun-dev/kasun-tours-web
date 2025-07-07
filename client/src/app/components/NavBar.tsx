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
    <div className='text-white text-sm fixed top-0 left-0 right-0 width-full'>
        <div className="bg-gray-900 ">
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