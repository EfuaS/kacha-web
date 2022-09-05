import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function WithdrawAgent2() {

      const navigate = useNavigate();
      const form = document.getElementById("my_form");
      const [formData, setFormData] = useState({
        at: "AGENT",
        Agentcode: "2000016",
        amount: "",
      });

      const successHandler = (res) => {
        localStorage.setItem("validAgent", JSON.stringify(res));
        return navigate("/WithdrawAgent4");
      };

      const errorHandler = (error) => {
        let status_text = error.response.statusText;

        if (status_text === "Unauthorized") {
          return navigate("/Login");
        } else {
          return;
        }
      };

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


      const validateReceiver = () => {
        axios
          .post(
            "https://dev2.kachapay.net/api/transfers/withdraw/validate",
            {
              at: formData.at,
              code: formData.Agentcode,
              amount: formData.amount,
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
      validateReceiver();
      form.reset();
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
              Withdraw
            </p>

            <div className=" flex flex-col mb-4  ">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Enter outlet ID
              </label>
              <input
                className="inputCol rounded-lg px-4 py-3"
                id="phone"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    outletID: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className=" flex flex-col mb-4 ">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Amount <span className="text-rose-500">*</span>
              </label>
              <input
                className="inputCol rounded-lg px-4 py-3"
                id="phone"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    amount: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className=" flex flex-col ">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Reference
              </label>
              <input
                className="inputCol rounded-lg px-4 py-3"
                id="phone"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    outletID: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className="mt-10">
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
