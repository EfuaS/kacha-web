import React from "react";
import { RiFileList3Line } from "react-icons/ri";
import { VscGlobe } from "react-icons/vsc";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { TbSend } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { NavLink } from "react-router-dom";


export default function Menu() {
  return (
    <div className=" w-full flex flex-col items-center  ">
      <p className="monserat h-fit text-2xl text-black font-semibold servStyle fixed z-20 top-24 left-96 ">
        Services
      </p>

      <div className="menuStyle z-20 fixed top-40 ">
        <div className="w-auto space-x-0 lg:space-x-10 text-center bg-white flex flex-wrap flex-row shadow-md items-center rounded-lg py-8 px-4  ">
          <NavLink to="/SendMoney1" >
            <div className="">
              <div className=" w-fit  mb-7 ml-4 p-4 rounded-lg fade-orange  ">
                <TbSend className="orangeTxt text-2xl hover:text-white" />
              </div>
              <span className=" text-slate-600 hover:text-orange-500 DMSans  leading-5">
                Send money
              </span>
            </div>
          </NavLink>
          <NavLink to="/Withdraw1">
            <div>
              <div className="   mb-7 ml-4 p-3.5 rounded-lg fade-orange " >
                <GiTakeMyMoney className="orangeTxt text-3xl " />
              </div>
              <span className="text-slate-600 DMSans hover:text-orange-500 leading-5">Withdraw</span>
            </div>
          </NavLink>
          <NavLink to="/Voucher1">
            <div>
              <div className="   mb-7 ml-4 p-4 rounded-lg fade-orange " >
                <RiFileList3Line className="orangeTxt text-2xl" />
              </div>
              <span className="text-slate-600 DMSans hover:text-orange-500 leading-5">Voucher</span>
            </div>
          </NavLink>
          <NavLink to="/Airtime1">
            <div>
              <div className="   mb-7 ml-4 p-4 rounded-lg fade-orange " >
                <MdOutlinePhonelinkRing className="orangeTxt text-2xl" />
              </div>
              <span className="text-slate-600 DMSans hover:text-orange-500 leading-5">Airtime</span>
            </div>
          </NavLink>
          <NavLink to="/Payment1">
            <div>
              <div className="   mb-7 ml-4 p-4 rounded-lg fade-orange " >
                <RiSuitcaseLine className="orangeTxt text-2xl" />
              </div>
              <span className="text-slate-600 DMSans hover:text-orange-500 leading-5">Payments</span>
            </div>
          </NavLink>
          <NavLink to="/RequestMoney">
            <div>
              <div className="   mb-7 ml-4 p-4 rounded-lg fade-orange " >
                <HiOutlineArrowsExpand className="orangeTxt text-2xl" />
              </div>
              <span className="text-slate-600 DMSans hover:text-orange-500 leading-5">Request</span>
            </div>
          </NavLink>
          <div>
            <div className="   mb-7 ml-4 p-4 rounded-lg fade-orange " >
              <FaHandHoldingUsd className="orangeTxt text-2xl" />
            </div>
            <span className="text-slate-600 DMSans hover:text-orange-500 leading-5">Loans</span>
          </div>
          <div>
            <div className=" w-fit  mb-7 ml-4 p-4 rounded-lg fade-orange " >
              <VscGlobe className="orangeTxt text-2xl" />
            </div>
            <span className="text-slate-600 DMSans hover:text-orange-500 leading-5">Remittance</span>
          </div>
        </div>
      </div>
    </div>
  );
}
