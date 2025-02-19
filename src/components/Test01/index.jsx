import { useState } from "react";

function Test01() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleClick = () => {
    setName(value);
  }

  return (
    <>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <button onClick={handleClick}>Click</button>
      <div>Hello: {name}</div>
    </>
  )
}

export default Test01;

