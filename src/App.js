import React from "react";
/* --- File containing our Context Data --- */
import ContextComponent from "./context";

import Home from "./components/Home";
function App() {
  return (
    <ContextComponent>
      <Home />
    </ContextComponent>
  );
}

export default App;
