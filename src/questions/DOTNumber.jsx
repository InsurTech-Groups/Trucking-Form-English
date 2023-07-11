import { useEffect, useState } from 'react'
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { toast } from "react-toastify";
import { userData } from "../data/userData";
import {dateToStartInsurance} from '../data/addToUserData'

export default function DOTNumber() {

  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [dotNumber, setDOTNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateDOTNumber = (value) => {
    const pattern = /^[0-9]{6,8}$/; // Regex pattern for 6-8 digit numeric DOT number

    if (pattern.test(value)) {
      setIsValid(true);
      setDOTNumber(value);
      navigate("/policy-start");
    } else {
      setIsValid(false);
      toast.error("Please enter a valid DOT number");

      return;
    }
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setDOTNumber(value);
    validateDOTNumber(value);
  };

  
  return (
    <div className="pb-10 bg-dark-purple">
    <Banner setProgress={50} />
    



    <div className="flex flex-col items-center px-4 py-5 mt-20 formArea justify-top sm:px-6 lg:px-4">
      <div className="space-y-8 m-w-1/2">
        <div>
          <h2 className="mt-4 text-4xl font-extrabold text-center text-white">
            What Is Your {' '}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
              Business DOT {' '}
              </span>
             Number?
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="flex flex-col items-center justify-center space-y-6 ">
            <div className="justify-center w-full">
         
           
            <div>
    
      <div className="flex mt-2 rounded-md shadow-sm">
        
        <input
          type="text"
          name="company-website"
          id="company-website"
          className="w-full appearance-none mb-5 lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                      placeholder="DOT NUMBER"
                      defaultValue={dotNumber}
                      onChange={(e) => {
                        let v = e.target.value;
                        v = v.split(" ").join("")

                        if (v !== '') {
                          setIsButtonDisabled(false);
                        }
                      }}
        />
      </div>
    </div>
                 
                

            </div>

            <button
          type="submit"
          disabled={isButtonDisabled}
          className={`px-6 py-4 w-full mt-5 text-lg ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : "bg-pink-600"} hover:shadow-lg text-white rounded transition duration-200`}
                id="zipCodeButton"
                onClick={handleInputChange}
                
          >
          Next
        </button>
          </div>

          <LinkWithQuery to="/policy-start">Back</LinkWithQuery>
        </form>
      </div>
    </div>
      <CTA />
      

  </div>
  )
}
