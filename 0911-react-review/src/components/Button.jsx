import { useState } from "react";

function Button() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);

  function goodCountUp() {
    //count++; // 상태 변수로 변경 불가능
    setGood(good + 1);
  }
  function badCountUp() {
    //count++; // 상태 변수로 변경 불가능
    setBad(bad + 1);
  }



  return (
    <div>
      <h3>total</h3>
      <p>좋아요 <span>{good}번</span> 싫어요 <span>{bad}번</span> </p>
      <button onClick={goodCountUp}>
        좋아요
      </button>&nbsp;
      <button onClick={badCountUp}>
        싫어요
      </button>
    </div>
  )

}

export default Button