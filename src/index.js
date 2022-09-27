import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App이라는 컴포넌트가 최상위 부모, App에 자식으로 없는 컴포넌트들은
// 화면에 출력되지 않는다 즉, 최상위 컴포넌트를 정할 수 있음
// App이 관례

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//이 리액트 앱이 실행되면서 src/index.js가 실행되면서
// index.html에 있는 id root인 div아래로 App.js 안에 있는 앱 함수가 리턴하는 값들이 들어감
// 나중에 협업할 때 노드모듈스 없어도 괜춘 -> npm i하면 다시 노드 모듈스가 생김
