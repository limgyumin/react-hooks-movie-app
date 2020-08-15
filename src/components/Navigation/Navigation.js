import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <span className="navbar__all">All</span>
      </Link>
    </div>
  );
};

export default Navigation;
