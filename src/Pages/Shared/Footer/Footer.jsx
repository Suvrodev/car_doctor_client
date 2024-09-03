import React from "react";
import "./Footer.css";

import footerLogo from "../../../assets/Logo/logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src={footerLogo} alt="" />
        <p>
          Edwin Diaz is a software and web <br /> technologies engineer, a life
          coach <br />
          trainer who is also a serial .
        </p>
        <div className="flex justify-start items-center gap-2">
          <p className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#75787C">
            <FacebookIcon className="footerSocialIcon " />
          </p>
          <p className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#75787C">
            <XIcon className="footerSocialIcon " />
          </p>
          <p className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#75787C">
            <InstagramIcon className="footerSocialIcon " />
          </p>
          <p className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#75787C">
            <LinkedInIcon className="footerSocialIcon " />
          </p>
        </div>
      </div>
      <div>
        <span className="footer-title">About</span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Company</span>

        <a className="link link-hover">Why Car doctor</a>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Marketing</a>
      </div>
      <div>
        <span className="footer-title">Support</span>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accesbility</a>
      </div>
    </footer>
  );
};

export default Footer;
