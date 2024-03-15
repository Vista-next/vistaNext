import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="flex mb-4 gap-3 justify-center text-2xl sm:text-xl md:text-xl lg:text-4xl">
        <a href="#" className="text-white mr-4"><i className="fa fa-skype"></i></a>
        <a href="#" className="text-white mr-4"><i className="fa fa-facebook"></i></a>
        <a target="_blank" href="https://x.com/vistanexts?t=Afsei-NXLvz0IlBe1ohaVw&s=09
" className="text-white mr-4"><i className="fa fa-twitter"></i></a>
        <a target="_blank" href="https://www.instagram.com/vistanexts?igsh=MXMwZ2dvOGNmaGN2bQ==
" className="text-white mr-4 cursor-pointer"><i className="fa fa-instagram"></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/vista-next-solution-02223a2ba" className="text-white mr-4"><i className="fa fa-linkedin"></i></a>
        <a target="_blank" href="https://t.me/+G8bmBQBonC05OTll" className="text-white mr-4"><i className="fa fa-telegram"></i></a>

      </div>

      <div class="flex flex-wrap p-5">
        <div class="w-full md:w-1/3 p-2">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>We're a cutting-edge software development company shaping future successes with innovative solutions</p>

        </div>
        <div class="w-full md:w-1/3 p-2">
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <ul>
            <li><a href="#">Mobile App Development</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Dedicated Developer</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/3 p-2">
          <h3 className="text-lg font-bold mb-3">Office</h3>
          <div className="flex flex-col mb-4">
            <div className="flex items-center mb-2">
              <span className='text-2xl sm:text-xl md:text-xl lg:text-2xl'>
                <i className="fa fa-map-marker text-white mr-4"></i>
              </span>
              <div>
                <h5 className="text-base text-white font-bold">Vista Next Solution</h5>
                <p>shop no-5, 2nd floor satyam complex,</p>
                <p>Bopal Rd, near Samarpan Bunglows,</p>
                <p> Ahmedabad, Gujarat 380058</p>

              </div>
            </div>
            <div className="flex items-center mb-2">
              <span className='text-2xl sm:text-xl md:text-xl lg:text-2xl'>
                <i className="fa fa-phone text-base text-white mr-4"></i>
              </span>
              <h5 className="text-base text-white font-bold">+91258888887</h5>
            </div>
            <div className="flex items-center">
              <span className='text-2xl sm:text-xl md:text-xl lg:text-2xl'>
                <i className="fa fa-envelope text-base text-white mr-4"></i>
              </span>
              <span className="text-sm text-white-400">admin@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>&copy; 2024 Vista Next Solution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
