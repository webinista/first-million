import React from "react";
import { useState } from "react";
import Input from "./Input";
import CheckBox from "./CheckBox";
import {
  first_million_years,
  formatted_number,
  numeric_to_number,
  to_float
} from './lib.js';

const App = () => {
  const [state, setState] = useState({
    principal: formatted_number(10000),
    rate: 4,
    years: 10,
    monthly: true
  });

  const principalHandler = (evt) => {
    setState((state) => {
      return {
        ...state,
        principal: formatted_number(evt.target.value)
      };
    });
  }
  
  const changeHandler = (evt) => {
    if(Object.hasOwn(evt, 'target')) {
      setState((state) => {
        return {
          ...state,
          [evt.target.name]: parseFloat(evt.target.value)
        };
      });
    }
  }
  
  const checkHandler = (evt) => {
    setState((state) => {
      return {
        ...state,
        monthly: evt.target.checked
      }
    });
  }
  
  const submitHandler = (evt) => {
    evt.preventDefault();

    const years = first_million_years(
      numeric_to_number(state.principal),
      to_float(state.rate),
      state.monthly
    );

    setState((state) => {
      return {
        ...state,
        principal: formatted_number(state.principal),
        years: parseFloat(years)
      }
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <p>
        <Input
          type="text" 
          name="principal"
          labelText="Starting principal $"
          onChange={principalHandler}
          onBlur={principalHandler}
          size={10}
          defaultValue={state.principal}
        />
      </p>
      
      <p>
        <Input
          type="number" 
          name="rate"
          step={0.001}
          labelText="Interest rate "
          size={6}
          defaultValue={state.rate}
          onChange={changeHandler}
        />%
      </p>
      
      <p>
        <Input
          type="number" 
          name="years"
          labelText="It will take you about "
          step="0.10"
          onChange={changeHandler}
          size={4}
          value={state.years}
        /> years to have <strong>$1 million</strong>.
      </p>
      
      <p>
        <CheckBox
          name="monthly"
          labelText="Compound monthly?"
          onChange={checkHandler}
          checked={ state.monthly }
        />
      </p>
      <button type="submit">Recalculate</button>
    </form>
  )
}

export default App;