import "./App.css";
import { useState } from "react";
import CoinList from "./components/CoinList/CoinList";
import NavBar from "./components/NavBar/NavBar";
import { searchContext } from "./Context/SearchContext";

function App() {
  const [search, setSearch] = useState({});
  const [allRecodrs, setRecords] = useState({});
  return (
    <searchContext.Provider
      value={{ search, setSearch, allRecodrs, setRecords }}
    >
      <div className="Cryoto">
        <h1>Crypto App</h1>
        <NavBar />

        <CoinList />
      </div>
    </searchContext.Provider>
  );
}

export default App;
