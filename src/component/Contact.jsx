import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id='contact'>
        <h1>Contact me</h1>
        <div className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/himanshuverma9030/" target="_blank" className="items">
            <FaInstagram className='icons' />
          </a>
          <a href="https://www.linkedin.com/in/himanshuverma765/" target="_blank" className="items">
            <TbBrandLinkedin className='icons' />
          </a>
          <a href="https://x.com/Himanshu4765" target="_blank" className="items">
            <FaXTwitter className='icons' />
          </a>
          <a href="https://github.com/HimanshuVerma765" target="_blank" className="items">
            <FaGithub className='icons' />
          </a>
          <a href="mailto:himanshuverma4765@gmail.com" target="_blank" className="items">
            <SiGmail className='icons' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact;