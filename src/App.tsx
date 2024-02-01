/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
function App() {
  return (
    <div
      css={css`
        font-family: "Poly", sans-serif; 
        padding: 32px;
        background-color: rgb(130, 255, 105);
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: hotpink;
        }
      `}
      className="App"
    >
      Hover to change color.
    </div>
  );
}

export default App;
