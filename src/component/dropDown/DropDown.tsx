import "./DropDown.css";
import React from "react";

import { RiArrowDropDownLine } from "react-icons/ri";

type getType = {
  setUp: string;
  punchLine: string;
};

const DropDown = ({ setUp, punchLine }: getType) => {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div className="promo-box">
      <div className="promo-dropdown">
        <h5>{setUp}</h5>

        <RiArrowDropDownLine
          className="icon dropdown-icon"
          onClick={toggleShown}
        />
      </div>
      {isShown && <p>{punchLine}</p>}
    </div>
  );
};

export default DropDown;
