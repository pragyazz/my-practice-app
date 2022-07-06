import ReactDOM from "react-dom";
import React from "react";

import PresentationalComponent from "d:/my-practice-app/src/Component/PresentationalComponent";
import StateComponent from "d:/my-practice-app/src/Component/StateComponent"
ReactDOM.render((
  <>
  <h1>These are two components : </h1>
  <PresentationalComponent></PresentationalComponent><hr/>
  <StateComponent>  </StateComponent><hr/>
  
    
  </>
),document.getElementById("root"));
