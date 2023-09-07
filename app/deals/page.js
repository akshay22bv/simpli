"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { BsImageAlt } from "react-icons/bs";
import { NewDealsContext } from "@/context/NewDealsProvider";
import sample1 from "../../assets/sample/sample1.jpg";

const Deals = () => {
  const [slice, setSlice] = useState(7);

  const { newdeals } = useContext(NewDealsContext);

  const loadmore = () => {
    if (newdeals.length > slice) {
      setSlice(slice + 4);
    }
  };

  return (
    <div className="p-2 bg-[#EEF6FB]">
      <div className="py-2">
        <h1 className="font-semibold">Tota: 136 Deals</h1>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead className="border-b  p-10 text-slate-400">
            <tr>
              <th className="px-2 py-4 text-start">
                <BsImageAlt />
              </th>

              <th className="text-start">Name</th>
              <th className="text-start">Area</th>
              <th className="text-start">Appointment Date</th>
              <th className="text-start">Price</th>
              <th className="text-start">Status</th>
              <th className="text-start">Edit</th>
            </tr>
          </thead>
          <tbody>
            {newdeals.slice(0, slice).map((item, i) => (
              <tr key={i} className="p-10 border-b">
                <td className="px-2 py-4 min-w-[50px]">
                  <Image
                    className="h-8 w-8 object-cover rounded-full duration-300"
                    src={item.image ? item.image : sample1}
                    alt=""
                  />
                </td>
                <td className="min-w-[300px]">{item.name}</td>
                <td className="min-w-[100px]">
                  {item.area}
                  <sup>2</sup>
                </td>
                <td className="min-w-[200px]">{item.date}</td>
                <td className="min-w-[100px]">{item.price}</td>
                <td className="min-w-[100px]">
                  <button className="text-blue-600 text-xs rounded-full w-24 py-2 bg-slate-300">
                    {item.status ? "IN PROGRESS" : "CLOSED"}
                  </button>
                </td>
                <td className="min-w-[100px] pl-1 text-center">
                  <CiEdit className="text-slate-400" size={25} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="py-2 items-center flex justify-center">
        {newdeals.length > slice && (
          <button
            onClick={loadmore}
            className="text-xs rounded-full w-24 py-2 bg-white text-slate-500"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Deals;
