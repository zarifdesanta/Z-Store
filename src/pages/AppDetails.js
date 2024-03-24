import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { appList } from "../helpers/AppList";

function AppDetails(props) {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div>
      hello
      <div>
        <p>{appList[id].name}</p>
      </div>
    </div>
  );
}

export default AppDetails;
