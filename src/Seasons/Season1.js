import React, { useState, useEffect } from "react";
import "./Season.css";
import "../App.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./dataS1";

const Season1 = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 12000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section id="primeira">
      <h1>Primeira Temporada</h1>

      <article className="season">
        <section className="section-handler">
          <div className="section-center">
            {people.map((person, personIndex) => {
              const { id, name, image, quote } = person;

              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "lastIndex";
              }
              return (
                <article className={position} key={id}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="text">{quote}</p>
                </article>
              );
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
              <FiChevronRight />
            </button>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Season1;
