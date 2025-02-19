import { useState } from "react";
import "./Test03.scss";

function Test03() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(0);

  const handleChangeA = (e) => {
    const value = parseInt(e.target.value);
    setA(isNaN(value) ? 0 : value);
  };

  const handleChangeB = (e) => {
    const value = parseInt(e.target.value);
    setB(isNaN(value) ? 0 : value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const tinh = () => {
    let res = 0;
    switch (operation) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = b !== 0 ? a / b : "Không thể chia cho 0";
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <>
      <div className="test">
        <input className="test__input" type="text" value={a} onChange={handleChangeA} />
        <input className="test__input" type="text" value={b} onChange={handleChangeB} />
        <br />
        <label className="test__label">
          <input
            type="radio"
            value="+"
            name="group"
            onChange={handleOperationChange}
          />
          Cộng
        </label>
        <label className="test__label">
          <input
            type="radio"
            value="-"
            name="group"
            onChange={handleOperationChange}
          />
          Trừ
        </label>
        <label className="test__label">
          <input
            type="radio"
            value="*"
            name="group"
            onChange={handleOperationChange}
          />
          Nhân
        </label>
        <label className="test__label">
          <input
            type="radio"
            value="/"
            name="group"
            onChange={handleOperationChange}
          />
          Chia
        </label>
        <br />
        <button className="test__button" onClick={tinh}>Tính</button>
        <div className="test__div">Kết quả: {result}</div>
      </div>
    </>
  );
}

export default Test03;
