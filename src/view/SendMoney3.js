import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Receipt from "../components/Receipt";
import axios from "axios";


export default function SendMoney3() {
  const userData = JSON.parse(localStorage.getItem("validUser"));

  const [adsInfo, setAdsInfo] = useState({
    id: "",
    title: "",
    body: "",
    image:
      "https://dev2.kachapay.net/media/marketing/images/Screen_Shot_2022-08-19_at_17.53.30.png",
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
    <div className="h-full">
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
              accountPhone={userData.to}
              accountName={userData.to_name}
              amount={userData.amount}
              fee={userData.fee}
            />
          </div>

          {/* Ads Placement */}
          <div
            // onLoad={() => getAds()}
            className="adsDimensions rounded-lg flex items-center"
          >
            <img src={adsInfo.image} alt={adsInfo.image}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
