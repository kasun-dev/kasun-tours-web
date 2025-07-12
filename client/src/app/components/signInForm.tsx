import { X } from "lucide-react";

export default function signInForn ({onClose}:{onClose: ()=> void}){
    return(
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 text-black"
        onClick={onClose}>
            <div className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-xl shadow-xl w-100 h-150"
            onClick={(e) =>e.stopPropagation()}>
                <button onClick={onClose} className='ml-auto block mb-2'>
                    <X/>
                </button>
                <h1 className="text-2xl font-bold mb-4">Hello Welcome...!</h1>

                <p className='block text-sm text-bold text-grey-500 ml-2'>Name</p>
                <input
                type="text"
                name="name"
                className="w-full border border-yellow-500 p-2 rounded mb-4 hover:border-yellow-800"
                required
                />

                <p className='block text-sm text-bold text-grey-500 ml-2'>Email</p>
                <input
                type="text"
                name="email"
                className="w-full border border-yellow-500 p-2 rounded mb-4 hover:border-yellow-800"
                required
                />

                <p className='block text-sm text-bold text-grey-500 ml-2'>Password</p>
                <input
                type="password"
                name="password1"
                className="w-full border border-yellow-500 p-2 rounded mb-4 hover:border-yellow-800"
                required
                />

                <p className='block text-sm text-bold text-grey-500 ml-2'>Retype Password</p>
                <input
                type="password"
                name="password2"
                className="w-full border border-yellow-500 p-2 rounded mb-1 hover:border-yellow-800"
                required
                />
                <button className='mb-13'>
                    <p className='text-sm text-yellow-500 text-bolds hover:text-yellow-800'>Have Account?</p>
                </button>

                <button className="mx-auto block w-50 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl">
                LogIn
                </button>


            </div>
        </div>
    );
}