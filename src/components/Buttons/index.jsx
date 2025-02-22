import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./Buttons.css"

function Buttons() {
  const [color, setColor] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(e) => setColor(e.target.value.toLowerCase())}
        placeholder="Nhập..."
      />
      <button className={`btn btn-${color}`}>Click</button>
    </>
  );
}

export default Buttons;
