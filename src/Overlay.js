import "./App.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useGLobalContext } from "./context";

const Overlay = () => {
  const [overlay, setOverlay] = useState("slide-out-");
  const { is_overlay_open, closeOverlay } = useGLobalContext();

  const handleOverlay = () => {
    if (is_overlay_open) {
      setOverlay("slide-in-");
    } else {
      setOverlay("slide-out-");
    }
  };

  useEffect(() => {
    handleOverlay();
  }, [is_overlay_open]);

  return (
    <div
      className={`${
        is_overlay_open
          ? "overlay overlay-slide-right"
          : "overlay overlay-slide-left"
      }`}
      id="overlay"
    >
      {/* menu items  */}
      <nav>
        <button className="close-bar">
          <AiOutlineClose style={{ fontSize: "35px" }} onClick={closeOverlay} />
        </button>
        <ul>
          <Link to="/" onClick={closeOverlay}>
            <li
              id="nav-1"
              className={`${overlay}1`}
              style={{ backgroundColor: "var(--navColor1)" }}
            >
              <h3>Home</h3>
            </li>
          </Link>
          <Link to="season1" onClick={closeOverlay}>
            <li
              id="nav-2"
              className={`${overlay}2`}
              style={{ backgroundColor: "var(--navColor2)" }}
            >
              <h3>Primeira Temporada</h3>
            </li>
          </Link>
          <Link to="season2" onClick={closeOverlay}>
            <li
              id="nav-3"
              className={`${overlay}3`}
              style={{ backgroundColor: "var(--navColor3)" }}
            >
              <h3>Segunda Temporada</h3>
            </li>
          </Link>
          <Link to="season3" onClick={closeOverlay}>
            <li
              id="nav-4"
              className={`${overlay}4`}
              style={{ backgroundColor: "var(--navColor4)" }}
            >
              <h3>Terceira Temporada</h3>
            </li>
          </Link>
          <Link to="season4" onClick={closeOverlay}>
            <li
              id="nav-5"
              className={`${overlay}5`}
              style={{ backgroundColor: "var(--navColor5)" }}
            >
              <h3>Quarta Temporada</h3>
            </li>
          </Link>
          <Link to="season5" onClick={closeOverlay}>
            <li
              id="nav-6"
              className={`${overlay}6`}
              style={{ backgroundColor: "var(--navColor1)" }}
            >
              <h3>Quinta Temporada</h3>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Overlay;
