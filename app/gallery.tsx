import { useState } from "react";
import { PersonData } from "./TS_TYPES.tsx";

export default function Gallery({
  data,
}: {
  data: PersonData[];
}): React.ReactElement {
  return (
    <div>
      {data.map((person: PersonData, index: number) => {
        return (
          <div key={index}>
            <p>{person.name}</p>
            <img src={person.image} />
            <p>{person.age}</p>
            <p>{person.description}</p>
            <p>{person.phone}</p>
          </div>
        );
      })}
    </div>
  );
}
