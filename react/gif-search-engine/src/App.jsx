import { useState } from "react";
import { InputSearch } from "./components/InputSearch";

function App() {
  const [categories, setCategories] = useState(["Dragón Ball Z"]);

  return (
    <>
      <h1>Search Gifs</h1>

      <InputSearch />

      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ol>
    </>
  );
}

export default App;
