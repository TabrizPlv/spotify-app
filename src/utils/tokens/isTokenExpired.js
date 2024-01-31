const isTokenExpired = () => {
  const timeStamp = localStorage.getItem("timeStamp");
  const expireTime = localStorage.getItem("expireTime");
  const millisecondsElapsed = Date.now() - Number(timeStamp);
  return millisecondsElapsed / 1000 > Number(expireTime);
};

export default isTokenExpired;