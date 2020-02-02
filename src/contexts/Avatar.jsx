import React, { createContext, useState } from "react";
export const AvatarContext = createContext();

export default function AvatarContextProvider(props) {
  const [AvatarList, setAvatarList] = useState([]);
  const [Name, setName] = useState("");

  function handleAvatar() {
    if (Name.trim() === "") alert("Type any name");
    else {
      setAvatarList([
        { name: Name, picture: `https://robohash.org/${Name}` },
        ...AvatarList
      ]);
      setName("");
    }
  }
  function handleName(value) {
    setName(value);
  }

  return (
    <AvatarContext.Provider
      value={{
        AvatarList,
        Name,
        handleAvatar,
        handleName
      }}
    >
      {props.children}
    </AvatarContext.Provider>
  );
}
