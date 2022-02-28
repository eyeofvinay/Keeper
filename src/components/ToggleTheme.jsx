import React, { useState } from "react";

var eyes = "🌞";

function ToggleTheme(props) {
  const [count, setCount] = useState(0);

  function toggle() {
    setCount((count + 1) % 2);
    if (count === 0) {
      document.documentElement.setAttribute("data-theme", "dark");
      eyes = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      eyes = "🌞";
    }
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
