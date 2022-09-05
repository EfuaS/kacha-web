import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Receipt from "../components/Receipt";
import axios from "axios";
// import { BsCheckLg } from "react-icons/bs";
// import { Link } from "react-router-dom";

export default function WithdrawATM4() {

    const ATMinf = JSON.parse(localStorage.getItem("validATM"));
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
            <p className="monserat text-2xl leading-7 font-semibold orangeTxt  text-center mb-5">
              Receipt
            </p>

            <Receipt
              message="Transfer Complete"
              accountPhone={"+" + userData.phone}
              accountName={userData.first_name + " " + userData.last_name}
              amount={ATMinf.amount}
              fee={ATMinf.fee}
            />
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
