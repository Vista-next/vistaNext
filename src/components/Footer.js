import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between p-6 gap-1 flex-nowrap sm:flex-wrap md:flex-wrap lg:flex-nowrap">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>We're a cutting-edge software development company shaping future successes with innovative solutions</p>
        </div>

        <div className="w-full sm:w-1/2 mt-2 md:w-1/3 lg:w-1/4">
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Dedicated Developer</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 mt-2 md:w-1/3 lg:w-1/4">
          <h3 className="text-lg font-bold mb-3">Office</h3>
          <div className="flex flex-col mb-4">
            <div className="flex items-center mb-2">
              <i className="fa fa-map-marker text-base text-white mr-4"></i>
              <div>
                <h5 className="text-base text-white font-bold">Vista Next Solution</h5>
                <span className="text-sm text-gray-400">shop no-5, 2nd floor satyam complex, Bopal Rd, near Samarpan Bunglows, Ahmedabad, Gujarat 380058</span>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <i className="fa fa-phone text-base text-white mr-4"></i>
              <h5 className="text-base text-white font-bold">+91258888887</h5>
            </div>
            <div className="flex items-center">
              <i className="fa fa-envelope text-base text-white mr-4"></i>
              <span className="text-sm text-gray-400">admin@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 mt-2 md:w-1/3 lg:w-1/4">
          <h3 className="text-lg font-bold mb-3">Follow Us</h3>
          <div className="flex mb-4 text-2xl">
            <a href="#" className="text-white mr-4"><i className="fa fa-skype"></i></a>
            <a href="#" className="text-white mr-4"><i className="fa fa-facebook"></i></a>
            <a href="#" className="text-white mr-4"><i className="fa fa-twitter"></i></a>
            <a href="#" className="text-white mr-4"><i className="fa fa-instagram"></i></a>
            <a href="#" className="text-white mr-4"><i className="fa fa-linkedin"></i></a>
            <a href="#" className="text-white mr-4"><i className="fa fa-google"></i></a>
            <a href="#" className="text-white"><i className="fa fa-apple"></i></a>
          </div>
        </div>

      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
