import "./App.css";
import "./script";
import Seasons from "./Seasons";

const Sections = () => {
  return (
    <div>
      <section id="home">
        <ul className="slide" id="sliding">
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
        <h2>the Wire Brasil</h2>
      </section>
      <section id="primeira">
        <h1>Primeira Temporada</h1>
        <div className="sectioncontainer">
          <article className="season">
            <Seasons />
          </article>
        </div>
      </section>
      <section id="segunda">
        <h1>Segunda Temporada</h1>
        <div className="sectioncontainer">
          <article className="season">
            <Seasons />
          </article>
        </div>
      </section>
      <section id="terceira">
        <h1>Terceira Temporada</h1>
      </section>
      <section id="quarta">
        <h1>Quarta Temporada</h1>
      </section>
      <section id="ultima">
        <h1>Quinta Temporada</h1>
      </section>
    </div>
  );
};

export default Sections;
