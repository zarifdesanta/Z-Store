import React, { useState } from "react";
import "../styles/Card.css";

import { LuDownload } from "react-icons/lu";

function WallCard(props) {
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
          {/* <p>{props.details}</p> */}
        </div>
        <p>{props.resolution}</p>
      </div>

      <div className="download-button-container">
        <a
          className="download-button"
          download={props.name + ".png"}
          href={props.coverImage}
          title={props.name}
        >
          <LuDownload size={25}></LuDownload>
        </a>
        {/* <p>{downloadCount}</p> */}
      </div>
    </div>
  );
}

export default WallCard;
