import React, { useState, useEffect } from "react";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import PhoneInput from "react-phone-number-input/input";
import { toast } from "react-toastify";
import { userData } from "../data/userData";
import { postDataToRico } from "../data/postDataToRico";

export default function BusinessContact() {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [autoCorrectText, setAutoCorrectText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let company = userData.business_name;

  let fN = userData.first_name;
  let lN = userData.last_name;
  let pN = userData.phone_number;
  let eM = userData.email;

  useEffect(() => {
    if (fN !== "" && lN !== "" && pN !== "" && eM !== "") {
      setIsButtonDisabled(false);
      setFirstName(fN);
      setLastName(lN);
      setPhoneNumber(pN);
      setEmail(eM);
    } else {
      setIsButtonDisabled(true);
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setEmail("");
    }
  }, []);

  const validateEmail = () => {
    setIsLoading(true);
  
    const email = document.getElementById("email").value;
  
    return new Promise((resolve, reject) => {
      fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=9a7f85375faa421ba7e1d959415f40ed&email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.autocorrect !== "") {
            setAutoCorrectText(data.autocorrect);
            toast.info(`Did you mean ${data.autocorrect}?`);
            resolve(false);
          } else if (data.deliverability === "DELIVERABLE") {
            setEmail(email);
            resolve(true);
          } else {
            setEmail("");
            toast.error("Please enter a valid email address");
            resolve(false);
          }
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };
  

  const validatePhoneNumber = () => {
    setIsLoading(true);
    let phone = document.getElementById("phoneNumber").value;

    phone = phone.replace(/[- )(]/g, '');
  
    return new Promise((resolve, reject) => {
      fetch(
        `https://phonevalidation.abstractapi.com/v1/?api_key=75f89b138e344044ab0f3cd7ef56af67&phone=1${phone}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.valid) {
            setPhoneNumber(phone);
            resolve(true);
          } else {
            setPhoneNumber("");
            toast.error("Please enter a valid phone number");
            resolve(false);
          }
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };


  const changeEmailInput = () => {
    setEmail(autoCorrectText);
    document.getElementById("email").value = autoCorrectText;
    setAutoCorrectText("");
  }
  const handleContact = async () => {
    const isEmailValid = await validateEmail();
  
    console.log('isEmailValid', isEmailValid);
  
    if (!isEmailValid) {
      return; // Stop if email validation failed
    }
  
    // Perform phone number validation
    const isPhoneNumberValid = await validatePhoneNumber();
  
    console.log('isPhoneNumberValid', isPhoneNumberValid);
    if (!isPhoneNumberValid) {
      return; // Stop if phone number validation failed
    }
  
    if (firstName === "" || lastName === "" || phoneNumber === "" || email === "") {
      toast.error("Please fill out all fields");
      return;
    }
  
    userData.first_name = firstName;
    userData.last_name = lastName;
    userData.phone_number = phoneNumber;
    userData.email = email;
  
    postDataToRico();
  
    navigate('/submit');
  };

  return (
    <div className="pb-10 bg-dark-purple">
      <Banner setProgress={80} />

      <div className="flex flex-col items-center px-4 py-5 mt-20 formArea justify-top sm:px-6 lg:px-4">
        <div className="space-y-8 m-w-1/2">
          <div>
            <h2 className="mt-4 text-4xl font-extrabold text-center text-white">
              Who Is {company ? company : "The Companies"}{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Main Contact's{" "}
              </span>
              Information
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              {/* make 2 grid columns */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    className="w-full h-16 p-3 mt-5 text-lg font-semibold leading-none text-center text-white rounded appearance-none bg-input-purple"
                    id="fName"
                    name="fName"
                    type="text"
                    label="First Name"
                    placeholder="First Name"
                    autoComplete="given-name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    required={true}
                  />
                </div>
                <div>
                  <input
                    className="w-full h-16 p-3 mt-5 text-lg font-semibold leading-none text-center text-white rounded appearance-none bg-input-purple"
                    id="lName"
                    name="lName"
                    type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    required={true}
                  />
                </div>
              </div>

              <input
                className="w-full h-16 p-3 mt-5 text-lg font-semibold leading-none text-center text-white rounded appearance-none bg-input-purple"
                id="email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="Email Address"
                autoComplete="email"  
                required={true}
              />
              {autoCorrectText ? <p className="pt-4 text-center text-white underline text-md" onClick={changeEmailInput}> Did you mean: {autoCorrectText}?</p> : null}

              <PhoneInput
                className="w-full h-16 p-3 mt-5 text-lg font-semibold leading-none text-center text-white rounded appearance-none bg-input-purple"
                id="phoneNumber"
                country="US"
                name="phoneNumber"
                type="tel"
                label="Phone Number"
                placeholder="Phone Number"
                autoComplete="tel"
                onChange={() => {
                }}
                required={true}
              />
            </div>
            

            <div className="max-w-5xl leading-5 text-center ">
            

<span className="text-white ">
               By clicking, “Get My Free Quote” below, I am providing my consent for Insurtech Groups to use automated technology, including calls, texts, prerecorded messages and emails, to contact me about insurance offers at the number and email provided even if my number is on a corporate, state or national do not call list. This consent is not required to make a purchase.  Clicking the button below constitutes your electronic signature. <a
                   className="text-button-purple "
                   href="https://www.insurtechgroups.com/terms-conditions"
                 >
                   {" "}
                   Terms & conditions
                 </a>{" "} and <a
                   href="https://www.insurtechgroups.com/privacy-policy"
                   className="text-button-purple"
                 >
                   Privacy policy
                 </a>{" "} apply. Msg & data rates may apply. Text “stop” to unsubscribe.


               </span>
            
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`px-6 py-4 mt-5 text-lg justify-center text-center w-full bg-pink-600 ${
                  isButtonDisabled
                    ? "cursor-not-allowed disabled:opacity-75  bg-input-purple"
                    : ""
                } hover:shadow-lg text-white rounded transition duration-200`}
                id="zipCodeButton"
                onClick={(e) => {
                  e.preventDefault();
                  handleContact();
                }}
              >
                Get My Quote
              </button>
            </div>

            <LinkWithQuery to="/business-type">Back</LinkWithQuery>
          </form>
        </div>
      </div>
      <CTA />
    </div>
  );
}
