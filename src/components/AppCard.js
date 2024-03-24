import React, { useState } from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";

import { LuDownload } from "react-icons/lu";

function AppCard(props) {
  const [downloadCount, setDownloadCount] = useState(0);

  const id = props.id;
  const params = [props.name, props.details];
  //use id instead of raw data

  const addDownloadCount = () => {
    setDownloadCount(downloadCount + 1);
  };

  return (
    <div className="card-container">
      <div className="logo-name-header">
        <img className="logo-image" src={props.logo}></img>
        <h3>{props.name}</h3>
      </div>
      <div className="details-text">
        {/* <h3>{props.name}</h3> */}
        <p>
          {props.details}{" "}
          <Link
            to={"/appDetails/" + id}
            style={{
              textDecoration: "none",
              color: "#27374d",
              fontWeight: 700,
            }}
          >
            see details
          </Link>
        </p>
      </div>

      <div className="download-button-container">
        <a
          target="_blank"
          href={props.downloadLink}
          className="download-button"
        >
          <LuDownload size={25}></LuDownload>
        </a>
        {/* <p>{downloadCount}</p> */}
      </div>
    </div>
  );
}

export default AppCard;
