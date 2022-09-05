import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Button from "../components/Button";
import { BsCheckLg } from "react-icons/bs";
import {MdQrCode2} from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RequestSuccess() {
  const requestData = JSON.parse(localStorage.getItem("requestInfo"));

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
            <p className="monserat text-2xl leading-7 font-semibold orangeTxt  text-center mb-7">
              Request
            </p>
            <div className=" items-center flex flex-col  ">
              <div className="w-full">
                {/*content*/}
                <div className="  relative flex flex-col items-center">
                  {/*header*/}
                  <div className="flex items-center justify-center mb-7  ">
                    <h3 className="text-2xl font-semibold text-white modalGreen p-3 rounded-3xl">
                      <BsCheckLg />
                    </h3>
                  </div>
                  <div className="mb-7">
                    <MdQrCode2 className="text-9xl" />
                  </div>
                  <div className="text-center">
                    <p className="monserat font-bold leading-7 text-xl mb-2">
                      Request was sent sucessfully
                    </p>
                    <p className="sourceSan text-slate-600">
                      Your request of {requestData.amount} for
                      {" " + requestData.reason} was sent succesfully to
                      {requestData.phoneNumber}
                    </p>
                  </div>

                  {/*footer*/}
                </div>
              </div>
              <div className="mt-6 w-full  ">
                <Link to="/">
                  <Button name="Done"></Button>
                </Link>
              </div>
            </div>
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
