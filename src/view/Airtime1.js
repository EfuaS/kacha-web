import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import {IoIosArrowDropdown} from "react-icons/io";

export default function Airtime1() {

    const [serviceOpen, setServiceOpen] = useState(false);
    const [color, setColor] = useState(false);

    const navigate = useNavigate();
    const form = document.getElementById("my_form");
    const [airtimeFormData, setairtimeFormData] = useState({
      phoneNumber: "",
      amount: "",
    });

    const [errorMessage, setErrorMsg] = useState("");

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
      localStorage.setItem("validAirtimeUser", JSON.stringify(res));
      return navigate("/Airtime2");
    };

    const errorHandler = (error) => {
      let status_text = error.response.statusText;

      if (status_text === "Unauthorized") {
        return navigate("/Login");
      } else{
        return;
      }
    };

    const validateReceiver = () => {
      setErrorMsg(null);
      axios
        .post(
          "https://dev2.kachapay.net/api/transfers/airtime/validate",
          {
            to: airtimeFormData.phoneNumber,
            amount: airtimeFormData.amount,
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

    const AirtimeDataHandler = (event) => {
      event.preventDefault();
        if (airtimeFormData.amount < 5 ) {
        return setErrorMsg("Amount must be greater than or equal to 5");}

      // check login
      validateReceiver();
      console.log(airtimeFormData);
      form.reset();
    };


  return (
    <div>
      <div className="z-10 fixed inset-x-0 top-0 w-full menuDimensions kacha-mustard"></div>
      <Navbar />
      <Menu />

      <div className="formTop  flex flex-col items-center  ">
        <div className=" flex justify-between secSection">
          <div>
            <ErrorMessage message={errorMessage} />
         
          <form
            className="formDimensions"
            id="my_form"
            onSubmit={AirtimeDataHandler}
          >
            <p className="monserat orangeTxt mb-6  text-2xl leading-7 font-semibold ">
              Airtime
            </p>
            <div>
              <div className="flex flex-col  mb-6">
                <div className="mb-4">
                  <input
                    type="radio"
                    value="myPhone"
                    name="device"
                    className="mr-4"
                    onClick={(e) =>
                      setairtimeFormData({
                        ...airtimeFormData,
                        phoneNumber: "+251911519929",
                      })
                    }
                  />
                  <label
                    className={
                      " text-slate-600 font-normal" +
                      (color ? " orangeTxt" : " text-slate-600")
                    }
                  >
                    Top up my phone
                  </label>
                </div>
                <div
                  className={
                    "flex justify-between" +
                    (serviceOpen ? " orangeTxt" : " text-slate-600")
                  }
                  onClick={() => setServiceOpen(!serviceOpen)}
                >
                  <div>
                    <input
                      className="mr-4"
                      type="radio"
                      value="Other"
                      name="device"
                    />
                    <label
                      className="  font-normal "
                      onClick={(e) =>
                        setairtimeFormData({
                          ...airtimeFormData,
                          phoneNumber: "",
                        })
                      }
                    >
                      Others
                    </label>
                  </div>
                  <IoIosArrowDropdown className="text-xl" />
                </div>
              </div>

              <div
                className={
                  " flex flex-col " + (serviceOpen ? " flex" : " hidden")
                }
              >
                <label className=" text-slate-600 sourceSans font-normal ">
                  Phone Number
                </label>
                <input
                  className=" h-12   inputCol rounded-lg p-4"
                  onChange={(e) =>
                    setairtimeFormData({
                      ...airtimeFormData,
                      phoneNumber: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>
            <div className="flex flex-row justify-between my-6">
              <input
                type="number"
                value={5}
                className="w-12 h-10 pl-3 focus:bg-orange-100 hover:cursor-pointer rounded-lg text-center bg-blue-100 hover:cursor-pointer"
                readOnly
                onClick={(e) =>
                  setairtimeFormData({
                    ...airtimeFormData,
                    amount: e.target.value,
                  })
                }
              ></input>
              <input
                type="number"
                value={10}
                className="w-12 focus:bg-orange-100 hover:cursor-pointer h-10 pl-3 rounded-lg text-center bg-blue-100"
                readOnly
                onClick={(e) =>
                  setairtimeFormData({
                    ...airtimeFormData,
                    amount: e.target.value,
                  })
                }
              ></input>
              <input
                type="number"
                value={15}
                className="w-12 h-10 pl-3 focus:bg-orange-100 hover:cursor-pointer rounded-lg text-center bg-blue-100"
                readOnly
                onClick={(e) =>
                  setairtimeFormData({
                    ...airtimeFormData,
                    amount: e.target.value,
                  })
                }
              ></input>
              <input
                type="number"
                value={20}
                className="w-12 h-10 pl-3 focus:bg-orange-100 hover:cursor-pointer rounded-lg text-center bg-blue-100"
                readOnly
                onClick={(e) =>
                  setairtimeFormData({
                    ...airtimeFormData,
                    amount: e.target.value,
                  })
                }
              ></input>
              <input
                type="number"
                value={50}
                className="w-12 h-10 pl-3 focus:bg-orange-100 hover:cursor-pointer rounded-lg text-center bg-blue-100"
                readOnly
                onClick={(e) =>
                  setairtimeFormData({
                    ...airtimeFormData,
                    amount: e.target.value,
                  })
                }
              ></input>
              <input
                type="number"
                value={100}
                className="w-12 h-10 pl-1 focus:bg-orange-100 hover:cursor-pointer rounded-lg text-center bg-blue-100"
                readOnly
                onClick={(e) =>
                  setairtimeFormData({
                    ...airtimeFormData,
                    amount: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className=" flex flex-col">
              <label className=" text-slate-600 font-normal ">Amount</label>
              <input
                className="mb-4  inputCol rounded-lg p-4"
                onChange={(e) =>
                  setairtimeFormData({
                    ...airtimeFormData,
                    amount: e.target.value,
                  })
                }
              ></input>
            </div>

            {/* <Link to="/Airtime2"> */}
            <div className="mt-4   ">
              <Button name="Confirm" />
            </div>
            {/* </Link> */}
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
