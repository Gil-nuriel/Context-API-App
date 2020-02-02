import React, { useContext } from "react";
import "./App.css";
import AvatarCard from "./components/AvatarCard";
import ThemeToggler from "./components/ThemeToggler";
import Search from "./components/Search";
import { ThemeContext } from "./contexts/Theme";
import AvatarContextProvider from "./contexts/Avatar";
import { Container, Row } from "react-bootstrap";

export default function App() {
  const { Theme, light, dark } = useContext(ThemeContext);
  const ThemeType = Theme ? light : dark;
  return (
    <div className="App" style={{ backgroundColor: ThemeType.bg }}>
      <AvatarContextProvider>
        <Container>
          <Row>
            <Search />
            <ThemeToggler />
          </Row>
          <Row>
            <AvatarCard />
          </Row>
        </Container>
      </AvatarContextProvider>
    </div>
  );
}
