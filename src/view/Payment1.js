import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import axios from "axios";


export default function Payment1() {
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
              Payment
            </p>
            <form className="formDimensions mt-10">
              <div className=" flex flex-col mb-4">
                <label className="text-base text-center leading-7 mb-2 sourceSans text-slate-600 font-normal ">
                  What Payment do you want to make?
                </label>
                <div>
                  <Link to="/BillPayment1">
                    <div className=" flex flex-row justify-between hover:bg-orange-100 rounded-lg radioCol w-full p-3.5 mb-2">
                      <label className="orangeTxt sourceSans leading-5">
                        Bill
                      </label>
                      <AiFillCheckCircle className="hidden text-xl text-lime-400" />
                    </div>
                  </Link>

                  <Link to="/MerchantPayment1">
                    <div className=" flex flex-row justify-between hover:bg-orange-100 rounded-lg radioCol w-full p-3.5">
                      <label className="orangeTxt sourceSans leading-5">
                        Merchant
                      </label>
                      <AiFillCheckCircle className=" hidden text-xl text-lime-400" />
                    </div>
                  </Link>
                </div>
              </div>
            </form>
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
