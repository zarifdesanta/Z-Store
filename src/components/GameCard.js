import React, { useState } from "react";
import "../styles/Card.css";

import { LuDownload } from "react-icons/lu";

function GameCard(props) {
  const [downloadCount, setDownloadCount] = useState(0);

  const addDownloadCount = () => {
    setDownloadCount(downloadCount + 1);
  };

  return (
    <div className="card-container">
      <img className="cover-image" src={props.coverImage}></img>

      <div className="details-text">
        <div>
          <h3>{props.name}</h3>
          <p>{props.details}</p>
        </div>
        <p>{props.platform}</p>
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

export default GameCard;
