import { lazy, Suspense, useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";

const Main = lazy(() => import("./page/Main"));
const Detail = lazy(() => import("./page/Detail"));
const Search = lazy(() => import("./page/Search"));

function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1>Animal World!</h1>
        <input
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
            navigate(`/search?animal=${event.target.value}`);
          }}
        />
        <button onClick={() => navigate(`/search?animal=${inputValue}`)}>
          Search
        </button>
      </header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </Suspense>
      <footer>all rights reserved</footer>
    </>
  );
}

export default App;
