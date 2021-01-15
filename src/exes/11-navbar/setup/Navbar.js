import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  // const barRef = useRef(null);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleNavToggle = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    if (!showLinks) {
      linksContainerRef.current.style.height = "0px";
    } else {
      const height = linksRef.current.getBoundingClientRect().height;
      console.log(height);
      linksContainerRef.current.style.height = height + "px";
    }
  }, [showLinks]);

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" className={logo} />

            <button onClick={handleNavToggle} className="nav-toggle">
              {<FaBars />}
            </button>
          </div>
          {/* links container */}
          <div ref={linksContainerRef} className={`links-container`}>
            <ul ref={linksRef} className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <ul className="social-icons">
            {social.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
