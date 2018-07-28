import React from "react";
import "./BusyIndicator.css"
export default function BusyIndicator({ isOpen }) {
  return (
    isOpen ?
    <div className="spinner">
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div> :
     null
  );
}