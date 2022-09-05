import React, { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { CgCalendarDates } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [regFormData, setregFormData] = useState({
    phoneNumber: "",
    fName: "",
    mName: "",
    lName: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    woreda: "",
    kebele: "",
    Hsno: "",
    sLocation: "",
  });

      const regHandler = (res) => {
        localStorage.setItem(
          "registered",
          JSON.stringify(res.data)
        );
        return navigate("/Login");
      };


  const regDataHandler = (e) => {
    // store the states in the form data
    e.preventDefault();
        axios
          .post("https://dev2.kachapay.net/api/register", {
            phone: regFormData.phoneNumber,
            first_name: regFormData.fName,
            middle_name: regFormData.mName,
            last_name: regFormData.lName,
            gender: regFormData.gender,
            dob: regFormData.dob,
            referral_code: "a",
          })
          .then(function (response) {
            console.log(response);
            regHandler(response);

          })
          .catch(function (error) {
            console.log(error);
          });

  };

  return (
    <div>
      <Navbar />
      <div className=" flex  justify-center relative top-40 ">
        <div>
          <p className=" heading font-bold text-2xl orangeTxt text-center  tracking-wide leading-7">
            Sign Up
          </p>
          <form
            onSubmit={regDataHandler}
            className="bg-white w-auto h-auto px-24 py-12 mb-16"
          >
            <div className="flex flex-col">
              <label className="text-lg text-slate-600 font-normal pb-2  ">
                Phone Number
              </label>
              <input
                className="mb-4 h-12  w-96 inputCol rounded-lg p-2"
                type="text"
                onChange={(e) =>
                  setregFormData({
                    ...regFormData,
                    phoneNumber: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                First Name
              </label>
              <input
                className="mb-4 h-12  w-96 inputCol rounded-lg p-2"
                type="text"
                onChange={(e) =>
                  setregFormData({
                    ...regFormData,
                    fName: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                Middle Name (Optional)
              </label>
              <input
                className="mb-4 h-12  w-96 inputCol rounded-lg p-2"
                type="text"
                onChange={(e) =>
                  setregFormData({
                    ...regFormData,
                    mName: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                Last Name
              </label>
              <input
                className="mb-4 h-12  w-96 inputCol rounded-lg p-2"
                type="text"
                onChange={(e) =>
                  setregFormData({
                    ...regFormData,
                    lName: e.target.value,
                  })
                }
              ></input>
            </div>
            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                Gender
              </label>

              <div className="flex flex-row ">
                <input
                  className=" w-6  mx-4 "
                  type="radio"
                  value="MALE"
                  id="genderM"
                  onChange={(e) =>
                    setregFormData({
                      ...regFormData,
                      gender: e.target.value,
                    })
                  }
                ></input>
                <label className=" mr-40 secText text-xl text-gray-600">
                  Male
                </label>

                <input
                  className="w-6 mx-4"
                  type="radio"
                  value="FEMALE"
                  id="genderF"
                  onChange={(e) =>
                    setregFormData({
                      ...regFormData,
                      gender: e.target.value,
                    })
                  }
                ></input>
                <label className="secText text-xl text-gray-600">Female</label>
              </div>
            </div>

            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                Date of Birth
              </label>
              <div className="flex flex-row">
                <CgCalendarDates className="text-3xl orangeTxt mt-2 mr-2 " />
                <input
                  className="mb-4 h-12  w-full inputCol rounded-lg p-2"
                  type="text"
                  placeholder="DD-MM-YY"
                  onChange={(e) =>
                    setregFormData({
                      ...regFormData,
                      dob: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>

            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                Address zone
              </label>
              <input
                className="mb-4 h-12  w-96 inputCol rounded-lg p-2"
                type="text"
                onChange={(e) =>
                  setregFormData({
                    ...regFormData,
                    address: e.target.value,
                  })
                }
              ></input>
            </div>

            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                City
              </label>
              <input
                className="mb-4 h-12  w-96 inputCol rounded-lg p-2"
                type="text"
                onChange={(e) =>
                  setregFormData({
                    ...regFormData,
                    city: e.target.value,
                  })
                }
              ></input>
            </div>

            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                Woreda
              </label>
              <input
                className="mb-4 h-12  w-96 inputCol rounded-lg p-2"
                type="text"
                onChange={(e) =>
                  setregFormData({
                    ...regFormData,
                    woreda: e.target.value,
                  })
                }
              ></input>
            </div>

            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                Kebele
              </label>
              <input
                className="mb-4 h-12  w-96 inputCol rounded-lg p-2"
                type="text"
                onChange={(e) =>
                  setregFormData({
                    ...regFormData,
                    kebele: e.target.value,
                  })
                }
              ></input>
            </div>

            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                House no.
              </label>
              <input
                className="mb-4 h-12  w-96 inputCol rounded-lg p-2"
                type="text"
                onChange={(e) =>
                  setregFormData({
                    ...regFormData,
                    Hsno: e.target.value,
                  })
                }
              ></input>
            </div>

            <div className="flex flex-col mt-4 ">
              <label className="text-lg text-slate-600 font-normal pb-2 ">
                Specific Location (Optional)
              </label>
              <div className="flex flex-row">
                <MdLocationPin className="text-3xl orangeTxt mt-2 mr-2" />
                <input
                  className="mb-4 h-12  w-full inputCol rounded-lg p-2"
                  type="text"
                  onChange={(e) =>
                    setregFormData({
                      ...regFormData,
                      sLocation: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>

            <div>
              {/* <Link to="/Login"> */}
                <Button name="Create Account" />
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
