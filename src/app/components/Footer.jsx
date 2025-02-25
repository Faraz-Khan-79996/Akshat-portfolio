import React from "react";
import ContactLinks from "./ContactLinks";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-around items-center">
      <ContactLinks />
        {/* <p className="text-slate-200 text-xl font-cursive mt-4 md:mt-0">Made with ❤️ by Faraz</p> */}
      </div>
    </footer>
  );
};

export default Footer;
