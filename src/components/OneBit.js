import { useState } from "react";

const OneBit = ({ value, toggle }) => {
  const [isOn, setIsOn] = useState(value);
  return (
    <button
      onClick={toggle ? () => setIsOn(!isOn) : null}
      style={
        isOn ? { backgroundColor: "yellow" } : { backgroundColor: "grey" }
      }
    >
      <h3> </h3>
    </button>
  );
};

export default OneBit;
