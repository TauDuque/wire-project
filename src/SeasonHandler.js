import React, { useState, useEffect } from "react";
import data from "./Seasons/dataS1";

const Seasonhandler = ({ index, lastIndex, nextIndex, setIndex }) => {
  const [people, setPeople] = useState(data);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
};

export default Seasonhandler;
