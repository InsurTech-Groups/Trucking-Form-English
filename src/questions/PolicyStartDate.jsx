import { useEffect, useState } from 'react'
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { toast } from "react-toastify";
import { userData } from "../data/userData";
import {dateToStartInsurance} from '../data/addToUserData'

export default function PolicyStartDate() {

  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [date, setDate] = useState('');

  let d = userData.policy_start_date
  let currentDate = new Date().toISOString().split('T')[0]

  useEffect(() => {

    if (d !== "") {
      setIsButtonDisabled(false);
    }

  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date === "") {
      toast.error("Please select a valid date");
      return;
    }
    if (date < currentDate) {
      toast.error("Please select a valid date");
      return;
    }
    dateToStartInsurance(date);
    navigate('/dot-number');
  };

  return (
    <div className="pb-10 bg-dark-purple">
    <Banner setProgress={50} />
    



    <div className="flex flex-col items-center px-4 py-5 mt-20 formArea justify-top sm:px-6 lg:px-4">
      <div className="space-y-8 m-w-1/2">
        <div>
          <h2 className="mt-4 text-4xl font-extrabold text-center text-white">
            When Would You Like {' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
              To Start {' '}
              </span>
              Your Policy?
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="flex flex-col items-center justify-center space-y-6 ">
            <div className="justify-center w-full">
         
           
            <input
                          type="date"
                  name="policyStartDate"
                  pattern="\d*"
                          id="policyStartDate"
                  placeholder="MM/DD/YYYY"
                  required
                          className="w-full appearance-none mb-5 lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                  defaultValue={d}
                    
                  onChange={(e) => {
                    setDate(e.target.value)
                    console.log(e.target.value)
                    toast.dismiss();
                    toast.clearWaitingQueue();
                    setIsButtonDisabled(false)
                  }}
                />
                 
                

            </div>

            <button
          type="submit"
          disabled={isButtonDisabled}
          className={`px-6 py-4 w-full mt-5 text-lg ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : "bg-pink-600"} hover:shadow-lg text-white rounded transition duration-200`}
                id="zipCodeButton"
                onClick={handleSubmit}
                
          >
          Next
        </button>
          </div>

          <LinkWithQuery to="/current-insurance">Back</LinkWithQuery>
        </form>
      </div>
    </div>
      <CTA />
      

  </div>
  )
}
