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

  // Log when the Counter component is toggled by the 'Toggle Counter' button
  useEffect(() => {
    console.log("🟢 Mounted (componentDidMount)");

    return () => {
      console.log("🔴 Unmounted (componentWillUnmount)");
    };
  }, []);

  // Log when the count state is cleared and updated
  useEffect(() => {
    console.log(`Count updated to: ${count} (componentDidUpdate)`);

    return () => {
      console.log(
        `Cleaned up previous count: ${count} (cleanup before update)`
      );
    };
  }, [count]);

  // Log when the num state is cleared and updated
  useEffect(() => {
    console.log(`Num updated to: ${num} 으로 업데이트됨 (componentDidUpdate)`);

    return () => {
      console.log(`Cleaned up previous num: ${num} (cleanup before update)`);
    };
  }, [num]);

  // Log on initial render and every re-render
  useEffect(() => {
    console.log("Rendered/Re-rendered");
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
