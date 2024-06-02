import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaBookOpen, FaFacebookMessenger, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
;

const Footer = () => {
    return (

   
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav> 
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a><BsTwitterX/></a>
          <a><MdEmail/></a>
          <a><IoLogoYoutube/></a>
          <a><FaLocationDot/></a>
        </div>
      </nav> 
      <aside>
        <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
    );
};

export default Footer;