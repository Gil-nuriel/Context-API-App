import React, { useContext, Fragment } from "react";
import { ThemeContext } from "../contexts/Theme";
import { AvatarContext } from "../contexts/Avatar";
import { Card, Image } from "react-bootstrap";

export default function AvatarCard() {
  const { Theme, light, dark } = useContext(ThemeContext);
  const { AvatarList } = useContext(AvatarContext);
  const ThemeType = Theme ? light : dark;
  return (
    <Fragment>
      {AvatarList.map((avatar, i) => (
        <Card
          key={i}
          className="card"
          style={{
            backgroundColor: ThemeType.color,
            color: ThemeType.text
          }}
        >
          <Card.Header>{avatar.name}</Card.Header>
          <Card.Body>
            <Image className={"Avatar"} src={avatar.picture} roundedCircle />
          </Card.Body>
        </Card>
      ))}
    </Fragment>
  );
}
