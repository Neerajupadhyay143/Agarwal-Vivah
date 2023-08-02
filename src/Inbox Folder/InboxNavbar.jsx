import React, { useState } from 'react';
import "./InboxNavbar.css";

function InboxNavbar() {
      const [activeTab, setActiveTab] = useState('Received');


  return (
<>
<header className='header'>
 <div className="top-bar">
      <div className="top-bar-left">
        <div className="top-bar-email">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:contact@agarwalsvivah.com" target="_blank">contact@agarwalsvivah.com</a>
        </div>
        <div className="top-bar-contact">
          <i className="fa-sharp fa-solid fa-phone"></i>
          <a href="tel:+919876543210" target="_blank">+91 9198 765 43210</a>
        </div>
      </div>
      <div className="top-bar-right">
        <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a href="#" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#" target="_blank"><i className="fa-brands fa-twitter"></i></a>
      </div>
    </div>
   
</header>


</>
  )
}

export default InboxNavbar;