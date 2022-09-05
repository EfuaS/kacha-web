import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import kachamobile from "../assets/kachamobile.png";
import kachaweb from "../assets/kachaweb.png";
import { MdLockOutline } from "react-icons/md";
import {BsShieldCheck} from "react-icons/bs";
import { MdOutlineSettingsCell } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import { VscGlobe } from "react-icons/vsc";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { RiSuitcaseLine } from "react-icons/ri";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { TbSend } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import {FaGooglePlay} from "react-icons/fa";
import { SiApple } from "react-icons/si";
import sendmobile from "../assets/sendmoneymobile.png";
import balanced from "../assets/balanced.png";
import Frame32 from "../assets/Frame32.png";
import {RiBriefcaseLine} from "react-icons/ri";
import success from "../assets/success.png";
import receipt from "../assets/receipt.png";
import paymentoption from "../assets/paymentoption.png";
import {MdPhonelinkRing} from "react-icons/md";
import contactinfo from "../assets/contactinfo.png";
import airtimeweb from "../assets/airtimeweb.png";
import paycomplete from "../assets/paycomplete.png";
import withdrawweb from "../assets/withdrawweb.png";
import qr from "../assets/qr.png";
import questionmark from "../assets/question-mark.png";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";




export default function Home(){
    return (
      <div className="">
        <Navbar />

        {/* landing section */}

        <div id="landing-section" className="flex w-screen h-screen">
          <div className=" w-2/4 flex justify-center items-center">
            <div className="space-y-4 ">
              <p className=" monserat font-bold orangeTxt text-5xl  ">
                Providing Seamless
              </p>
              <p className="monserat font-bold   orangeTxt text-5xl ">
                Financial Service
              </p>
              <p className="monserat font-bold  orangeTxt text-5xl ">
                Across Africa.
              </p>
              <p className="sourceSans text-xl leading-8 text-slate-600 pt-4">
                What you could get with just a tap and 5 minutes ? <br></br>
                Kacha! your wallet on the go
              </p>
              <div className="w-3/4 pt-10">
                <Button name="Get Started" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-2/4">
            <div className="relative flex flex-row scale-110 ">
              <div className="translate-x-56 translate-y-24 ">
                <img src={kachamobile} alt="kachamobile"></img>
              </div>
              <div className="">
                <img src={kachaweb} alt="kachaweb"></img>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Kacha hero section */}

        <div className="w-screen menuBG py-20 flex flex-row justify-around">
          <div className="w-80 h-fit p-4 flex flex-row sourceSans bg-white rounded-lg">
            <div className=" orangeTxt h-fit p-1 mt-4 rounded-md bg-orange-100">
              <MdLockOutline className="text-lg" />
            </div>
            <div className="pl-4 py-4">
              <p className="text-lg  orangeTxt font-semibold">
                Guaranteed Security
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sed consectetur commodo nibh. Vitae diam sagittis,
                morbi duis mauris tempus.
              </p>
            </div>
          </div>
          <div className=" mt-12 w-80 h-fit p-4 flex flex-row sourceSans bg-white rounded-lg">
            <div className=" orangeTxt h-fit p-1 mt-4 rounded-md bg-orange-100">
              <MdOutlineSettingsCell className="text-lg" />
            </div>
            <div className="pl-4 py-4">
              <p className="text-lg  orangeTxt font-semibold">
                All-In-One Application
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sed consectetur commodo nibh. Vitae diam sagittis,
                morbi duis mauris tempus.
              </p>
            </div>
          </div>
          <div className="w-80 h-fit p-4 flex flex-row sourceSans bg-white rounded-lg">
            <div className=" orangeTxt h-fit p-1 mt-4 rounded-md bg-orange-100">
              <BsShieldCheck className="text-lg" />
            </div>
            <div className="pl-4 py-4">
              <p className="text-lg  orangeTxt font-semibold">Privacy</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sed consectetur commodo nibh. Vitae diam sagittis,
                morbi duis mauris tempus.
              </p>
            </div>
          </div>
        </div>

        {/* Menu showcase hero */}

        <div className="w-screen h-60 kacha-mustard relative z-10"></div>
        <div className="flex relative justify-center z-20  -translate-y-48">
          <div className=" mt-28 w-fit space-x-0 lg:space-x-10 text-center bg-white flex flex-wrap flex-row shadow-md items-center rounded-lg py-8 px-4  ">
            <Link to="/SendMoney1">
              <div className="hover:bg-yellow-100 p-2 rounded-lg">
                <div className=" w-fit  mb-7 ml-4 p-4 rounded-lg fade-orange">
                  <TbSend className="orangeTxt text-2xl" />
                </div>
                <span className="text-black DMSans leading-5">Send money</span>
              </div>
            </Link>
            <Link to="/Withdraw1">
              <div className="hover:bg-yellow-100 p-2 rounded-lg">
                <div className="   mb-7 mx-4 p-3.5 rounded-lg fade-orange">
                  <GiTakeMyMoney className="orangeTxt text-3xl " />
                </div>
                <span className="text-black DMSans leading-5">Withdraw</span>
              </div>
            </Link>
            <Link to="/Voucher1">
              <div className="hover:bg-yellow-100 p-2 rounded-lg">
                <div className="   mb-7 mx-4 p-4 rounded-lg fade-orange">
                  <RiFileList3Line className="orangeTxt text-2xl" />
                </div>
                <span className="text-black DMSans leading-5">Voucher</span>
              </div>
            </Link>
            <Link to="/Airtime1">
              <div className="hover:bg-yellow-100 p-2 rounded-lg">
                <div className="   mb-7 mx-4 p-4 rounded-lg fade-orange">
                  <MdOutlinePhonelinkRing className="orangeTxt text-2xl" />
                </div>
                <span className="text-black DMSans leading-5">Airtime</span>
              </div>
            </Link>
            <Link to="/Payment1">
              <div className="hover:bg-yellow-100 p-2 rounded-lg">
                <div className="   mb-7 mx-4 p-4 rounded-lg fade-orange">
                  <RiSuitcaseLine className="orangeTxt text-2xl" />
                </div>
                <span className="text-black DMSans leading-5">Payments</span>
              </div>
            </Link>
            <Link to="/RequestMoney">
              <div className="hover:bg-yellow-100 p-2 rounded-lg">
                <div className="   mb-7 mx-4 p-4 rounded-lg fade-orange">
                  <HiOutlineArrowsExpand className="orangeTxt text-2xl" />
                </div>
                <span className="text-black DMSans leading-5">Request</span>
              </div>
            </Link>
            <div className="hover:bg-yellow-100 p-2 rounded-lg">
              <div className="   mb-7 mx-4 p-4 rounded-lg fade-orange">
                <FaHandHoldingUsd className="orangeTxt text-2xl" />
              </div>
              <span className="text-black DMSans leading-5">Loans</span>
            </div>
            <div className="hover:bg-yellow-100 p-2 rounded-lg">
              <div className=" w-fit  mb-7 ml-4 p-4 rounded-lg fade-orange">
                <VscGlobe className="orangeTxt text-2xl" />
              </div>
              <span className="text-black DMSans leading-5">Remittance</span>
            </div>
          </div>
        </div>

        {/* sendmoney section */}

        <div className="flex flex-row-reverse w-screen h-screen">
          <div className=" w-2/4 flex justify-center items-center">
            <div className="space-y-4 w-3/4 ">
              <div className="flex flex-row">
                <div className="p-2.5 rounded-lg bg-orange-100 mr-6">
                  <TbSend className=" text-xl orangeTxt" />
                </div>
                <p className="monserat font-medium leading-8 text-2xl orangeTxt">
                  Money Transfer
                </p>
              </div>

              <p className=" monserat font-medium text-4xl  ">Send money to</p>
              <p className="monserat font-medium  text-4xl ">
                anyone regardless
              </p>
              <p className="monserat font-medium text-4xl ">their location</p>
              <p className="w-3/5 sourceSans text-xl leading-8 text-slate-600 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sed consectetur commodo nibh. Vitae diam sagittis,
                morbi duis mauris tempus.
              </p>
              <div className="w-3/5 pt-10">
                <Button name="Download Application" />
                <p className="orangeTxt mt-6 text-lg leading-7"> Get Started</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center w-2/4">
            <div className="relative flex flex-col scale-110  ">
              <img
                className="relative z-20 right-20"
                width={210}
                src={Frame32}
                alt="kachaweb"
              ></img>
              <img
                className="absolute"
                src={sendmobile}
                alt="kachamobile"
              ></img>
              <img
                className="relative mt-48 ml-36 "
                src={balanced}
                alt="kachaweb"
              ></img>
            </div>
          </div>
        </div>

        {/* AIrtime hero section */}

        <div className="flex w-screen menuBG h-screen ">
          <div className=" w-2/4 flex justify-center items-center">
            <div className="w-2/4">
              <div className="flex flex-row mb-11">
                <div className="p-2.5 rounded-lg bg-orange-100 mr-6 ">
                  <MdPhonelinkRing className=" text-xl orangeTxt" />
                </div>
                <p className="monserat font-semibold leading-8 text-2xl orangeTxt">
                  Airtime
                </p>
              </div>

              <p className=" monserat font-medium text-4xl  ">
                Buy airtime for your
              </p>
              <p className="monserat font-medium  text-4xl ">
                self or anyone on your
              </p>
              <p className="monserat font-medium text-4xl ">contact list</p>
              <p className=" sourceSans text-xl leading-8 text-slate-600 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sed consectetur commodo nibh. Vitae diam sagittis,
                morbi duis mauris tempus.
              </p>
              <div className="w-3/5 pt-10">
                <Button name="Download Application" />
                <p className="orangeTxt mt-6 text-lg leading-7"> Get Started</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-20 ">
            <div className="relative flex flex-col ">
              <img
                className="relative z-10 left-40 -translate-y-28"
                src={contactinfo}
                alt="success"
              ></img>
              <img
                className="absolute scale-150"
                src={airtimeweb}
                alt="kachamobile"
              ></img>
              <img
                className="translate-y-60 -translate-x-40 rounded-lg "
                width={200}
                src={paycomplete}
                alt="paymentoptions"
              ></img>
            </div>
          </div>
        </div>

        {/* loans and payment hero section */}

        <div className="flex flex-row-reverse w-screen h-screen">
          <div className=" w-2/4 flex justify-center items-center">
            <div className="space-y-4 w-3/4 ">
              <div className="flex flex-row mb-11">
                <div className="p-2.5 rounded-lg bg-orange-100 mr-6 ">
                  <RiBriefcaseLine className=" text-xl orangeTxt" />
                </div>
                <p className="monserat font-semibold leading-8 text-2xl orangeTxt">
                  Loans & Payments
                </p>
              </div>

              <p className=" monserat font-medium text-4xl  ">
                Pay all bills & also
              </p>
              <p className="monserat font-medium  text-4xl ">request loans</p>
              <p className="monserat font-medium text-4xl ">to help you out.</p>
              <p className="w-3/5 sourceSans text-xl leading-8 text-slate-600 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sed consectetur commodo nibh. Vitae diam sagittis,
                morbi duis mauris tempus.
              </p>
              <div className="w-3/5 pt-10">
                <Button name="Download Application" />
                <p className="orangeTxt mt-6 text-lg leading-7"> Get Started</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center w-2/4">
            <div className="relative flex flex-col scale-110 ">
              <img
                className="relative z-20 right-20"
                width={210}
                src={success}
                alt="success"
              ></img>
              <img className="absolute" src={receipt} alt="kachamobile"></img>
              <img
                className="relative mt-48 ml-36 "
                src={paymentoption}
                alt="paymentoptions"
              ></img>
            </div>
          </div>
        </div>

        {/* withdraw hero section */}
        <div className="flex w-screen menuBG h-screen ">
          <div className=" w-2/4 flex justify-center items-center">
            <div className="w-2/4">
              <div className="flex flex-row mb-11">
                <div className="p-2.5 rounded-lg bg-orange-100 mr-6 ">
                  <GiTakeMyMoney className=" text-3xl orangeTxt" />
                </div>
                <p className="monserat font-medium leading-8 text-2xl mt-2 orangeTxt">
                  Withdraw
                </p>
              </div>

              <p className=" monserat pb-2 font-medium text-4xl  ">
                Securely withdraw
              </p>
              <p className="monserat pb-2 font-medium  text-4xl ">
                money via our agents
              </p>
              <p className="monserat font-medium text-4xl ">& ATMs</p>
              <p className=" sourceSans text-xl leading-8 text-slate-600 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum sed consectetur commodo nibh. Vitae diam sagittis,
                morbi duis mauris tempus.
              </p>
              <div className="w-3/5 pt-10">
                <Button name="Download Application" />
                <p className="orangeTxt mt-6 text-lg leading-7"> Get Started</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-20 ">
            <div className="relative flex flex-col ">
              <img
                className="relative invisible z-10 left-40 -translate-y-28"
                src={contactinfo}
                alt="success"
              ></img>
              <img
                className="absolute scale-150"
                src={withdrawweb}
                alt="kachamobile"
              ></img>
              <img
                className="translate-y-60 -translate-x-40 rounded-lg "
                width={200}
                src={qr}
                alt="paymentoptions"
              ></img>
            </div>
          </div>
        </div>

        {/* FAQ hero section */}
        <div className="w-screen bg-neutral-100 h-auto flex flex-col items-center py-20">
          <div className="">
            <div className="text-5xl monserat mb-10 ">
              <p>Frequently asked</p>
              <p>questions</p>
            </div>
            <div className="flex">
              <div className="sourceSans w-3/5 space-y-6">
                <div className="bg-white rounded-lg p-3">
                  <p className="leading-7 text-lg orangeTxt">
                    Turpis morbi sit pellentesque morbi euismod nulla.
                  </p>
                  <p className="text-sm leading-6">
                    Praesent cursus sit velit, vitae. Elit aliquet curabitur
                    nibh dolor cras duis nibh orci ut. Nisl, mauris et congue
                    nunc ultrices mauris aenean phasellus enim
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="leading-7 text-lg orangeTxt">
                    Turpis morbi sit pellentesque morbi euismod nulla.
                  </p>
                  <p className="text-sm leading-6">
                    Praesent cursus sit velit, vitae. Elit aliquet curabitur
                    nibh dolor cras duis nibh orci ut. Nisl, mauris et congue
                    nunc ultrices mauris aenean phasellus enim
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="leading-7 text-lg orangeTxt">
                    Turpis morbi sit pellentesque morbi euismod nulla.
                  </p>
                  <p className="text-sm leading-6">
                    Praesent cursus sit velit, vitae. Elit aliquet curabitur
                    nibh dolor cras duis nibh orci ut. Nisl, mauris et congue
                    nunc ultrices mauris aenean phasellus enim
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="leading-7 text-lg orangeTxt">
                    Turpis morbi sit pellentesque morbi euismod nulla.
                  </p>
                  <p className="text-sm leading-6">
                    Praesent cursus sit velit, vitae. Elit aliquet curabitur
                    nibh dolor cras duis nibh orci ut. Nisl, mauris et congue
                    nunc ultrices mauris aenean phasellus enim
                  </p>
                </div>
              </div>
              <div className="ml-10">
                <img src={questionmark} alt="question-mark"></img>
              </div>
            </div>
          </div>
        </div>

        {/* Agent / Merchant hero section */}
        <div className=" w-screen py-20 h-auto menuBG">
          <div className="flex justify-evenly ">
            <div className="bg-white p-10 ten-vw rounded-lg">
              <div className="w-3/4">
                <span className="monserat block mb-2 font-medium text-2xl orangeTxt">
                  Agents
                </span>
                <p className="monserat text-4xl mb-6 font-medium">
                  Become a Kacha <br></br>Agent
                </p>
                <span className="w-1/6 sourceSans text-base text-slate-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed consectetur commodo nibh. Vitae diam sagittis,
                  morbi duis mauris tempus.
                </span>

                <div className="orangeTxt text-lg font-bold border-2 border-orange-500 mt-10 rounded-lg text-center p-4">
                  <span>Sign up on web</span>
                </div>
                <div className="mt-10">
                  <span className="text-sm block mb-4">
                    Get our Applications
                  </span>
                  <div className="monserate text-white kacha-orange rounded-lg flex w-fit py-4 px-8">
                    <FaGooglePlay className="text-4xl mr-4" />
                    <div>
                      <p className="text-sm">Get it on</p>
                      <p className="text-lg">Google Playstore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 ten-vw rounded-lg">
              <div className="w-3/4">
                <span className="monserat block mb-2 font-medium text-2xl orangeTxt">
                  Business Merchant
                </span>
                <p className="monserat text-4xl mb-6 font-medium">
                  Get on as a Kacha <br></br>Merchant
                </p>
                <span className="w-1/6 sourceSans text-base text-slate-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum sed consectetur commodo nibh. Vitae diam sagittis,
                  morbi duis mauris tempus.
                </span>

                <div className="orangeTxt text-lg font-bold border-2 border-orange-500 mt-10 rounded-lg text-center p-4">
                  <span>Sign up on web</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* download hero section */}
        <div className="w-screen fifty-vh bg-neutral-100 flex items-center ">
          <div className="ml-64">
            <p className="orangeTxt monserat text-2xl font-semibold mb-10">
              Why wait?
            </p>
            <p className="monserat text-4xl mb-6 font-medium">
              Download the application <br></br> on various platforms.
            </p>

            <div className="flex space-x-10">
              <div className="monserate text-white kacha-orange rounded-lg flex w-fit py-4 px-8">
                <SiApple className="text-4xl mr-4" />
                <div>
                  <p className="text-sm">Get it on</p>
                  <p className="text-lg">Apple Store</p>
                </div>
              </div>

              <div className="monserate text-white kacha-orange rounded-lg flex w-fit py-4 px-8">
                <FaGooglePlay className="text-4xl mr-4" />
                <div>
                  <p className="text-sm">Get it on</p>
                  <p className="text-lg">Google Playstore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="w-screen menuBG fifty-vh flex flex-col divide-y-2 divide-slate-400 justify-center">
          <div className="flex pb-6 justify-evenly">
            <div className="w-1/4">
              <a href="/" class="flex items-center">
                <img src={logo2} class="mr-2 h-6 sm:h-9" alt="Kacha Logo"></img>
                <span class="monserate self-center text-2xl font-bold whitespace-nowrap ">
                  Kacha
                </span>
              </a>
              <p className="text-base leading-7 text-justify text-slate-600 mt-4 py-4">
                Kacha Digital Financial Service S.C is the first private mobile
                money service provider in Ethiopia established by Ethiopian
                national share holders under the National Bank of Ethiopia
                Directive ONPS/01/2020. Kacha is here to serve the base of the
                pyramid , unbanked and under-banked Ethiopians through state of
                the art technology, vibrant team , low service fees and
                resilient business strategy.
              </p>
            </div>
            <div className="sourceSans flex space-x-12">
              <div className="space-y-6 text-lg leading-7 text-slate-600">
                <p className="orangeTxt text-2xl">Links</p>

                <p>Agents</p>
                <p>Business</p>
                <p>About Us</p>
                <p>Services</p>
              </div>
              <div className="space-y-6 text-lg leading-7 text-slate-600">
                <p className="orangeTxt text-2xl">Social Media</p>

                <p>Facebook</p>
                <p>Twitter</p>
                <p>Linkedin</p>
              </div>
            </div>
            <div>
              <p className="orangeTxt text-2xl sourceSans mb-6">Application</p>
              <div className="flex flex-col space-y-10">
                <div className="monserate text-white kacha-orange rounded-lg flex py-4 px-8 scale-90 ">
                  <SiApple className="text-4xl mr-4" />
                  <div>
                    <p className="text-sm">Get it on</p>
                    <p className="text-lg">Apple Store</p>
                  </div>
                </div>

                <div className="monserate text-white kacha-orange rounded-lg flex w-fit py-4 px-8 scale-90">
                  <FaGooglePlay className="text-4xl mr-4" />
                  <div>
                    <p className="text-sm">Get it on</p>
                    <p className="text-lg">Google Playstore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full menuBG sourceSans text-lg leading-7 text-center  ">
            <p className="pt-6">Copyright 2022. Kacha. All rights reserved</p>
          </div>
        </div>
      </div>
    );
}