// SpinnerComponent.js

import React, { useEffect } from "react";
import { jsx, css } from "@emotion/react";
import { ClimbingBoxLoader, SyncLoader } from "react-spinners";
import { RotatingLines } from "react-loader-spinner";
import { useLoading } from "Components/SkinContext";

const override = css`
  display: absolute;
  // margin: 0 auto;
  // border-color: red;
  z-index-1000;

`;

const SpinnerComponent = () => {
  const { loading } = useLoading();
  console.log("LAODing 123", loading);
  useEffect(() => {
    if (loading) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = originalStyle);
    }
  }, []);
  return (
    <>
      <div className={`${loading ? "spinner-design" : ""}`}>
        {loading && (
        <div id="MainOverlayDiv">
            <div class="loader-wrapper"></div>
            <div class="loader"><div class="loader-dot"></div><div class="loader-dot"></div><div class="loader-dot"></div><div class="loader-dot"></div></div>
        </div>
         )}
      </div>
    </>
  );
};

export default SpinnerComponent;
