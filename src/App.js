import "./App.css";
import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
    </div>
  );
}

export default App;
