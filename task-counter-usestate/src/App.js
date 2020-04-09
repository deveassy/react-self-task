import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   setCount(count + 1);
  // };
  // const handleDecrease = () => {
  //   setCount(count - 1);
  // };
  function handleIncrease(e) {
    e.preventDefault();
    setCount(count + 1);
  }
  function handleDecrease(e) {
    e.preventDefault();
    setCount(count - 1);
  }
  function handleReset(e) {
    e.preventDefault();
    setCount(0);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCount(console.log(count + "이 제출되었습니다!"));
  }

  return (
    <div className="App">
      <p>{count}</p>
      <form>
        <button onClick={handleIncrease}>증가</button>
        <button onClick={handleDecrease}>감소</button>
        <button onClick={handleReset}>초기화</button>
        <input type="button" value="제출" onClick={handleSubmit} />
      </form>
    </div>
  );
}
