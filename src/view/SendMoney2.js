import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import TransInfoCard from "../components/TransInfoCard";

export default function SendMoney2() {

  const navigate = useNavigate();
  const inputs = document.querySelectorAll("input");
  const form = document.querySelector("form");
  let userPin;
  
inputs.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener("click", function () {
      inputs[0].focus();
    });
  }
  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === 3) {
         userPin = [...inputs].map((input) => input.value).join("");
      } else {
        inputs[key + 1].focus();
      }
    }
  });
});

  const [adsInfo, setAdsInfo] = useState({
    id: "",
    title: "",
    body: "",
    image:       "https://dev2.kachapay.net/media/marketing/images/Screen_Shot_2022-08-19_at_17.53.30.png"
  });

  // const getAds = () => {
  //   setAdsInfo({ ...adsInfo, image: "https://dev2.kachapay.net" });

  //   axios
  //     .get("https://dev2.kachapay.net/api/ads")
  //     .then((res) => {
  //       setAdsInfo({
  //         ...adsInfo,
  //         id: res.data[0].id,
  //         title: res.data[0].title,
  //         body: res.data[0].body,
  //         image: adsInfo.image + res.data[0].image,
  //       });
  //     })
  //     .catch((errorr) => {
  //       // if error is unauthorized go to login
  //       console.log(errorr);
  //     });
  // };




    const userData = JSON.parse(localStorage.getItem("validUser"));

    const confirmTransactionHandler = (e) => {
          e.preventDefault();


          axios
            .post(
              "https://dev2.kachapay.net/api/transfers/send_money",
              {
                to: userData.to,
                amount: userData.amount,
                pin: "1234",
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("userToken")}`,
                },
              }
            )
            .then((res) => {
              console.log(res);

             navigate("/SendMoney3");
            })
            .catch((errorr) => {
              console.log(errorr);
            });

            // form.reset();
    }



  return (
    <div>
      <div className="z-10 fixed inset-x-0 top-0 w-full menuDimensions kacha-mustard"></div>
      <Navbar />
      <Menu />

      <div className="formTop  flex flex-col items-center  ">
        <div className=" flex justify-between secSection">
          <div className=" formDimensions">
            <p className="monserat text-2xl leading-7 font-semibold text-slate-500">
              Send money
            </p>
            <TransInfoCard
              message="You are sending"
              to="Recieving account"
              name="Recieving Account name"
              accountPhone={userData.to}
              accountName={userData.to_name}
              amount={userData.amount}
            />
            {/* <PinCode /> */}
            <div>
              <form
                id="form"
                className=" mt-6 "
                onSubmit={confirmTransactionHandler}
              >
                <p className="sourceSans text-gray-600 text-base text-center leading-7">
                  Enter your PIN
                </p>
                <div className="flex flex-row  justify-center space-x-8 text-center text-3xl mt-3 ">
                  <input
                    className="Pininput rounded-lg text-center focus:outline-0"
                    type="password"
                    maxlength="1"
                  />
                  <input
                    className="Pininput rounded-lg text-center focus:outline-0"
                    type="password"
                    maxlength="1"
                  />
                  <input
                    className="Pininput rounded-lg text-center focus:outline-0"
                    type="password"
                    maxlength="1"
                  />
                  <input
                    className="Pininput rounded-lg text-center focus:outline-0"
                    type="password"
                    maxlength="1"
                  />
                </div>
                <div className="mt-8">
                  <Button name="Confirm" />
                </div>
              </form>
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
