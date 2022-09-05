import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function PinCode() {

const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

inputs.forEach((input, key) => {
  if (key !== 0) {
    input.addEventListener("click", function () {
      inputs[0].focus();
    });
  }
  input.addEventListener("keyup", function () {
    if (input.value) {
      if (key === 3) {
        // Last one tadaa
        const userPin = [...inputs].map((input) => input.value).join("");
        console.log(userPin);
      } else {
        inputs[key + 1].focus();
      }
    }
  });
});

  return (
    <div>
      <form id="form" className="formDimensions mt-6 ">
        <p className="sourceSans text-gray-600 text-base text-center leading-7">Enter your PIN</p>
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
        <div className="mt-8">
          <Button name="Confirm" />
        </div>
      </form>
    </div>
  );
}
