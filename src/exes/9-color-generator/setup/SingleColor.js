import React, { useEffect, useState } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  // console.log(bcg, hexColor);
  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  const style = {
    backgroundColor: `rgb(${bcg})`,
  };
  const copyHandler = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
    // setTimeout(() => {
    //   setAlert(false);
    // }, 3000);
  };
  useEffect(() => {
    let alertTime;
    if (alert) {
      alertTime = setTimeout(() => {
        setAlert(!alert);
      }, 3000);
    }
    return () => {
      clearTimeout(alertTime);
    };
  }, [alert]);

  return (
    <article
      onClick={copyHandler}
      className={`color ${index > 10 && "color-light"}`}
      style={style}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to click board</p>}
    </article>
  );
};

export default SingleColor;
