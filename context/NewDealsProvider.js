"use client";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import sample1 from "../assets/sample/sample1.jpg";
import sample2 from "../assets/sample/sample2.jpg";
import sample3 from "../assets/sample/sample3.jpg";
import sample4 from "../assets/sample/sample4.jpg";

export const NewDealsContext = createContext();

const NewDealsProvider = ({ children }) => {
  const deals = [
    {
      image: sample1,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: true,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },
    {
      image: sample2,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: true,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },
    {
      image: sample3,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: true,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },

    {
      image: sample4,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: true,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },
    {
      image: sample1,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: true,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },
    {
      image: sample2,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: true,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },
    {
      image: sample3,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: false,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },
    {
      image: sample4,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: false,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },
    {
      image: sample1,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: true,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },
    {
      image: sample3,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: false,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },
    {
      image: sample2,
      area: "100M",
      date: "2023-09-12",
      price: "$5750",
      status: false,
      name: "475 Spruce Drive, Pittsuurgh, PA 23592 ",
    },
  ];

  const [newdeals, setNewDeals] = useState(deals);

  const newArray = (array) => {
    setNewDeals((prevDeals) => [...prevDeals, ...array]);
  };

  return (
    <NewDealsContext.Provider value={{ newdeals, setNewDeals, newArray }}>
      {children}
    </NewDealsContext.Provider>
  );
};

export default NewDealsProvider;
