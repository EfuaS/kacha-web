import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Button from "../components/Button";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdQrCode2 } from "react-icons/md";
import axios from "axios";
import {AiFillCopy} from "react-icons/ai";

export default function VoucherGen2() {
  const voucherData = JSON.parse(localStorage.getItem("voucher"));
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [adsInfo, setAdsInfo] = useState({
    id: "",
    title: "",
    body: "",
    image: "https://dev2.kachapay.net",
  });

  const getAds = () => {
    setAdsInfo({ ...adsInfo, image: "https://dev2.kachapay.net" });

    axios
      .get("https://dev2.kachapay.net/api/ads")
      .then((res) => {
        setAdsInfo({
          ...adsInfo,
          id: res.data[0].id,
          title: res.data[0].title,
          body: res.data[0].body,
          image: adsInfo.image + res.data[0].image,
        });
      })
      .catch((errorr) => {
        // if error is unauthorized go to login
        console.log(errorr);
      });
  };

  return (
    <div>
      <div className="z-10 fixed inset-x-0 top-0 w-full menuDimensions kacha-mustard"></div>
      <Navbar />
      <Menu />

      <div className="formTop  flex flex-col items-center  ">
        <div className=" flex justify-between secSection">
          <div className=" formDimensions">
            <p className="monserat text-2xl leading-7 font-semibold text-slate-500  text-center mb-5">
              Receipt
            </p>
            <div className=" items-center flex flex-col  ">
              <div className="w-full">
                {/*content*/}
                <div className=" border-0 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-center mb-4 ">
                    <h3 className="text-xl font-semibold text-white kacha-orange p-2 rounded-3xl">
                      <BsCheckLg />
                    </h3>
                  </div>
                  <div className="relative flex flex-col items-center text-center ">
                    <div className="py-4 px-16  w-80 compSec mb-2">
                      <span className=" modalText monserat text-base leading-5 font-bold">
                        Voucher Complete
                      </span>
                      <span className="block monserat text-xl leading-6 text-black mt-1.5">
                        Br {voucherData.amount}
                        <span className="text-sm">.00</span>
                      </span>
                    </div>
                    <div className="mb-7">
                      <MdQrCode2 className="text-8xl" />
                    </div>

                    <div className="flex flex-col bggray mb-4 font-semibold monserat leading-4 text-sm text-slate-700 ">
                      <div className="flex flex-row justify-between pt-2 pb-1 px-2  ">
                        <p className="">Account number</p>
                        <p className="">{voucherData.to}</p>
                      </div>
                      <div className="flex flex-row pb-1 justify-between px-2  ">
                        <p className="">Voucher code</p>
                        <p className="flex ">{voucherData.voucher} <AiFillCopy className="orangeTxt text-lg ml-2"/> </p>
                      </div>
                    </div>
                  </div>

                  {/*footer*/}
                </div>
              </div>
              <div className="mt-6 w-full  ">
                <Link to="/">
                  <Button name="Done"></Button>
                </Link>
                <p className="monserat text-lg orangeTxt text-center font-bold leading-7 mt-3.5">
                  Download Receipt
                </p>
              </div>
            </div>
          </div>
          {/* Ads Placement */}
          <div
            // onLoad={() => getAds()}
            className="adsDimensions rounded-lg"
          >
            {/* <img src={adsInfo.image} alt={adsInfo.image}></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}
