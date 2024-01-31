import "./LandingPage.css";
import { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import storeTokens from "../../utils/tokens/storeTokens";

function LandingPage() {
  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem("access_token"));
  useEffect(() => storeTokens(location, setToken), [location, location.search]);

  return (
    <>
      {token ? (
        <Navigate to="/home" />
      ) : (
        <div className="main-container">
          <h1>Spotify Wrapped: Everyday Edition</h1>
          <h2>For all impatient listeners</h2>
          <a href="http://localhost:8888/login">Login To Spotify</a>
        </div>
      )}
    </>
  );
}

export default LandingPage;
