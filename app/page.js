"use client";
import { sideBarContext } from "@/context/SidebarContext";
import {
  customers,
  installationdata,
  recent_details,
  tasks,
} from "@/data/data";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { BsDot } from "react-icons/bs";
import { BiSolidInfoCircle } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import sample1 from "../assets/sample/sample1.jpg";
import { NewUserContext } from "@/context/UserProvider";

const Dashboard = () => {
  const [slice, setSlice] = useState(2);

  const { newUser } = useContext(NewUserContext);

  const loadmore = () => {
    if (installationdata.length > slice) {
      setSlice(slice + 4);
    }
  };

  return (
    <div className="p-5 lg:flex items-start gap-3 space-y-2 lg:space-y-0">
      {/* recent   */}

      <div className="w-full lg:w-7/12 flex flex-col sm:flex-row gap-5 ">
        <div className="max-w-lg w-full sm:w-4/12  flex flex-col gap-2 rounded  text-sm font-medium text-white">
          <div className=" bg-[#514EF3] p-4 flex flex-col gap-5 rounded-md">
            <h1 className="flex items-center gap-10">
              <span>Next Appointement</span>
              <span>
                <BsDot size={30} />
              </span>
            </h1>
            <div className=" flex items-center  gap-5">
              <Image
                className="h-8 w-8  object-cover rounded-full"
                src={recent_details[0].image}
                alt=""
              ></Image>
              <div>
                <h1>319 Haul Road</h1>
                <p className="font-thin">Glenrock, WY 12345 </p>
              </div>
            </div>

            <h1 className="flex flex-col gap-1">
              <p className="font-thin">Appointement Date</p>

              <p>Nov 18 2021, 17:00</p>
            </h1>

            <div className="flex  gap-10">
              <div>
                <p className="font-thin">Room Area</p>
                <p>100 M</p>
              </div>
              <div>
                <p className="font-thin">People</p>
                <p>10</p>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <p className="font-thin">Price</p>
                <p>$5750</p>
              </div>
              <button className="bg-white text-xs rounded-full w-24 py-2 text-[#514EF3]">
                See Details
              </button>
            </div>
          </div>
          <div className=" text flex flex-col gap-5 rounded-md text-black">
            <div className="border px-5 py-10 flex items-center justify-evenly rounded-md">
              <div className="flex flex-col gap-5">
                <h1 className="text-slate-500 text-md">Customers</h1>
                <h1 className="text-[40px]">78</h1>
              </div>
              <div className="w-16 h-16 rounded-full  bg-gradient-to-b from-green-400 to-white flex items-center justify-center">
                <FaUserFriends className="text-green-500" size={20} />
              </div>
            </div>
            <div className="border px-5 py-10  flex items-center justify-evenly rounded-md">
              <div className="flex flex-col gap-5">
                <h1 className="text-slate-500 text-md">Deals</h1>
                <h1 className="text-[40px]">136</h1>
              </div>
              <div className="w-16 h-16 rounded-full  bg-gradient-to-b from-red-400 to-white flex items-center justify-center">
                <BsFillHandbagFill className="text-red-600" size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-8/12  flex flex-col gap-2 rounded  text-sm font-medium text-white">
          <div className=" bg-white text-black border p-4 flex flex-col gap-6 rounded-md">
            <h1 className="flex justify-between">
              <p className="font-semibold text-md">Recent Details</p>{" "}
              <p className="text-[#514EF3] text-xs">View All</p>
            </h1>

            {recent_details.map((item, i) => (
              <div key={i} className="flex items-center">
                <Image
                  className="h-8 w-8  object-cover rounded-full"
                  src={item.image}
                  alt=""
                ></Image>

                <div className="w-full px-4">
                  <div className="flex  justify-between">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                  <div className="flex  justify-between text-slate-400 font-normal">
                    <p>{item.location}</p>
                    <p>{item.date}</p>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className=" bg-white text-black border p-4 flex flex-col gap-5 rounded-md">
            <div className="flex items-center">
              <Image
                className="h-8 w-8  object-cover rounded-full"
                src={recent_details[0].image}
                alt=""
              ></Image>

              <div className="w-full px-4">
                <div className="flex  justify-between">
                  <p>{recent_details[0].name}</p>
                </div>
                <div className="flex  justify-between text-slate-400 font-normal">
                  <p>{recent_details[0].location}</p>
                </div>
              </div>
              <div className="w-full px-4">
                <button className="text-blue-600 text-xs rounded-full w-24 py-2 bg-slate-300">
                  IN PROGRESS
                </button>
              </div>

              <div className="w-full px-4 text-[#514EF3]">
                <BsArrowRight size={20} />
              </div>
            </div>
            {installationdata.slice(0, slice).map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="h-8 w-8  border-[10px] border-[#514EF3] rounded-full"></div>
                <div className="w-full px-4">
                  <div className="flex  justify-between">
                    <p>{item.date}</p>
                  </div>
                  <div className="flex  justify-between text-slate-400 font-normal">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
            <button onClick={loadmore}>
              <h1 className="text-center font-semibold text-[#514EF3] cursor-pointer">
                Load More
              </h1>
            </button>
          </div>
        </div>
      </div>

      {/* customer details  */}
      <div className="w-full lg:w-5/12 rounded-md bg-[#EEF6FB] p-2">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Customers </h1>
            <p className="text-[#514EF3] text-xs">View All</p>
          </div>

          {newUser.map((item, i) => {
            return (
              <div key={i} className="flex items-center py-2">
                <Image
                  className="h-8 w-8  object-cover rounded-full"
                  src={item.image ? item.image : sample1}
                  alt=""
                ></Image>

                <div className="w-full px-4 flex justify-between items-center">
                  <div>
                    <div className="flex  justify-between">
                      <p>{item.name}</p>
                    </div>
                    <div className="flex  justify-between text-slate-400 font-normal">
                      <p>{item.email}</p>
                    </div>
                  </div>
                  <CiEdit />
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-2 border rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold">Customers </h1>
            <p className="text-[#514EF3] text-xs">View All</p>
          </div>

          <div className="flex flex-col gap-5 py-4">
            {tasks.map((item, i) => {
              return (
                <div key={i}>
                  <div className="flex items-center justify-evenly text-sm md:text-lg">
                    <h1
                      className={` ${
                        item.status ? "text-red-400" : "text-slate-400"
                      }`}
                    >
                      {item.date}
                    </h1>
                    <p className="h-5 w-5 items-center">
                      {item.status && (
                        <BiSolidInfoCircle className="text-red-400" />
                      )}
                    </p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
