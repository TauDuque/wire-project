import "./App.css";
import Season1 from "./Seasons/Season1";
import Season2 from "./Seasons/Season2";
import Season3 from "./Seasons/Season3";
import Season4 from "./Seasons/Season4";
import Season5 from "./Seasons/Season5";

const Sections = () => {
  return (
    <div>
      <section id="primeira">
        <h1>Primeira Temporada</h1>
        <div className="sectioncontainer">
          <article className="season">
            <Season1 />
          </article>
        </div>
      </section>
      <section id="segunda">
        <h1>Segunda Temporada</h1>
        <div className="sectioncontainer">
          <article className="season">
            <Season2 />
          </article>
        </div>
      </section>
      <section id="terceira">
        <h1>Terceira Temporada</h1>
        <div className="sectioncontainer">
          <article className="season">
            <Season3 />
          </article>
        </div>
      </section>
      <section id="quarta">
        <h1>Quarta Temporada</h1>
        <div className="sectioncontainer">
          <article className="season">
            <Season4 />
          </article>
        </div>
      </section>
      <section id="ultima">
        <h1>Quinta Temporada</h1>
        <div className="sectioncontainer">
          <article className="season">
            <Season5 />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Sections;
