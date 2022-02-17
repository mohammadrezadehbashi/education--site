import React from "react";
import "./CardPlayList.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
const CardPlayList = () => {
  return (
    <div className="container-card">
      <div className="circle-flex">
        <div className="circle">1</div>
      </div>
      <div className="lefts">
        <IoCloudDownloadOutline className="icon-download" />
        <p className="time-film">00:22:37</p>
      </div>
      <div className="rightt">
        <p>آموزش مقدماتی</p>
      </div>
    </div>
  );
};
export default CardPlayList;
