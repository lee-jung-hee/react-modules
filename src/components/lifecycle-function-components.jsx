import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Counter</button>
      {show && <Counter />}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // Toggle Counter 버튼으로 Counter컴포넌트가 토글될 때 출력
  useEffect(() => {
    console.log("🟢 마운트됨 (componentDidMount)");

    return () => {
      console.log("🔴 언마운트됨 (componentWillUnmount)");
    };
  }, []);

  // count State가 지워지고 업데이트 될 때 출력
  useEffect(() => {
    console.log(`Count:${count} 으로 업데이트됨 (componentDidUpdate)`);

    return () => {
      console.log(`Count:${count}가 정리됨 (cleanup before update)`);
    };
  }, [count]);

  // num State가 지워지고 업데이트 될 때 출력
  useEffect(() => {
    console.log(`Num:${num} 으로 업데이트됨 (componentDidUpdate)`);

    return () => {
      console.log(`Num:${num}가 정리됨 (cleanup before update)`);
    };
  }, [num]);

  // 최초 렌더 / 리렌더링 될 때마다 출력
  useEffect(() => {
    console.log("렌더/리렌더링됨");
  });

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Num: {num}</h2>
      <button onClick={() => setCount(count + 1)}>Count +1</button>
      <button onClick={() => setNum(num + 1)}>Num +1</button>
    </div>
  );
}

export default App;
