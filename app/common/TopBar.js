"use client";
import Image from "next/image";
import profile from "../../assets/profile.png";
import React, { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { sideBarContext } from "@/context/SidebarContext";
import { usePathname } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { NewDealsContext } from "@/context/NewDealsProvider";
import { NewUserContext } from "@/context/UserProvider";

const TopBar = () => {
  const pathName = usePathname();
  const { open, handleOpenSidebar } = useContext(sideBarContext);
  const { newdeals, setNewDeals, newArray } = useContext(NewDealsContext);
  const [dilogOpen, setDailogOpen] = useState(false);
  const { newUser, newUserChange } = useContext(NewUserContext);

  const [form, setForm] = useState({
    name: "",
    price: "",
    date: "",
    area: "",
  });

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
  });

  const handleChangeDeals = (e) => {
    const { name, value } = e.target;

    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setDailogOpen(!dilogOpen);
  };

  const handleSubmitDeals = (e) => {
    e.preventDefault();

    let array = [];

    array.push(form);

    newArray(array);

    setDailogOpen(!dilogOpen);
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();

    let array = [];

    array.push(userForm);

    newUserChange(array);

    setDailogOpen(!dilogOpen);
  };

  const handleChangeUser = (e) => {
    const { name, value } = e.target;

    setUserForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log({ userForm });

  return (
    <div className="fixed w-full z-50">
      <Dialog onClose={handleClose} open={dilogOpen}>
        <DialogTitle className="text-center bg">
          {pathName === "/deals" ? "Add New Deals" : "Add User"}
        </DialogTitle>

        <DialogContent>
          {pathName === "/deals" ? (
            <form
              onSubmit={handleSubmitDeals}
              className="px-4 flex flex-col gap-2 "
            >
              <label>Name</label>
              <input
                value={form.name}
                onChange={handleChangeDeals}
                name="name"
                placeholder="Enter Name"
                type="text"
                className="p-2 border-b"
              ></input>
              <label>Price</label>
              <input
                value={form.price}
                onChange={handleChangeDeals}
                name="price"
                placeholder="Enter Price"
                type="number"
                inputMode="numeric"
                className="p-2 border-b"
              ></input>
              <label>Date</label>
              <input
                value={form.date}
                onChange={handleChangeDeals}
                name="date"
                type="date"
                placeholder="MM/DD/YYYY"
                className="p-2 border-b w-full"
              ></input>
              <label>Area</label>
              <input
                value={form.area}
                onChange={handleChangeDeals}
                name="area"
                placeholder="Enter Area"
                type="number"
                inputMode="numeric"
                className="p-2 border-b"
              ></input>
              {/* <label>Image URL</label>
            <input
              name="image"
              onChange={handleChangeDeals}
              placeholder="Enter Area"
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              inputMode="numeric"
              className="p-2 border-b"
            ></input> */}

              <button className="active:scale-95 rounded-md justify-center py-2 flex items-center bg-[#514EF3] text-white gap-2 bg-w">
                Save
              </button>
            </form>
          ) : (
            <form
              onSubmit={handleSubmitUser}
              className="px-4 flex flex-col gap-2 "
            >
              <label>Name</label>
              <input
                value={userForm.name}
                onChange={handleChangeUser}
                name="name"
                placeholder="Enter Name"
                type="text"
                className="p-2 border-b"
              ></input>
              <label>Email</label>
              <input
                value={userForm.email}
                onChange={handleChangeUser}
                name="email"
                placeholder="Example@gmail.com"
                type="email"
                className="p-2 border-b"
              ></input>

              <button className="active:scale-95 rounded-md justify-center py-2 flex items-center bg-[#514EF3] text-white gap-2 bg-w">
                Save
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
      <div
        className={`flex h-16 bg-[#EEF6FB]   items-center justify-between px-3 border-b`}
      >
        <div className="flex items-center gap-2">
          <div className="  flex justify-start cursor-pointer ">
            <div
              className="p-[7px] border rounded-md bg-[#092C4C] text-white"
              onClick={handleOpenSidebar}
            >
              <HiMenuAlt3 size={20} />
            </div>
          </div>
          <h1 className="text-sm md:text-lg font-semibold px-1">
            {pathName === "/"
              ? "Dashboard"
              : pathName === "/deals"
              ? "Deals"
              : "No Page"}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleClose}
            className="p-1 md:px-2 md:py-1 text-xs md:text-lg active:scale-90 rounded-full flex items-center bg-[#514EF3] text-white gap-2 bg-w"
          >
            <p className="text-sm">
              {" "}
              {pathName === "/"
                ? "Add New"
                : pathName === "/deals"
                ? "Add New Deals"
                : "No Page"}
            </p>{" "}
            <AiOutlinePlus />
          </button>

          <div className="p-2 md:p-3 bg-white border rounded-full cursor-pointer">
            <BiSearch className="" />
          </div>

          <Image
            src={profile}
            priority={false}
            quality={75}
            alt=""
            loading="lazy"
            className="overflow-hidden w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
