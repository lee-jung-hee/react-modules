import React, { useEffect, useState } from "react";

function App() {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Fetch data from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:3000/data")
      // Parse the response as JSON
      .then((res) => res.json())
      // Update the state with the fetched data
      .then((res) => setData(res))
      // Log any errors to the console
      .catch((error) => console.log(error));
  // The empty dependency array ensures this effect runs only once on mount
  }, []);

  return (
    <div>
      {/* Map over the data array and render each item */}
      {data.map((item) => (
        <div key={item.id}>{item.content}</div>
      ))}
    </div>
  );
}

export default App;
