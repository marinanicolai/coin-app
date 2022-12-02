import "./App.css";
import CoinList from "./components/CoinList/CoinList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="Cryoto">
      <h1>Crypto App</h1>
      <NavBar />

      <CoinList />
    </div>
  );
}

export default App;
