import React, { useRef, useState } from "react";
import { MdAccountCircle, MdVideoCall, MdSearch } from "react-icons/md";

import Dropdown from "../Dropdown/Dropdown";

import "./Navbar.scss";

const Navbar = () => {
  const wrapper = useRef(null);
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="navigation-container" ref={wrapper}>
      <div className="title">
        <h4>Clipr</h4>
      </div>
      <div className="search-box">
        <input placeholder="Search..."></input>
        <MdSearch />
      </div>
      <MdVideoCall className="upload" />
      <MdAccountCircle
        className="account"
        onClick={() => setDropDown(!dropDown)}
      />

      {dropDown ? <Dropdown /> : null}
    </div>
  );
};

export default Navbar;
