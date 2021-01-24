import "./App.css";
import "./script";
import Overlay from "./Overlay";
import MenuBar from "./MenuBar";
import Sections from "./Sections";

function App() {
  return (
    <div className="App">
      <Overlay />
      <MenuBar />
      <Sections />
    </div>
  );
}

export default App;
