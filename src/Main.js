import React from "react";
import ThemeContextProvider from "./contexts/Theme";
import App from "./App";
function Main() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
}

export default Main;
