import { getTopArtists } from "../../axios/artistRequests/getTopArtists";
import { getProfile } from "../../axios/profileRequests/getProfile";
import { getTopTracks } from "../../axios/trackRequests/getTopTracks";

const fetchUserData = async () => {
  const token = localStorage.getItem("access_token");
  const userProfile = await getProfile(token);
  const userArtists = await getTopArtists(token);
  const userTracks = await getTopTracks(token);
  return { userProfile, userArtists, userTracks };
};

export default fetchUserData;
