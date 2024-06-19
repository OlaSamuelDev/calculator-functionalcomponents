import React, { useState } from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div className="component-app">
      <Display value={state.next || state.total || "0"} />
      <ButtonPanel
        clickHandler={buttonName =>
          setState({ ...state, ...calculate(state, buttonName) })
        }
      />
    </div>
  );
};

export default App;
