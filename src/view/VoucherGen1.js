import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate ,Link } from "react-router-dom";


export default function VoucherGen1() {
  const navigate = useNavigate();

  const inputs = document.querySelectorAll("input");
  const form = document.querySelector("form");
  // let VouchUserPin;

  // inputs.forEach((input, key) => {
  //   if (key !== 0) {
  //     input.addEventListener("click", function () {
  //       inputs[0].focus();
  //     });
  //   }
  //   input.addEventListener("keyup", function () {
  //     if (input.value) {
  //       if (key === 3) {
  //         VouchUserPin = [...inputs].map((input) => input.value).join("");
  //       } else {
  //         inputs[key + 1].focus();
  //       }
  //     }
  //   });
  // });



  const [formData, setFormData] = useState({
    phoneNumber: "",
    amount: "",
    reason:""
  });
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

  const successHandler = (res) => {
     localStorage.setItem("voucher", JSON.stringify(res));
    return navigate("/VoucherGen2");
  };

  const errorHandler = (error) => {
    let status_text = error.response.statusText;

    if (status_text === "Unauthorized") {
      return navigate("/Login");
    } else {
      return;
    }
  };

  const processVoucher = () => {
    axios
      .post(
        "https://dev2.kachapay.net/api/transfers/voucher",
        {
          phone: formData.phoneNumber,
          amount: formData.amount,
          pin: "1234"
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      )
      .then((res) => {
        successHandler(res.data);
        console.log(res);
      })
      .catch((errorr) => {
        // if error is unauthorized go to login
        errorHandler(errorr);
        console.log(errorr);
      });
  };

  const formDataHandler = (event) => {
    event.preventDefault();
    // console.log(formData)
    processVoucher();
    // form.reset();
  };

  return (
    <div>
      <div className="z-10 fixed inset-x-0 top-0 w-full menuDimensions kacha-mustard"></div>
      <Navbar />
      <Menu />

      <div className="formTop  flex flex-col items-center  ">
        <div className=" flex justify-between secSection">
          <form
            className="formDimensions"
            id="my_form"
            onSubmit={formDataHandler}
          >
            <p className="monserat orangeTxt pb-6  text-2xl leading-7 font-semibold ">
              Generate Voucher
            </p>

            <div className=" flex flex-col  mb-4">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Phone Number
              </label>
              <input
                className=" inputCol rounded-lg px-4 py-3"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phoneNumber: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className=" flex flex-col  mb-4">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Amount
              </label>
              <input
                className=" inputCol rounded-lg px-4 py-3"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className=" flex flex-col  mb-2">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Reason for transaction
              </label>
              <input
                className=" inputCol rounded-lg px-4 py-3"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    reason: e.target.value,
                  })
                }
              ></input>
            </div>

            <p className="sourceSans text-gray-600 text-base leading-7">
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

            <div className="mt-4">
              <Button name="Proceed" />
            </div>
          </form>

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
