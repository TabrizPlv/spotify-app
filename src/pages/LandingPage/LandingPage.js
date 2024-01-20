import "./LandingPage.css";
import { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const accessToken = searchParams.get("access_token");
    const refreshToken = searchParams.get("refresh_token");
    if (accessToken && refreshToken) {
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      setToken(accessToken);
    }
  }, [location.search]);

  const [token, setToken] = useState(localStorage.getItem("access_token"));

  const CheckTokenRoute = ({ children }) => {
    if (token) {
      return <Navigate to="/home" />;
    }
    return children;
  };

  return (
    <CheckTokenRoute>
      <div className="main-container">
        <h1>Spotify Wrapped: Everyday Edition</h1>
        <h2>For all impatient listeners</h2>
        <a href="http://localhost:8888/login">Login To Spotify</a>
      </div>
    </CheckTokenRoute>
  );
}

export default LandingPage;
