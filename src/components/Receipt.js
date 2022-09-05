import Button from "../components/Button";
import { BsCheckLg } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function Receipt(props) {

return (
  <div className=" items-center flex flex-col  ">
    <div className="w-full">
      {/*content*/}
      <div className=" border-0 rounded-lg shadow-lg relative flex flex-col outline-none focus:outline-none">
        {/*header*/}
        <div className="flex items-center justify-center mb-4 ">
          <h3 className="text-xl font-semibold text-white kacha-orange p-2 rounded-3xl">
            <BsCheckLg />
          </h3>
        </div>
        <div className="relative flex flex-col items-center text-center ">
          <div className="py-4 px-16  w-80 compSec mb-2">
            <span className=" modalText monserat text-base leading-5 font-bold">
              {props.message}
            </span>
            <span className="block monserat text-lg leading-6 text-black mt-1.5">
              Br {props.amount} <span className="text-sm">.00</span>
            </span>
          </div>
          <div className="flex flex-col compSec monserat leading-4 text-sm text-slate-700 text-center">
            <div className="flex flex-row pt-2 pb-1  ">
              <p className="pl-2">Account number</p>
              <p className="ml-16">{props.accountPhone}</p>
            </div>
            <div className="flex flex-row pb-1  ">
              <p className="pl-2">Account name</p>
              <p className="ml-24">{props.accountName}</p>
            </div>
            <div className="flex flex-row pb-4  ">
              <p className="pl-2">Transaction fee</p>
              <p className="ml-24">{props.fee}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col secText text-base leading-5 items-center pb-4">
          <p className="text-slate-700 mt-4 mb-2">
            Add account to quick access
          </p>
          {/* toggle */}
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>

        {/*footer*/}
      </div>
    </div>
    <div className="mt-6 w-full  ">
      <Link to="/">
        <Button name="Done"></Button>
      </Link>
      <p className="monserat text-lg orangeTxt text-center font-bold leading-7 mt-3.5">
        Download Receipt
      </p>
    </div>
  </div>
);
}
