const removeTokens = () => {
  localStorage.removeItem("access_token", "access_token");
  localStorage.removeItem("refresh_token", "refresh_token");
  localStorage.removeItem("expireTime", "expireTime");
  localStorage.removeItem("timeStamp", "timeStamp");
};

export default removeTokens;
