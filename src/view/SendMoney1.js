import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SendMoney() {
  const navigate = useNavigate();
  const form = document.getElementById("my_form");
  const [sendMoneyFormData, setsendMoneyFormData] = useState({
    phoneNumber: "",
    amount: "",
    ref:""
  });

  const [adsInfo, setAdsInfo] = useState({
    id: "",
    title: "",
    body: "",
    image:
      "https://dev2.kachapay.net/media/marketing/images/Screen_Shot_2022-08-19_at_17.53.30.png",
  });

  const getAds=()=>{

      axios
        .get("https://dev2.kachapay.net/api/ads")
        .then((res) => {
        setAdsInfo({
          ...adsInfo,
          id: res.data[0].id,
          title: res.data[0].title,
          body: res.data[0].body,
          // image: adsInfo.image+res.data[0].image,
        })


        })
        .catch((errorr) => {
          // if error is unauthorized go to login
          console.log(errorr);
        });





    
  }



  const successHandler=(res) =>{
            localStorage.setItem("validUser", JSON.stringify(res));
            return navigate("/SendMoney2");

  }

  const errorHandler= (error) =>{
      let status_text = error.response.statusText ;
      
      if (status_text === "Unauthorized") {
        return navigate("/Login");
      } else {
        return;
      }

  }

  const validateReceiver = () =>{
                  axios
                    .post(
                      "https://dev2.kachapay.net/api/transfers/send_money/validate",
                      {
                        to: sendMoneyFormData.phoneNumber,
                        amount: sendMoneyFormData.amount,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "userToken"
                          )}`,
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


  }

  const sendMoneyDataHandler = (event) =>{
          event.preventDefault();
          // getAds();

          // check login
          validateReceiver();
          // form.reset(); 

  }

  return (
    <div>
      <div className="z-10 fixed inset-x-0 top-0 w-full menuDimensions kacha-mustard"></div>
      <Navbar />
      <Menu />

      <div className="formTop  flex flex-col items-center  ">
        <div className=" flex justify-between secSection">
          <form
            className="formDimensions "
            id="my_form"
            onSubmit={sendMoneyDataHandler}
          >
            <p className="monserat orangeTxt pb-6  text-2xl leading-7 font-semibold text-slate-500">
              Send money
            </p>

            <div className=" flex flex-col mb-4">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Phone Number
              </label>
              <input
                className="inputCol rounded-lg px-4 py-3"
                id="phone"
                onChange={(e) =>
                  setsendMoneyFormData({
                    ...sendMoneyFormData,
                    phoneNumber: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className=" flex flex-col mb-4">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Reference
              </label>
              <input
                className="inputCol rounded-lg px-4 py-3"
                id="phone"
                onChange={(e) =>
                  setsendMoneyFormData({
                    ...sendMoneyFormData,
                    ref: e.target.value,
                  })
                }
              ></input>
            </div>

            <div className=" flex flex-col  mb-16">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Amount
              </label>
              <input
                className=" inputCol rounded-lg px-4 py-3"
                onChange={(e) =>
                  setsendMoneyFormData({
                    ...sendMoneyFormData,
                    amount: e.target.value,
                  })
                }
              ></input>
            </div>
            <div>
              {/* <Link to="/SendMoney2"> */}
              <Button name="Send money" />
              {/* </Link> */}
            </div>
          </form>

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
