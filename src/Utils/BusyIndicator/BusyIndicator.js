import React from "react";
import "./BusyIndicator.css"
export default function BusyIndicator({ isOpen }) {
  return (
    isOpen ?
    <div class="spinner">
      <div class="cube1"></div>
      <div class="cube2"></div>
    </div> :
     null
  );
}