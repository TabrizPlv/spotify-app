import axios from "axios";

export const getTopTracks = async (token) => {
  try {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5&offset=0",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    console.log("Error fetching tracks: ", error);
  }
};
