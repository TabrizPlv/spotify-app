import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { refreshToken } from "../../axios/tokenRequests/refreshToken";
import isTokenExpired from "./isTokenExpired";

const ValidateTokenRoute = ({ children }) => {
  const [validToken, setValidToken] = useState(
    localStorage.getItem("access_token")
  );

  useEffect(() => {
    const checkToken = async () => {
      if (isTokenExpired()) {
        try {
          console.log("Refreshing Token");
          const old_refresh_token = localStorage.getItem("refresh_token");
          //No new refresh token is issued
          const { access_token, expires_in } = await refreshToken(
            old_refresh_token
          );
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("expireTime", expires_in);
          localStorage.setItem("timeStamp", Date.now());
        } catch (e) {
          console.log("Error refreshing token: ", e.message);
          alert("Error: Please login again!");
          setValidToken(false);
        }
      }
    };

    if (validToken) {
      checkToken();
    }
  }, [validToken]);

  if (validToken) {
    return children;
  } else {
    console.log("No token found");
    return <Navigate to="/" />;
  }
};

export default ValidateTokenRoute;
