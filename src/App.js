import React from "react";
import { useState } from "react";
import Input from "./Input";
import CheckBox from "./CheckBox";
import Output from "./Output";

const App = () => {
  return (
    <>
      <form>
        <p>
          <Input
            type="text" 
            name="start"
            labelText="Starting principal"
          />
        </p>
        
        <p>
          <Input
            type="number" 
            name="rate"
            labelText="Interest rate"
            step="0.10"
          />
        </p>
        
        <p>
          <Input
            type="number" 
            name="term"
            labelText="Number of years"
          />
        </p>
        
        <p>
          <CheckBox
            name="monthly"
            labelText="Compound monthly?"
          />
        </p>
      </form>
    
      <Output years={2} />
    </>
  )
}

export default App;