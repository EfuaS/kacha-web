import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function VoucherRed1() {
  const navigate = useNavigate();

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

        // Voucher Redeem
          const [formData, setFormData] = useState({
            phoneNumber: "",
            voucher: "",
          });

  const successHandler = (res) => {
    localStorage.setItem("redeemed", JSON.stringify(res));
    return navigate("/VoucherRed2");
  };

  const errorHandler = (error) => {
    let status_text = error.response.statusText;

    if (status_text === "Unauthorized") {
      return navigate("/Login");
    } else {
      return;
    }
  };

  const redeemVoucher = () => {
    axios
      .post(
        "https://dev2.kachapay.net/api/transfers/voucher/redeem",
        {
          phone: formData.phoneNumber,
          voucher: formData.voucher,
          otp: "123456",
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
    redeemVoucher();
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
              Redeem Voucher
            </p>
            <div className=" flex flex-col  mb-4">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Sender Phone Number
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
                Voucher code
              </label>
              <input
                className=" inputCol rounded-lg px-4 py-3"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    voucher: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className=" flex flex-col  mb-10">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                OTP
              </label>
              <input
                className=" inputCol rounded-lg px-4 py-3"
                // onChange={(e) =>
                //   setFormData({
                //     ...formData,
                //     phoneNumber: e.target.value,
                //   })
                // }
              ></input>
            </div>

            <div>
                <Button name="Redeem" />
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
