import React, { Fragment, useContext } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { AvatarContext } from "../contexts/Avatar";

export default function Search() {
  const { handleAvatar, handleName, Name } = useContext(AvatarContext);
  return (
    <Fragment>
      <InputGroup className="SearchBox">
        <FormControl
          placeholder="Create Avatar"
          value={Name}
          onChange={e => handleName(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-info" onClick={handleAvatar}>
            Create
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Fragment>
  );
}
