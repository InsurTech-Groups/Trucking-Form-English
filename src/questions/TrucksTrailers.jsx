import { useEffect, useState } from "react";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { toast } from "react-toastify";
import { userData } from "../data/userData";
import { numberOfTrailers, numberOfTrucks } from "../data/addToUserData";

export default function TrucksTrailers() {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [trailerCount, setTrailerCount] = useState('');
  const [truckCount, setTruckCount] = useState('');

  let t = userData.number_of_trucks;
  let tr = userData.number_of_trailers;

  useEffect(() => {
    if (t !== "") {
      setTruckCount(t);
      setIsButtonDisabled(false);
    }
    if (tr !== "") {
      setTrailerCount(tr);
      setIsButtonDisabled(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Number of Trucks:", truckCount);
    console.log("Number of Trailers:", trailerCount);

    if (truckCount === "" || trailerCount === "") {
      toast.error("Please enter a valid number");
      return;
    }
    if (isNaN(truckCount) || isNaN(trailerCount)) {
      toast.error("Please enter a valid number");
      return;
    }

    numberOfTrucks(truckCount);
    numberOfTrailers(trailerCount);
    navigate('/business-name')
  }

  return (
    <div className="pb-10 bg-dark-purple">
      <Banner setProgress={50} />

      <div className="flex flex-col items-center px-4 py-5 mt-20 formArea justify-top sm:px-6 lg:px-4">
        <div className="space-y-8 m-w-1/2">
          <div>
            <h2 className="mt-4 text-4xl font-extrabold text-center text-white">
              How Many{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Trucks & Trailers{" "}
              </span>
              Does Your Business Have?
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className="flex flex-col items-center justify-center space-y-6 ">
              <div className="justify-center w-1/2">
                <div>
                  <div className="flex flex-col mt-2 rounded-md shadow-sm">
                    <label
                      htmlFor="trucks"
                      className="font-bold text-white"
                    >
                      Number of Trucks:
                    </label>
                    <input
                      type="text"
                      name="trucks"
                      pattern="\d*"
                      id="trucks"
                      placeholder="2"
                      defaultValue={t}
                      onChange={(e) => {
                        setIsButtonDisabled(false);
                        setTruckCount(e.target.value);
                      }}
                      required
                      className="w-full appearance-none mb-5 lg:text-xl text-center bg-input-purple text-white text-md rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-5 p-2.5"
                    />

                    <label
                      htmlFor="trailers"
                      className="font-bold text-white"
                    >
                      Number of Trailers:
                    </label>
                    <input
                      type="text"
                      name="trailers"
                      pattern="\d*"
                      id="trailers"
                      placeholder="2"
                      defaultValue={tr}
                      onChange={(e) => {
                        setIsButtonDisabled(false);
                        setTrailerCount(e.currentTarget.value);
                        console.log(e.currentTarget.value)
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
                className={`px-6 py-4 w-1/2 mt-5 text-lg ${
                  isButtonDisabled
                    ? "cursor-not-allowed disabled:opacity-75 bg-input-purple"
                    : "bg-pink-600"
                } hover:shadow-lg text-white rounded transition duration-200`}
                id="dotNumberButton"
                onClick={(e) => handleSubmit(e)}
              >
                Next
              </button>
            </div>

            <LinkWithQuery to="/business-duration">Back</LinkWithQuery>
          </form>
        </div>
      </div>
      <CTA />
    </div>
  );
}
