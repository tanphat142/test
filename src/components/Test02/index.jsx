import { useState } from "react";

function Test02() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleChangeA = (e) => {
    const value = parseInt(e.target.value);
    setA(isNaN(value) ? 0 : value);
  };

  const handleChangeB = (e) => {
    const value = parseInt(e.target.value);
    setB(isNaN(value) ? 0 : value);
  };

  return (
    <>
      <input type="text" value={a} onChange={handleChangeA} />
      <input type="text" value={b} onChange={handleChangeB} />
      <div>Tổng: {a + b}</div>
    </>
  );
}

export default Test02;
