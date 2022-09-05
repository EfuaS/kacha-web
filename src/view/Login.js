import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";


export default function Login() {

// when clicked run loader, after 3 seconds off
  // const [showElement, setShowElement] = React.useState(false);


  const navigate = useNavigate();
  const [loginFormData, setloginFormData] = useState({
    phoneNumber: "",
    password: "",
  });

  const [message, setMsg] = useState({
    status: "",
    erro: "",
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


    const loginHandler = (res) => {
      const stringToken = JSON.stringify(res.data.token.access).replace(
        /['"]+/g,
        ""
      );
      localStorage.setItem("userToken", stringToken);
      localStorage.setItem("userData", JSON.stringify(res.data.user));
      setMsg({ ...message, erro: null });
      // login redirects to previous page. potential bug.

      return navigate(-1);
    };

    const errorHandler = (er) => {
      // redirect to login page if not logged in
      if (er.response.request.statusText === "Unauthorized") {
        return setMsg({ ...message, erro: er.response.data.detail });
      } else {
        setMsg({ ...message, erro: null });
      }
    };


    const loginDataHandler = (event) => {
      event.preventDefault();
      console.log(loginFormData);


      if (
        loginFormData.phoneNumber.trim() === "" ||
        loginFormData.password.trim() === ""
      ) {
        return setMsg({
          ...message,
          erro: "Sorry, no feilds can be empty",
        });
      } else {
        setMsg({ ...message, error: null });

// progress loader implemntation

        // setShowElement(true);
        // setTimeout(function () {
        //   setShowElement(false);
        // }, 4000);

        // axios submit login form data to authenticate API
        axios
          .post("https://dev2.kachapay.net/api/authenticate", {
            username: loginFormData.phoneNumber,
            password: loginFormData.password,
          })
          .then((res) => {
            console.log(res);
            loginHandler(res);
          })
          .catch((er) => {
            console.log(er);
            errorHandler(er);
          });
      }
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
            onSubmit={loginDataHandler}
          >

{/* loader display */}
            {/* <div>
              {showElement ? <div>I'm here and i will be gone</div> : <></>}
            </div> */}
            <p className="monserat orangeTxt pb-6  text-2xl leading-7 font-semibold ">
              Login
            </p>

            <ErrorMessage message={message.erro} />

            <div className=" flex flex-col  mb-4">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Phone number <span className="text-rose-500">*</span>
              </label>
              <input
                className=" inputCol rounded-lg px-4 py-3"
                onChange={(e) =>
                  setloginFormData({
                    ...loginFormData,
                    phoneNumber: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className=" flex flex-col  mb-10">
              <label className="text-base mb-2 sourceSans text-slate-600 font-normal ">
                Password
              </label>
              <input
                type="password"
                className=" inputCol rounded-lg px-4 py-3"
                onChange={(e) =>
                  setloginFormData({
                    ...loginFormData,
                    password: e.target.value,
                  })
                }
              ></input>
            </div>

            <div>
              {/* <Link to="/SendMoney2"> */}
              <Button name="Login" />
              {/* </Link> */}
            </div>
            <div className="monserat text-base font-bold leading-5 orangeTxt text-center mt-20">
              <p>Forgotten Password</p>
              <Link to="/Register">
                <p className="mt-4">Sign Up</p>
              </Link>
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
