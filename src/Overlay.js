import "./App.css";
import "./script";

const Overlay = () => {
  return (
    <div className="overlay overlay-slide-left" id="overlay">
      {/* menu items  */}
      <nav>
        <ul>
          <li id="nav-1" className="slide-out-1">
            <a href="#home">Home</a>
          </li>
          <li id="nav-2" className="slide-out-2">
            <a href="#primeira">Primeira Temporada</a>
          </li>
          <li id="nav-3" className="slide-out-3">
            <a href="#segunda">Segunda Temporada</a>
          </li>
          <li id="nav-4" className="slide-out-4">
            <a href="#terceira">Terceira Temporada</a>
          </li>
          <li id="nav-5" className="slide-out-5">
            <a href="#quarta">Quarta Temporada</a>
          </li>
          <li id="nav-6" className="slide-out-6">
            <a href="#ultima">Quinta Temporada</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Overlay;
