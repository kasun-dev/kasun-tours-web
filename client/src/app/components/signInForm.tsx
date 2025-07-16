import { X } from "lucide-react";
import { createUser } from "../ApiServices/user";
import { useState } from "react";
import Notification from "../components/Notification";

export default function SignInForm({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = async () => {
    if (password1 !== password2) {
      setNotification({ type: 'error', message: "Passwords do not match" });
      return;
    }

    const response = await createUser({ name, email, password: password1 });

    if (response.success) {
      setNotification({ type: 'success', message: "User created successfully!" });
      setTimeout(() => {
        onClose();
    }, 1000);
    } else {
      setNotification({ type: 'error', message: response.message });
    }
  };

  return (
    <>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      <div
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 text-black"
        onClick={onClose}
      >
        <div
          className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-xl shadow-xl w-100 h-150"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="ml-auto block mb-2">
            <X />
          </button>
          <h1 className="text-2xl font-bold mb-4">Hello Welcome...!</h1>

          <label className="block text-sm font-semibold text-gray-600 ml-2">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-yellow-500 p-2 rounded mb-4 hover:border-yellow-800"
            required
          />

          <label className="block text-sm font-semibold text-gray-600 ml-2">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-yellow-500 p-2 rounded mb-4 hover:border-yellow-800"
            required
          />

          <label className="block text-sm font-semibold text-gray-600 ml-2">Password</label>
          <input
            type="password"
            name="password1"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            className="w-full border border-yellow-500 p-2 rounded mb-4 hover:border-yellow-800"
            required
          />

          <label className="block text-sm font-semibold text-gray-600 ml-2">Retype Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            className="w-full border border-yellow-500 p-2 rounded mb-4 hover:border-yellow-800"
            required
          />

          <button className="mb-4">
            <p className="text-sm text-yellow-500 font-semibold hover:text-yellow-800">Have Account?</p>
          </button>

          <button
            onClick={handleSubmit}
            className="mx-auto block w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl"
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
