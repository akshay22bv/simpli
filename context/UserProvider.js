"use client";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const NewUserContext = createContext();

const UserProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(deals);

  const newUserChange = (array) => {
    setNewDeals((prevUser) => [...prevUser, ...array]);
  };

  return (
    <NewUserContext.Provider value={{ newUser, setNewUser, newUserChange }}>
      {children}
    </NewUserContext.Provider>
  );
};

export default UserProvider;
