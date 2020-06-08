// libs
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  const { auth } = useSelector((state) => state.firebase);

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

export default Navbar;
