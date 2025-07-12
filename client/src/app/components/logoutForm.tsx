import { X } from "lucide-react";

export default function logoutForm ({onClose}:{onClose:()=> void}) {
    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center shadow-xl rounded-xl text-black"
        onClick={onClose}>
            {/*model*/}
            <div className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-xl shadow-xl w-100 h-50 flex flex-col items-center justify-center"
            onClick={(e)=>e.stopPropagation()}>
                <div className="ml-auto"
                onClick={onClose}>
                    <X/>
                </div>
                <h1 className="text-xl font-bold mb-1">Log Out</h1>
                <p className="text-sm">Are you Sure, You want to LogOut?</p>
                <button className="text-red-500 bg-white rounded-xl px-8 py-1 my-3 border-2 border-red-500 hover:bg-red-500 hover:text-white">
                    Yes
                </button>
                <button className="text-green-500 bg-white rounded-xl px-8 py-1 border-2 border-green-500 hover:bg-green-500 hover:text-white"
                onClick={onClose}>
                    No
                </button>

            </div>


        </div>
    );
}