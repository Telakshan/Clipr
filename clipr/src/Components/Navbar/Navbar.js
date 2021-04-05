import React, { useRef, useState, useEffect } from "react";
import { MdAccountCircle, MdVideoCall, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

import Dropdown from "../Dropdown/Dropdown";

import "./Navbar.scss";

const Navbar = () => {
  const wrapper = useRef(null);
  const [dropDown, setDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.pageYOffset;

    offset > 100 ? setScrolled(true) : setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (wrapper.current && !wrapper.current.contains(event.target)) {
      // setSideBar(false);
      setDropDown(false);
    }
  };

  return (
    <div
      className={`navigation-container ${scrolled ? "scrolled" : ""}`}
      ref={wrapper}
    >
      <div className="title">
        <Link to="/home">
          <h4>Clipr</h4>
        </Link>
      </div>
      <div className="search-box">
        <input placeholder="Search..."></input>
        <MdSearch className="search-icon" />
      </div>
      <div className="upload">
        <Link to="/upload">
          <MdVideoCall />
        </Link>
      </div>

      <MdAccountCircle
        className="account"
        onClick={() => setDropDown(!dropDown)}
      />

      {dropDown ? <Dropdown /> : null}
    </div>
  );
};

export default Navbar;
