import React from "react";
import "./styling/ButtonStyling.css";
const StyledButton = () => {
  return (
    <>
      <a
        target="_self"
        className="cta-btn cta-btn--outline cta-btn--light "
        href="/unlimited?cid=dcom_promomodule_20210909_unlimited_home"
      >
        <span className="innerFill ">
          <span>Get Marvel Unlimited</span>
        </span>
      </a>
    </>
  );
};
export default StyledButton;

