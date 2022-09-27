import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";
// state는 react의 기능이기 때문에 import를 해줘야함

const Counter = ({ initialValue }) => {
  //props는 객체로 전달되어옴 즉 사용하기 위해서는 점표기법으로 사용해야함
  // 전달되는게 객체일때는 비구조화 할당을 통해 받으면 된다.

  // 0 에서 출발
  // 1씩 증가
  // 1씩 감수
  // count는 상태
  const [count, setCount] = useState(initialValue);

  //useState()라는 React의 메서드는 배열을 반환하고
  //배열의 비구조화 할당을 통해서 0번째 index count,
  // 1번째 index setCount를 상수로 받아옴
  // count는 상태의 값으로 사용, setCount는 count라는 상태를
  // 변화시키는 상태변화 함수로 사용, 인자로 넘겨준 0은 count 초기값

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};
//만약 해당 props로 전달되는 객체중 없는걸 전달할 경우를 방지하기 위해
// 디폴트 값을 사용

export default Counter;
// state가 바뀔 때마다 리랜더링됨
// 즉 , Count()가 다시 반환됨

// Props -> 컴포넌트에 데이터를 전달하는 방법
// 동적인 데이터도 전달 가능함
