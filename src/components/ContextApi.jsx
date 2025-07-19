// implement basic Counter using React Context API

// main
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterProvider } from "./context/counterContext.jsx";

createRoot(document.getElementById("root")).render(
  <CounterProvider>
    <App />
  </CounterProvider>
);

// App
import "./App.css";
import { useCounter } from "./context/counterContext";

function App() {
  const [counter, setCounter] = useCounter();

  return (
    <>
      <div>counter : {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
    </>
  );
}

export default App;

// context/counterContext
import { createContext, useContext, useState } from "react";

const counterContext = createContext();

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);
  return (
    <counterContext.Provider value={[counter, setCounter]}>
      {children}
    </counterContext.Provider>
  );
}

export function useCounter() {
  return useContext(counterContext);
}
