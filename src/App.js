import Display from "./Display";
import Input from "./Input";
import Toggle from "./Toggle";
import React, { useState,useEffect } from "react";

function App() {
  const [colour, setColour] = useState('');
  const [state,changeState]=useState(true);


  return (
    <div>
      <Display colour={colour}
      state={state}
      />
      <Input colour={colour} setColour={setColour} />
      <Toggle changeState={changeState}/>
    </div>
  );
}

export default App;
