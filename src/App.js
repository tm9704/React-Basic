// import "./App.css";
import MyHeader from "./MyHeader";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  // const style = {
  //   App: {
  //     backgroundColor: "black",
  //   },
  //   h2: {
  //     color: "red",
  //   },
  //   bold_text: {
  //     color: "green",
  //   },
  // };

  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initiaValue: 5,
  };

  return (
    <Container>
      <div className="App">
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

//html과 조금 다른 jsx의 문법
//1. 닫힘 규칙
// <div>라는 여는 태그가 있으면 </div> 처럼 닫는 태그가 무조건 있어야함
// <image> 태그 같은 경우 태그를 열자마자 닫아버리면 됨 <image /> (self closing tag)
//2. 최상위 태그 규칙
// 리턴 문 안에서 (컴포넌트의 구성 안에) 가장 밖에 있는 태그
// 최상위 태그를 지워버리면 에러발생 (jsx는 반드시 하나의 부모를 가져야함)
// 즉 jsx로 컴포넌트를 만들어서 리턴하려면 반드시 하나의 최상위 태그로 다른 모든 태그를 묶어줘야함
// 묶기 싫으면 react.fragment 쓰면 됨
// import React from "react"; 후 <React.Fragment>로 감싸주면됨 (<> 빈태그로 감싸도 됨)
// React의 기능을 이용하지 않는 컴포넌트에서는 굳이 react를 import하지 않아도 됨

// jsx에서는 html과 다르게 class가 js의 예약어이기 때문에 className으로 대체

// import로 css파일을 사용할 수 있음
// 그 외로 inline 규칙을 사용해서 만들 수 있음 =>  객체를 하나 생성해서
// 그 안에 프로퍼티 처럼 넣어주면 됨
// 그리고 리턴문 안에 <div style = {style.App}> 이런식으로 넣어주면 된다.(각 태그마다)

// jsx에 자바스크립트 값을 사용하는 방법
// 변수말고도 표현식도 사용이 가능하다 (문자열도 가능)
// boolean 이런거는 랜더링이 안됨 (숫자나 문자)
// 삼항 연산자로 조건부 랜더링도 가능

//이렇게 js와 html을 합쳐서 사용할 수 있는 문법을 js 표현식
//jsx라고 부름

export default App;
// module.export형식으로 내보냈었는데, 위는 es module 시스템임
// 위의 식으로 내보내면 import 이름 from 경로로 import 할 수 있음
// 한개만 내보낼 수 있음

// State (상태)
// 상태란? => 사람은 시간이 지나면 배고파지고 밥을 먹으면 배불러지고
// 또 시간이 지나면 적당한 상태가 됨
// 허기의 정도가 바뀌는 걸 인간의 허기 상태라 할 수 있고 이 상태의 값음
// 적당함 배고픔 배부름 세가지가 있음
// 사람은 해당 상태에 따라 다른 행동을 함
// 즉, 상태는 동적으로 변화하는 어떤 값, 그 값에 따라 다른 행동을 수행하게 하는 것

// 웹에 빗대어 표현하면 Dark Mode가 예시
// 어떤 컴포넌트가 상태라는 테마를 갖고, 그 테마라는 상태는 Dark, Light라는 값을 가질 수 있고
// 사용자는 스위치로 다크 -> 라이트 라이트 -> 다크로 변경시키는 방식을 사용
// 리액트에서 상태는 컴포넌트가 갖는 테마처럼 계속 값이 바뀔 동적인 데이터이고
// 이 상태를 바꾸는 등의 관리는 이걸 가진 컴포넌트가 직접 관리함

//Counter 컴포넌트는 App 컴포넌트의 자식 요소로 배치되어 화면에 표시
// App컴포넌트에서 Counter컴포넌트에게 count의 초기값을 0이 아닌 App 컴포넌트가 전달하는 값으로
// 써라 라고 할때는 Props을 쓰면 됨
// initialValue = {5} 이렇게 자식 컴포넌트에게 initialValue라는 이름을 붙여서 값을 전달할 수 있음
// 이게 Props (이름은 아무거나 해도 상관 없음)
// property의 줄임말임
// 자식 컴포넌트는 매개변수로 받아서 가져올 수 있음
// 여러개를 전달해야 한다면 객체로 만들어서 전달해도됨 (객체를 펼쳐서 전달하는 ... (spread)연산자 사용)
