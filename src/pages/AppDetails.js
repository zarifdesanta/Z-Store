import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { appList } from "../helpers/AppList";
import "../styles/AppDetails.css";

function AppDetails(props) {
  const { id } = useParams();

  const data = {
    name: appList[id].name,
    logo: appList[id].logo,
    details: appList[id].details,
    features: appList[id].features,
  };

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <section className="home-section-container">
      <div className="details-sub-container">
        <div className="details-header">
          <img src={data.logo} className="logo-image"></img>
          <h3>{data.name}</h3>
          <div className="download-button-container">
            <button className="download-button">Download</button>
          </div>
        </div>
        <h3>{data.details}</h3>

        <div className="deatils-features-container">
          <h3>Features</h3>

          {data.features.map((item) => {
            return <li>{item}</li>;
          })}
        </div>
      </div>
    </section>
  );
}

export default AppDetails;
