import { useEffect, useState } from 'react';
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { toast } from "react-toastify";
import { userData } from "../data/userData";
import { dotNumber } from '../data/addToUserData';

export default function DOTNumber() {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [dotNumberInput, setDotNumberInput] = useState('');

  useEffect(() => {
    const storedDotNumber = userData.dot_number;
    if (storedDotNumber) {
      if (storedDotNumber === 'N/A') {
        setDotNumberInput('');
      }
      else {
        setDotNumberInput(storedDotNumber);
      }
      setIsButtonDisabled(false);
    }
  }, []);

  const validateDOTNumber = (value) => {
    const pattern = /^(USDOT\s?)?\d{6}$/; // Regex pattern for USDOT followed by 6 digits
    return pattern.test(value);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setDotNumberInput(value);
    setIsButtonDisabled(!validateDOTNumber(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateDOTNumber(dotNumberInput)) {
      dotNumber(dotNumberInput);
      navigate("/business-duration");
    } else {
      toast.error("Please enter a valid DOT number");
    }
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
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="justify-center w-full">
                <div>
                  <div className="flex mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="dot-number"
                      id="dot-number"
                      className="w-full appearance-none mb-5 lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                      placeholder="DOT NUMBER"
                      value={dotNumberInput}
                      onChange={handleInputChange}
                    />
                  </div>
                 
                </div>
                <button onClick={() => {
                    dotNumber('N/A');
                    navigate("/business-duration");
                  }} className='justify-center text-center text-white underline text-bold'> I do not have a DOT Number Yet</button>
              </div>
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`px-6 py-4 w-full mt-5 text-lg ${
                  isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75 bg-input-purple' : 'bg-pink-600'
                } hover:shadow-lg text-white rounded transition duration-200`}
                id="dotNumberButton"
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
  );
}
