import React from "react";
import MacWindow from "./MacWindow";
import "./soptify.css";
import Title from "../../templates/Title";

const featuredPlaylist =
  "https://open.spotify.com/embed/playlist/37i9dQZF1E4vqXjPu7Hg0z?utm_source=generator&theme=0";

const tracks = [
  "https://open.spotify.com/embed/track/3RmFPuTTAjSQ2pbEd2j9oA?utm_source=generator",
  "https://open.spotify.com/embed/track/2nMeu6UenVvwUktBCpLMK9?utm_source=generator",
  "https://open.spotify.com/embed/track/5HCyWlXZPP0y6Gqq8TgA20?utm_source=generator",
  "https://open.spotify.com/embed/track/1IHWl5LamUGEuP4ozKQSXZ?utm_source=generator",
];

const playlists = [
  "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0",
  "https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n?utm_source=generator&theme=0",
];

const Spotify = ({ windowName, windowsState, setwindowsState }) => {
  return (
    <MacWindow
      windowName={windowName}
      windowsState={windowsState}
      setwindowsState={setwindowsState}
      width="55vw"
      height="76vh"
    >
      <div className="spotify-window">
        <div className="spotify-head">
          <Title title="Music" />
          <p>Curated picks for coding and chill sessions</p>
        </div>

        <section className="spotify-section">
          <h3>Featured Mix</h3>
          <iframe
            title="featured-playlist"
            data-testid="embed-iframe"
            src={featuredPlaylist}
            width="100%"
            height="220"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </section>

        <section className="spotify-section">
          <h3>Popular Tracks</h3>
          <div className="spotify-grid">
            {tracks.map((track, index) => (
              <iframe
                key={`track-${index}`}
                title={`track-${index + 1}`}
                data-testid="embed-iframe"
                src={track}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            ))}
          </div>
        </section>

        <section className="spotify-section">
          <h3>More Playlists</h3>
          <div className="spotify-grid">
            {playlists.map((playlist, index) => (
              <iframe
                key={`playlist-${index}`}
                title={`playlist-${index + 1}`}
                data-testid="embed-iframe"
                src={playlist}
                width="100%"
                height="220"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            ))}
          </div>
        </section>
      </div>
    </MacWindow>
  );
};

export default Spotify;