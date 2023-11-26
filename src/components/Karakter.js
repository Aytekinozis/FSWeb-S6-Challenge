// Karakter bileşeniniz buraya gelecek

import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Karakter.css";
const Karakter = (props) => {
  const { data, charName } = props;
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="characters">
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">{charName}</AccordionHeader>
          <AccordionBody accordionId="1">
            <p>Gender: {data.gender}</p>
            <p>Height: {data.height}</p>
            <p>Mass: {data.mass}</p>
            <p>Birth Year: {data.birth_year}</p>
            <p>Eye Color: {data.eye_color}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Skin Color: {data.skin_color}</p>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default Karakter;
