import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";

export default function Airtime3() {
  const userData = JSON.parse(localStorage.getItem("validAirtimeUser"));

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
            <p className="monserat text-2xl leading-7 font-semibold orangeTxt  text-center mb-5">
              Receipt
            </p>
            <div className=" items-center flex flex-col formDimensions ">
              <div className="w-full">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col  modalDimensions outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-center justify-center mb-4 ">
                    <h3 className="text-3xl mt-4 font-semibold text-white kacha-orange p-2 rounded-3xl">
                      <BsCheckLg />
                    </h3>
                  </div>
                  <div className="relative p-6 flex flex-col items-center text-center ">
                    <div className="py-6 px-16 inputCol w-80">
                      <span className="block modalText heading text-xl leading-5 font-bold">
                        Payment Complete
                      </span>
                      <span className="block heading text-xl leading-6 text-black mt-2.5">
                        Br {userData.amount}
                        <span className="text-sm">.00</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center heading text-sm text-slate-700 text-center">
                    <div className="flex flex-row pt-4 pb-3 inputCol w-80 ">
                      <p className="pl-6">Account number</p>
                      <p className="ml-20">{"+" + userData.phone}</p>
                    </div>
                  </div>

                  <div className="flex flex-col secText text-base leading-5 items-center pb-4">
                    <p className="text-slate-700 mt-4 mb-2">
                      Add account to quick access
                    </p>
                    {/* toggle */}
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                  </div>

                  {/*footer*/}
                </div>
              </div>
              <div className="mt-6 w-full  ">
                <Link to="/">
                  <Button name="Done"></Button>
                </Link>
                <p className="monserat text-lg orangeTxt text-center font-bold leading-7 mt-7">
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
