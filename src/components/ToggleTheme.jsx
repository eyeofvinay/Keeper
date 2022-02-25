import React from "react";

var eyes = "🌞";

function ToggleTheme(props) {
  function toggle() {
    if (eyes === "🌞") eyes = "🌙";
    else eyes = "🌞";
    props.onClick();
  }
  return (
    <div className="themer">
      <button title="Toggle theme" onClick={toggle}>
        {eyes}
      </button>
    </div>
  );
}

export default ToggleTheme;
