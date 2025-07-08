'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 py-16 animate-fadeUp"
    >
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-6">Get in Touch</h1>
      <p className="text-gray-300 max-w-xl text-center mb-12">
        Have questions or need to plan a custom tour? We'd love to hear from you! Reach out anytime — our team is here to help make your travel unforgettable.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Contact Form */}
        <form className="bg-white text-gray-800 rounded-lg p-6 shadow-lg w-full">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={4}
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-600 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-gradient-to-b from-yellow-50 to-white text-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-start mb-4 ml-10">
            <Phone className="w-6 h-6 text-yellow-600 mr-3" />
            <div>
              <p className="font-bold">Phone</p>
              <p>+94 72 399 9927</p>
            </div>
          </div>

          <div className="flex items-start mb-4 ml-10">
            <Mail className="w-6 h-6 text-yellow-600 mr-3" />
            <div>
              <p className="font-bold">Email</p>
              <p>contact.kasuntours@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start ml-10">
            <MapPin className="w-6 h-6 text-yellow-600 mr-3" />
            <div>
              <p className="font-bold">Address</p>
              <p>367/B2, Welivita, Kaduwela, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
