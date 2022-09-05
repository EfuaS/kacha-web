import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Button from "../components/Button";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiFillCopy } from "react-icons/ai";


export default function MerchantPayment3() {
  const redeemedVoucher = JSON.parse(localStorage.getItem("redeemed"));

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
            <p className="monserat text-2xl leading-7 font-semibold orangeTxt text-center mb-5">
              Receipt
            </p>
            <div className=" items-center flex flex-col  ">
              <div className="w-full mb-8">
                {/*content*/}
                <div className=" border-0 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex mb-9 items-center justify-center  ">
                    <h3 className="text-xl font-semibold text-white modalGreen p-1.5 rounded-3xl">
                      <BsCheckLg />
                    </h3>
                  </div>
                  <div className="relative flex flex-col items-center text-center ">
                    <div className="py-4  compSec mb-2">
                      <span className=" modalText monserat text-base leading-5 font-bold">
                        Code Redeem complete
                      </span>
                      <span className="block monserat text-xl font-semibold leading-6 text-black mt-1.5">
                        Br {redeemedVoucher.amount}
                        <span className="text-sm">.00</span>
                      </span>
                    </div>
                    <div className="flex flex-col bggray mb-4 font-semibold monserat py-4 leading-4 text-sm text-slate-700 ">
                      <div className="flex flex-row justify-between pt-2 pb-1 px-2  ">
                        <p className="">Sender phone number</p>
                        <p className="">{redeemedVoucher.phone}</p>
                      </div>
                      <div className="flex flex-row pb-1 justify-between px-2  ">
                        <p className="">Voucher code</p>
                        <p className="flex ">
                          {redeemedVoucher.voucher}
                          <AiFillCopy className="orangeTxt text-lg ml-2" />
                        </p>
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
