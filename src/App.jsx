import TopHeader from "./components/TopHeader.jsx";
import Content from "./components/Content.jsx";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState();
  const [categorySelected, setCategorySelected] = useState();
  return (
    <>
      <TopHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />
      <Content searchTerm={searchTerm} categorySelected={categorySelected} />
    </>
  );
}

export default App;
