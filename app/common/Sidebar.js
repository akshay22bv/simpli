"use client";

import React, { useContext, useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { FiSettings, FiUsers } from "react-icons/fi";
import { BsListCheck, BsTable } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sideBarContext } from "@/context/SidebarContext";

const Sidebar = () => {
  const pathName = usePathname();

  const { open, handleCloseSidebar } = useContext(sideBarContext);

  const routes = [
    { name: "dashboard", path: "/", icon: MdDashboard },
    { name: "deals", path: "/deals", icon: BiBriefcase },
    { name: "users", path: "/users", icon: FiUsers },
    { name: "products", path: "/products", icon: BsListCheck },
    { name: "calender", path: "/calender", icon: BsTable },
    { name: "notifications", path: "/notifications", icon: MdNotifications },
    { name: "settings", path: "/settings", icon: FiSettings },
  ];

  return (
    <>
      <nav
        className={`${
          open ? "w-full md:w-72" : "w-[70px]"
        } hidden md:block  border-r text-[#7E92A2]  bg-[#EEF6FB] p-2 duration-500 sticky top-16 h-[90vh]`}
      >
        <div className=" flex flex-col justify-center gap-5 capitalize">
          {routes.map((item, i) => {
            const Icon = item?.icon;
            return (
              <Link
                key={i}
                href={item.path}
                className="flex items-center gap-3 group "
                onClick={handleCloseSidebar}
              >
                <div
                  className={`p-3 border rounded-full ${
                    pathName === item.path
                      ? "bg-blue-600 text-white"
                      : "bg-white text-black"
                  } `}
                >
                  <Icon size={20} />
                </div>

                <h1
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`text-black duration-500  ${
                    !open && "opacity-0 translate-x-28"
                  }`}
                >
                  {item?.name}
                </h1>
              </Link>
            );
          })}
        </div>
      </nav>

      <nav
        className={`${
          open ? "left-0 md:hidden" : "-left-full"
        }   border-r z-50 text-[#7E92A2]  bg-[#EEF6FB] p-2 duration-500 w-full fixed top-16 h-[90vh]`}
      >
        <div className=" flex flex-col justify-center gap-5 capitalize">
          {routes.map((item, i) => {
            const Icon = item?.icon;
            return (
              <Link
                key={i}
                href={item.path}
                className="flex items-center gap-3 group "
                onClick={handleCloseSidebar}
              >
                <div
                  className={`p-3 border rounded-full ${
                    pathName === item.path
                      ? "text-white bg-blue-600 "
                      : "bg-white text-black"
                  } `}
                >
                  <Icon size={20} />
                </div>

                <h1
                  style={
                    {
                      // transitionDelay: `${i + 3}00ms`,
                    }
                  }
                  // className={`text-black duration-500  ${
                  //   open && "opacity-0 translate-x-28"
                  // }`}
                >
                  {item?.name}
                </h1>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
