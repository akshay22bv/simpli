"use client";
import { customers } from "@/data/data";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const NewUserContext = createContext();

const UserProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(customers);

  const newUserChange = (array) => {
    console.log("array: ", array);
    setNewUser((prevUser) => [...prevUser, ...array]);
  };

  console.log("newUser: ", newUser);
  return (
    <NewUserContext.Provider value={{ newUser, setNewUser, newUserChange }}>
      {children}
    </NewUserContext.Provider>
  );
};

export default UserProvider;
