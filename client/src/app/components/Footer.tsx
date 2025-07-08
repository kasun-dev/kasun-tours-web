import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-sm mt-2">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Kasun Tours</h2>
          <p>
            Explore Sri Lanka with comfort and style. We provide safe, professional, and personalized travel experiences across the island.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/tours" className="hover:underline">Our Tours</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/blog" className="hover:underline">Travel Blog</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">📍 367/B2, Welivita, Kaduwela, Sri Lanka</p>
          <p className="mb-2">📞 +94 72 399 9927</p>
          <p className="mb-2">📧 contact.kasuntours@gmail.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-2">Get the latest travel tips and deals!</p>
          <form className="flex flex-col sm:flex-row gap-2 mt-2">
            <input
              id='email1'
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md text-white w-full border border-gray-600 bg-gray-800 focus:outline-none focus:border-yellow-500"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md text-black font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 px-4 bg-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} Kasun Tours. All rights reserved.</p>

        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="https://facebook.com" target="_blank" className="hover:text-yellow-400">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-yellow-400">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-yellow-400">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" className="hover:text-yellow-400">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
