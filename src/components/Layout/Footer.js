import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Reserved &copy;SUSSA CART</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>
      </p>
    </div>
  );
};

export default Footer;