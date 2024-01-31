import "./TopBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import removeTokens from "../../utils/tokens/removeTokens";

function TopBar() {
  const handleLogOut = () => {
    removeTokens();
    <Navigate to="/" />;
  };
  
  return (
    <nav className="nav">
      <a href="/home" className="site-title">
        Spotify Wrapped
      </a>
      <ul>
        <li>
          <Link to="/" onClick={handleLogOut}>
            <div>Logout</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
