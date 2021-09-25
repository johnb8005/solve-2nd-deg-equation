import React from "react";
import { title, github } from "./config";

import Input from "@nexys/react-bootstrap/dist/form/input/number";
import * as S from "./lib/solve";

interface Input2ndDeg {
  a: number;
  b: number;
  c: number;
}

const Solution = ({ solution }: { solution: [number, number] }) => {
  return (
    <code>
      x1={solution[0]}, x2 ={solution[1]}
    </code>
  );
};

const isNotPartial2ndDeg = (s: Partial<Input2ndDeg>): s is Input2ndDeg =>
  typeof s.a === "number" && typeof s.b === "number" && typeof s.c === "number";

export default () => {
  const [state, setState] = React.useState<Partial<Input2ndDeg>>({});
  const [solution, setSolution] = React.useState<
    [number, number] | undefined
  >();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (isNotPartial2ndDeg(state)) {
      try {
        const [x1, x2] = S.solve2ndDegEquation(state.a, state.b, state.c);
        setSolution([x1, x2]);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <>
      <h1>{title}</h1>

      {solution && <Solution solution={solution} />}

      <form onSubmit={handleSubmit}>
        <Input value={state.a} onChange={(a) => setState({ ...state, a })} />
        <Input value={state.b} onChange={(b) => setState({ ...state, b })} />
        <Input value={state.c} onChange={(c) => setState({ ...state, c })} />
        <button className={"btn btn-primary"} type="submit">
          Submit
        </button>
      </form>

      <p>
        <a href={github.url}>
          <i className="fa fa-code"></i> Source
        </a>
        &nbsp;available under MIT license. Contributions are welcome.
      </p>
    </>
  );
};
