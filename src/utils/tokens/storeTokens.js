const storeTokens = (location, setToken) => {
  const searchParams = new URLSearchParams(location.search);
  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");
  const expireTime = searchParams.get("expires_in");
  if (accessToken && refreshToken && expireTime) {
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("expireTime", expireTime);
    localStorage.setItem("timeStamp", Date.now());
    setToken(accessToken);
  }
};

export default storeTokens;
