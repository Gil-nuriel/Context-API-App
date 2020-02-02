import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  const [Theme, setTheme] = useState(false);
  const [light] = useState({ text: `#000`, color: `#ddd`, bg: `#fff` });
  const [dark] = useState({ text: `#fff`, color: `#333`, bg: `#000` });

  function toggleTheme() {
    setTheme(!Theme);
  }

  return (
    <ThemeContext.Provider value={{ Theme, light, dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
