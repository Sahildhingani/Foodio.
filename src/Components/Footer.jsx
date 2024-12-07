import { useState } from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="bg-black w-full py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8">
        {/* Part 1: Logo and Description */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 flex rounded-full h-12 w-12 justify-center items-center">
              <h1 className="text-white font-bold text-xl">F</h1>
            </div>
            <h1 className="text-white font-bold text-2xl">Foodio.</h1>
          </div>
          <p className="text-white text-sm md:text-base">
          At Foodio, we bring the best of dining right to your fingertips. Our website allows you to easily book a table in advance, ensuring a seamless and enjoyable experience when you visit us. Whether you're planning a casual meal or a special event, we've got you covered.
          </p>
          <div className="flex gap-6 mt-2">
            {/* Instagram */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
              <img
                className="h-8 w-8"
                src="https://cdn.iconscout.com/icon/free/png-256/free-instagram-logo-icon-download-in-svg-png-gif-file-formats--social-media-brand-logos-pack-icons-1239436.png?f=webp&w=256"
                alt="Instagram"
              />
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
              <img
                className="h-8 w-8"
                src="https://cdn.iconscout.com/icon/free/png-256/free-youtube-logo-icon-download-in-svg-png-gif-file-formats--social-media-pack-logos-icons-2364966.png?f=webp&w=256"
                alt="YouTube"
              />
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white h-12 w-12 rounded-full flex justify-center items-center">
              <img
                className="h-8 w-8"
                src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-logo-icon-download-in-svg-png-gif-file-formats--social-media-brand-logos-pack-icons-1239437.png?f=webp&w=256"
                alt="Facebook"
              />
            </a>
          </div>
        </div>

        {/* Part 2: Page Links */}
        <div className="flex flex-col gap-2 mt-8 md:mt-0">
          <h1 className="text-red-600 font-bold text-lg">Pages</h1>
          <Link to="/" className="text-white font-semibold text-sm md:text-base">Home</Link>
          <Link to="/OrderOnline" className="text-white font-semibold text-sm md:text-base">Order Online</Link>
          <Link to="/Catering" className="text-white font-semibold text-sm md:text-base">Catering</Link>
          <Link to="/Reservation" className="text-white font-semibold text-sm md:text-base">Reservation</Link>
        </div>  

        {/* Part 3: Information Links */}
        <div className="flex flex-col gap-2 mt-8 md:mt-0">
          <h1 className="text-red-600 font-bold text-lg">Information</h1>
          <Link to="/Aboutus" className="text-white font-semibold text-sm md:text-base">About Us</Link>
          <Link to="/Testimonial" className="text-white font-semibold text-sm md:text-base">Testimonial</Link>
          <Link to="/Events" className="text-white font-semibold text-sm md:text-base">Events</Link>
        </div>

        {/* Part 4: Contact Information */}
        <div className="flex flex-col gap-2 mt-8 md:mt-0">
          <h1 className="text-red-600 font-bold text-lg">Get in Touch</h1>
          <p className="text-white text-sm md:text-base">sahildhingani51@gmail.com</p>
          <p className="text-white text-sm md:text-base">+91 7976789806</p>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-black py-4 text-center">
        <h1 className="text-white text-sm md:text-base">© 2024 Foodio. All Rights Reserved.</h1>
      </div>
    </div>
  );
}

export default Footer;

