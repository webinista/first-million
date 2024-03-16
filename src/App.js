import React from "react";
import {
  useReducer,
  useState
} from "react";

import Input from "./Input";
import CheckBox from "./CheckBox";
import {
  first_million_years,
  formatted_number,
  numeric_to_number,
  to_float,
  reducer,
  initial_state as init
} from './lib.js';

const App = () => {

  const [state, dispatch] = useReducer(reducer, init);

  const yrsState = useState(init.years);

  const onChange = (evt) => {
    let input = evt.target.value;

    if(evt.target.type == 'checkbox') {
      input = !evt.target.checked;
    }

    dispatch({ type: evt.target.name, value: input });
  }

  const recalculate = (evt) => {
    if(evt.type == 'submit') {
      evt.preventDefault();
    }

    const input = first_million_years(
      numeric_to_number(state.principal),
      to_float(state.rate),
      state.monthly
    );

    dispatch({ type: 'recalculate', value: input });
  }

  return (
    <form onSubmit={recalculate} onChange={recalculate}>
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
        >It will take you <strong>{state.years}</strong> years to have <strong>$1 million</strong></output>.
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