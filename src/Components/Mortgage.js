import React, { useState } from "react";
import Options from "./Options";
const Mortgage = () => {
  const [selectedOption,setSelectedOption] = useState('');
  const [mortgageAmount,setMortgageAmount] = useState('');
  const [termYears,setTermYears]  = useState('');
  const [interestRate,setInterestRate] = useState('');
  const [monthlyPayment,setMonthlyPayment]=useState(0);
  const [totalPayment,setTotalPayment] = useState(0);
  
  const handleSelectedOption=(option)=>{
    setSelectedOption(option)
  }

  const handleCalculations=()=>{
      const principle = parseFloat(mortgageAmount);
      const termMonths = parseInt(termYears)*12;
      const interest = parseFloat(interestRate)/100/12;
      if(selectedOption==="Repayment"){
          const repaymentMonthly = (principle*interest)/(1-Math.pow(1+interest,-termMonths));
          setMonthlyPayment((repaymentMonthly).toFixed(2));
          setTotalPayment((repaymentMonthly*termMonths).toFixed(2))
      }
      else if(selectedOption==="Interest"){
        const interestOnlymonths = principle*interest;
        setMonthlyPayment((interestOnlymonths).toFixed(2));
        setTotalPayment((interestOnlymonths*termMonths).toFixed(2));  
      }
  }
  return (
    <div className="h-fit w-fit grid md:h-screen md:w-screen md:flex md:justify-center md:items-center bg-slate-200">
      <div className="w-96 h-96 border-r-0 rounded-md rounded-r-none p-4 bg-white">
        <div className="flex justify-between p-1">
          <h1 className="font-semibold text-xl text-teal-950">Mortgage Calculator</h1>
          <button onClick={()=>{
            setSelectedOption(null);
            setMortgageAmount(0);
            setTermYears(0);
            setInterestRate(0);
            setMonthlyPayment(0);
            setTotalPayment(0);
          }} className="text-xs text-gray-600 underline">Clear All</button>
        </div>
        <form onSubmit={(e)=>{
          e.preventDefault()
        }}>
          <div className="grid">
            <label className="text-slate-600">Mortgage Amount</label>
            <div className="flex border-2 border-slate-500 rounded-md">
              <span className="rounded-l-md text-xl font-bold bg-cyan-200 text-teal-950 h-8 w-8 flex justify-center items-center">
                £
              </span>
              <input
                value={mortgageAmount}
                onChange={(e)=>{setMortgageAmount(e.target.value)}}
                placeholder="Enter Amount"
                className="w-full rounded-md"
              ></input>
            </div>
          </div>
          <div className="flex justify-between space-x-4 mt-2">
            <div className="w-1/2">
              <label className="text-slate-600">Mortgage Term</label>
              <div className="flex">
                <input
                  value={termYears}
                  onChange={(e)=>{setTermYears(e.target.value)}}
                  className="border-2 border-slate-500 rounded-r-none rounded-md w-28"
                  placeholder="Enter Term"
                ></input>
                <span className="border-2 border-l-0 border-slate-500 rounded-r-md w-14 h-8 font-semibold bg-cyan-200 text-teal-950 flex justify-center items-center">
                  years
                </span>
              </div>
            </div>
            <div className="w-1/2">
              <label className="text-slate-600">Interest Rate</label>
              <div className="flex">
                <input
                  value={interestRate}
                  onChange={(e)=>setInterestRate(e.target.value)}
                  className="border-2 border-slate-500 rounded-r-none rounded-md w-28"
                  placeholder="Enter interest "
                ></input>
                <span className="border-2 border-l-0 border-slate-500 rounded-r-md w-14 h-8 font-semibold bg-cyan-200 text-teal-950  flex justify-center items-center">
                  %
                </span>
              </div>
            </div>
          </div>
          <div className="p-2">
            <Options onSelect={handleSelectedOption} />
          </div>
          <button onClick={handleCalculations} className="flex bg-yellow-300 border-2 hover:border-teal-950 p-2 rounded-full font-bold  mt-2 text-teal-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
              />
            </svg>
            Calculate Repayments
          </button>
        </form>
      </div>
      <div className="w-96 h-96 bg-teal-900 rounded-bl-3xl rounded-tl-none rounded-md p-4">
            <h1 className="text-2xl text-white">Your results</h1>
            <p className="text-wrap text-slate-400">Your results are shown below based on the information you provided. To adjust the results, edit the form and click "Calculate repayments" again.</p>
            <div className="bg-teal-950 grid border-t-2 border-yellow-300 rounded-t-xl rounded-md mt-5 gap-2 ">
                <h1  className="text-wrap text-slate-400 mt-2 ml-2">Your monthly repayments</h1>
                <h1 className="text-yellow-300 text-3xl mt-2 ml-2">£{monthlyPayment}</h1>
                <hr className="m-2"></hr>
                <h1  className="text-wrap text-slate-400 mt-2 ml-2">Total you'll repay over the term</h1>
                <h1 className="text-white m-2">£{totalPayment}</h1>
            </div>
      </div>
    </div>
  );
};

export default Mortgage;
