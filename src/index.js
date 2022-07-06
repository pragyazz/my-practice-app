import ReactDOM from "react-dom";
import React from "react";

import PresentationalComponent from "./Component/PresentationalComponent";
import StateComponent from "./Component/StateComponent"
import TimerComponent from "./Component/TimerComponent"
import FormDataComponent from "./Component/FormDataComponent"
import EventHandlingComponent from "./Component/EventHandlingComponent"
ReactDOM.render((
  <>
    <h1>These are two components : </h1>
    <PresentationalComponent></PresentationalComponent><hr/>
    <StateComponent>  </StateComponent><hr/>
    <TimerComponent></TimerComponent><hr/>
    <FormDataComponent></FormDataComponent><hr/>
    <EventHandlingComponent>Event Handling</EventHandlingComponent>< hr/>


  </>
),document.getElementById("root"));
