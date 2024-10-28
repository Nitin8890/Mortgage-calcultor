import React, { useState } from "react";

const Options = ({onSelect}) => {
  const [select, setSelect] = useState(null);
  const handleSelect = (option) => {
    setSelect(option);
    onSelect(option)
  };
  return (
    <div className="grid gap-2">
      <label className="text-slate-600">Mortgage Amount</label>
      <button
        onClick={() => handleSelect("Repayment")}
        className={` flex items-center justify-center rounded-md border-2 ${
          select === "Repayment"
            ? "border-yellow-500 bg-yellow-300"
            : "border-gray-500"
        }`}
      >
        <div>
          <input
            type="radio"
            name="option"
            checked={select === "Repayment"}
            readOnly
            className="form-radio text-blue-500"
          />
          <span className="ml-2 text-lg font-semibold text-teal-950">
            Repayment
          </span>
        </div>
      </button>
      <button
        onClick={() => handleSelect("Interest")}
        className={` flex items-center justify-center rounded-md border-2 ${
          select === "Interest"
            ? "border-yellow-500 bg-yellow-300"
            : "border-gray-500"
        }`}
      >
        <div>
          <input
            type="radio"
            name="option"
            checked={select === "Interest"}
            readOnly
            className="form-radio text-blue-500 "
          />
          <span className="ml-2 text-lg font-semibold text-teal-950">
            Interest rate
          </span>
        </div>
      </button>
    </div>
  );
};

export default Options;
