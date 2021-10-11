import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 40);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div className="tooltip" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {active && (<div className={`Tooltip-Tip ${props.direction || "bottom"}`}>{props.content}</div>)}
    </div>
  );
};

export default Tooltip;
