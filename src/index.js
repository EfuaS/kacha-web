import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./view/Home";
import SendMoney from './view/SendMoney1';
import SendMoney2 from "./view/SendMoney2";
import SendMoney3 from './view/SendMoney3';
import RequestMoney from './view/RequestMoney';
import RequestSuccess from './view/RequestSucess';
import Withdraw1 from './view/Withdraw1';
import WithdrawATM2 from "./view/WithdrawATM2";
import WithdrawATM3 from "./view/WithdrawATM3";
import WithdrawATM4 from "./view/WithdrawATM4";
import WithdrawAgent2 from './view/WithdrawAgent2';
import WithdrawAgent4 from './view/WithdrawAgent4';
import Voucher1 from './view/Voucher1';
import VoucherGen1 from './view/VoucherGen1';
import VoucherGen2 from './view/VoucherGen2';
import VoucherRed1 from './view/VoucherRed1';
import VoucherRed2 from "./view/VoucherRed2";
import Airtime1 from './view/Airtime1';
import Airtime2 from "./view/Airtime2";
import Airtime3  from "./view/Airtime3";
import Payment1 from "./view/Payment1";
import BillPayment2 from './view/BillPayment2';
import BillPayment1 from './view/BillPayment1';
import BillPayment3 from './view/BillPayment3';
import MerchantPayment1 from './view/MerchantPayment1';
import MerchantPayment2 from './view/MerchantPayment2';
import MerchantPayment3 from './view/MerchantPayment3';
import Login from './view/Login';
import Register from "./view/Register";
import WithdrawAgent5 from "./view/WithdrawAgent5";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SendMoney1" element={<SendMoney />} />
      <Route path="/SendMoney2" element={<SendMoney2 />} />
      <Route path="/SendMoney3" element={<SendMoney3 />} />
      <Route path="/RequestMoney" element={<RequestMoney />} />
      <Route path="/RequestSuccess" element={<RequestSuccess />} />
      <Route path="/Withdraw1" element={<Withdraw1 />} />
      <Route path="/WithdrawATM2" element={<WithdrawATM2 />} />
      <Route path="/WithdrawATM3" element={<WithdrawATM3 />} />
      <Route path="/WithdrawATM4" element={<WithdrawATM4 />} />
      <Route path="/WithdrawAgent2" element={<WithdrawAgent2 />} />
      <Route path="/WithdrawAgent4" element={<WithdrawAgent4 />} />
      <Route path="/WithdrawAgent5" element={<WithdrawAgent5 />} />
      <Route path="/Voucher1" element={<Voucher1 />} />
      <Route path="/VoucherGen1" element={<VoucherGen1 />} />
      <Route path="/VoucherGen2" element={<VoucherGen2 />} />
      <Route path="/VoucherRed1" element={<VoucherRed1 />} />
      <Route path="/VoucherRed2" element={<VoucherRed2 />} />
      <Route path="/Airtime1" element={<Airtime1 />} />
      <Route path="/Airtime2" element={<Airtime2 />} />
      <Route path="/Airtime3" element={<Airtime3 />} />
      <Route path="/Payment1" element={<Payment1 />} />
      <Route path="/BillPayment2" element={<BillPayment2 />} />
      <Route path="/BillPayment3" element={<BillPayment3 />} />
      <Route path="/BillPayment1" element={<BillPayment1 />} />
      <Route path="/MerchantPayment3" element={<MerchantPayment3 />} />
      <Route path="/MerchantPayment2" element={<MerchantPayment2 />} />
      <Route path="/MerchantPayment1" element={<MerchantPayment1 />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
