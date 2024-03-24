import React from "react";
import "../styles/Home.css";
import { appList } from "../helpers/AppList";
import { wallList } from "../helpers/WallList";
import { gameList } from "../helpers/GameList";

import AppCard from "../components/AppCard";
import WallCard from "../components/WallCard";
import GameCard from "../components/GameCard";

function Home() {
  return (
    <>
      <section id="apps" className="home-section-container">
        <h3 className="section-title">Apps</h3>
        <div className="home-sub-container">
          <div className="card-grid-container">
            {appList.map((item, key) => {
              return (
                <AppCard
                  coverImage={item.coverImage}
                  name={item.name}
                  details={item.details}
                  logo={item.logo}
                  downloadCount={item.downloadCount}
                  id={key}
                ></AppCard>
              );
            })}
          </div>
          {/* <a className="view-more-button" href="#">
            View More
          </a> */}
        </div>
      </section>

      <section id="wallpapers" className="home-section-container">
        <h3 className="section-title">Wallpapers</h3>
        <div className="home-sub-container">
          <div className="card-grid-container">
            {wallList.map((item, key) => {
              return (
                <WallCard
                  coverImage={item.coverImage}
                  name={item.name}
                  details={item.details}
                  resolution={item.resolution}
                  downloadCount={item.downloadCount}
                  id={key}
                ></WallCard>
              );
            })}
          </div>
          <a
            className="view-more-button"
            target="_blank"
            href="https://vangari.netlify.app/"
          >
            View More
          </a>
        </div>
      </section>

      <section id="games" className="home-section-container">
        <h3 className="section-title">Games</h3>
        <div className="home-sub-container">
          <div className="card-grid-container">
            {gameList.map((item, key) => {
              return (
                <GameCard
                  coverImage={item.coverImage}
                  name={item.name}
                  details={item.details}
                  downloadLink={item.downloadLink}
                  downloadCount={item.downloadCount}
                  platform={item.platform}
                  id={key}
                ></GameCard>
              );
            })}
          </div>
          <a
            className="view-more-button"
            target="_blank"
            href="https://zarifdesanta.itch.io/"
          >
            View More
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
