import React, { ReactNode } from "react";
import { Meaning } from "@/types";

type meaningProps = { data: Meaning; children: ReactNode };
const Meaning = ({ data, children }: meaningProps) => {
  return (
    <section className="meaning">
      <div className="container">
        <p className="meaning__partOfSpeech">
          <span> {data.partOfSpeech}</span>
        </p>
      </div>

      <p className="meaning__heading">Meaning</p>

      {data.definitions.map((def, i) => {
        return (
          <ul className="meaning__definition-list" key={i}>
            <li className="meaning__definition">
              <p>{def.definition}</p>
            </li>
            {def.example !== undefined && (
              <li className="meaning__example">
                <p>{'"' + def.example + '"'}</p>
              </li>
            )}
          </ul>
        );
      })}
      {children}
    </section>
  );
};

export default Meaning;
