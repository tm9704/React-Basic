const OddEvenResult = ({ count }) => {
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>;
};

export default OddEvenResult;

// React의 Component는 부모가 내려주는 Props가 변경되면
// 다시 랜더링을 함

// 즉, 리액트의 컴포넌트는 본인이 관리하고 본인이 가진 스테이트가 바뀔때 마다 리랜더
// 나에게 내려지는Props가 바뀔 때 마다 리랜더
// 부모가 리랜더 될 때마다 리랜더

// Props로는 뭐든지 전달이 가능하기 때문에 컴포넌트 자체도 전달이 가능
