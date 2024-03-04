import React from "react";


const Output = ({years=1}) => {

  return (
    <p>
      It will take you <b>{years} years</b> to have $1 million.
    </p>
  )
}

export default Output;