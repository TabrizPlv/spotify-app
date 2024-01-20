import "./HomePage.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar";
import InfoCard from "../../components/InfoCard/InfoCard";
import { getTopArtists } from "../../axios/artistRequests/getTopArtists";
import { getProfile } from "../../axios/profileRequests/getProfile";
import { getTopTracks } from "../../axios/trackRequests/getTopTracks";

function HomePage() {
  const [profile, setProfile] = useState(null);
  const [artists, setArtists] = useState(null);
  const [tracks, setTracks] = useState(null);

  const fetchUserData = async () => {
    const token = localStorage.getItem("access_token");
    const userProfile = await getProfile(token);
    const userArtists = await getTopArtists(token);
    const userTracks = await getTopTracks(token);
    setProfile(userProfile);
    setArtists(userArtists);
    setTracks(userTracks);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      {artists && profile && (
        <>
          <TopBar />
          <div className="container">
            <h1>Welcome {profile.display_name}!</h1>
            <h2>Let's jump straight into your Spotify Wrapped!</h2>
            <InfoCard title="Your Top Artists Of All Time" artists={artists} />
          </div>
        </>
      )}
    </>
  );
}
export default HomePage;
