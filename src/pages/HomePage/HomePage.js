import "./HomePage.css";
import React from "react";
import { useState, useEffect } from "react";
import TopBar from "../../components/TopBar/TopBar";
import InfoCard from "../../components/InfoCard/InfoCard";
import fetchUserData from "../../utils/userData/fetchUserData";
import ArtistContent from "../../components/InfoCardContent/ArtistContent";
import TrackContent from "../../components/InfoCardContent/TrackContent";

function HomePage() {
  const [profile, setProfile] = useState();
  const [artists, setArtists] = useState();
  const [tracks, setTracks] = useState();

  useEffect(() => {
    async function setUserData() {
      const { userProfile, userArtists, userTracks } = await fetchUserData();
      setProfile(userProfile);
      setArtists(userArtists);
      setTracks(userTracks);
    }
    setUserData();
  }, []);

  return (
    <>
      {profile && artists && tracks && (
        <>
          <TopBar />
          <div className="container">
            <h1>Welcome {profile.display_name}!</h1>
            <h2>Let's jump straight into your Spotify Wrapped!</h2>
            <InfoCard
              title="Your Top Artists Of All Time"
              content={<ArtistContent data={artists} />}
            />
            <InfoCard
              title="Your Top Tracks Of All Time"
              content={<TrackContent data={tracks} />}
            />
          </div>
        </>
      )}
    </>
  );
}
export default HomePage;
