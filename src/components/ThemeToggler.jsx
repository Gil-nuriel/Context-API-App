import React, { Fragment, useContext } from "react";
import { ThemeContext } from "../contexts/Theme";
import Switch from "react-switch";

export default function ThemeToggler() {
  const { Theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Fragment>
      <Switch
        className="ToggleButton"
        onChange={toggleTheme}
        checked={Theme}
        offColor="#333"
        onColor="#333"
        uncheckedIcon={false}
        checkedIcon={false}
      />
    </Fragment>
  );
}
