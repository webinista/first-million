import React from "react";
import {
  useState,
  useReducer
} from "react";

import Input from "./Input";
import CheckBox from "./CheckBox";
import {
  first_million_years,
  formatted_number,
  numeric_to_number,
  to_float,
  reducer,
  submitted
} from './lib.js';

const App = () => {
  const init = {
    principal: formatted_number(10000),
    rate: 4,
    years: 10,
    monthly: true
  };

  const [state, dispatch] = useReducer(reducer, init);

  const onChange = (evt) => {
    let input = evt.target.value;

    if(evt.target.type == 'checkbox') {
      input = evt.target.checked;
    }

    dispatch({ type: evt.target.name, value: input });
  }

  const recalculate = (evt) => {
    dispatch({ type: 'recalculate' });
  }

  return (
    <form onSubmit={submitted} onChange={recalculate}>
      <p>
        <Input
          type="text" 
          name="principal"
          labelText="Starting principal $"
          onChange={onChange}
          size={10}
          value={state.principal}
        />
      </p>

      <p>
        <Input
          type="number" 
          name="rate"
          step={0.001}
          labelText="Interest rate "
          size={6}
          min={0}
          value={state.rate}
          onChange={onChange}
        />%
      </p>

      <p>
        <output
          htmlFor="principal rate"
          name="years"
        >It will take you about <strong>{state.years}</strong> years to have <strong>$1 million</strong></output>.
      </p>

      <p>
        <CheckBox
          name="monthly"
          labelText="Compound monthly?"
          onChange={onChange}
          checked={ state.monthly }
        />
      </p>
      <button type="submit">Recalculate</button>
    </form>
  )
}

export default App;