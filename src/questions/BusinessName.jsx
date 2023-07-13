import { useEffect, useState, useRef } from 'react';
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { toast } from "react-toastify";
import { userData } from "../data/userData";
import { bName } from '../data/addToUserData';

export default function BusinessName() {

  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [businessName, setBusinessName] = useState('');

  let b = userData.business_name;

  useEffect(() => {
    if (b !== "") {
      setIsButtonDisabled(false);
      setBusinessName(b);
    } else {
      setIsButtonDisabled(true);
      setBusinessName('');
    }
  }, []);

  const handleSubmit = (e) => {

    e.preventDefault();
    if (businessName === "") {
      toast.error("Please enter your business name");
      return;
    }

    bName(businessName);
    navigate('/business-type')

  }

  return (
    <div className="pb-10 bg-dark-purple">
    <Banner setProgress={50} />

    <div className="flex flex-col items-center px-4 py-5 mt-20 formArea justify-top sm:px-6 lg:px-4">
      <div className="space-y-8 m-w-1/2">
        <div>
          <h2 className="mt-4 text-4xl font-extrabold text-center text-white">
            What Is The{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
             Name{" "}
            </span>
            Of Your Business?
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="flex flex-col items-center justify-center space-y-6 ">
            <div className="justify-center w-full">
              <div>
                <div className="flex mt-2 rounded-md shadow-sm">

                <input
                        type="text"
                name="businessName"
                  
                        id="businessName"
                    placeholder="John Doe's Trucking"
                    defaultValue={b}
                    onChange={(e) => {
                      setIsButtonDisabled(false);
                      setBusinessName(e.target.value);
                        }}
                required
                        className="w-full appearance-none mb-5 lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                  
               
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`px-6 py-4 w-full mt-5 text-lg ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75 bg-input-purple' : 'bg-pink-600'
                } hover:shadow-lg text-white rounded transition duration-200`}
                id="dotNumberButton"
                onClick={handleSubmit}
            >
              Next
            </button>
        
          </div>

          <LinkWithQuery to="/trucks-trailers">Back</LinkWithQuery>
        </form>
      </div>
    </div>
    <CTA />
  </div>
  )
}
