import React, { useState, useEffect } from "react";
import Banner from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
import CTA from "../components/CTA";
import { LinkWithQuery } from "../components/BackButton";
import { toast } from "react-toastify";
import { userData } from "../data/userData";
import { AddressAutofill } from "@mapbox/search-js-react";
import { businessAddress, truckAddress } from "../data/addToUserData";
import { Switch } from '@headlessui/react'


function BusinessAddress() {
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [sameAddress, setSameAddress] = useState(true)
  const [smallText, setSmallText] = useState('')

  useEffect(() => {
    if (sameAddress) {
      setSmallText('Are')
    } else {
      setSmallText('Are Not')
    }
    
    console.log('changed')

    console.log(sameAddress)
  }, [sameAddress])

  let color = '#1d2537'
  
  let lat = userData.lat
  let lon = userData.lon 

  let s = userData.business_address;
  let c = userData.business_city;
  let st = userData.business_state;
  let z = userData.business_zipcode

  useEffect(() => {
    if (s !== "" && c !== "" && st !== "" && z !== "") {
      setIsButtonDisabled(false);
    }
  }, []);

  function handleAddress(e) {

    e.preventDefault();

    let street = document.getElementById('street').value;
    let secondary = document.getElementById('secondary').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let zipcode = document.getElementById('zipcode').value;

    street = street + ' ' + secondary;

    if (street === " " || street === "") {
      toast.error('Please enter a valid address');
      return
    }
    else {
      
      
      if (sameAddress === true) {
        businessAddress(street, city, state, zipcode);
        truckAddress(street, city, state, zipcode);
        navigate('/current-insurance')
      }
      else {
        businessAddress(street, city, state, zipcode);
        navigate('/trucking-address')
        
      }
    }   
  }

  return (
    <div className="pb-10 bg-dark-purple">
      <Banner setProgress={80} />

      <div className="flex flex-col items-center px-4 py-5 mt-20 formArea justify-top sm:px-6 lg:px-4">
        <div className="space-y-8 m-w-1/2">
          <div>
            <h2 className="mt-4 text-4xl font-extrabold text-center text-white">
              What is your current{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                Business Address
              </span>
              ?
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <AddressAutofill
              accessToken={
                "pk.eyJ1IjoiaW5zdXJ0ZWNoZ3JvdXBzIiwiYSI6ImNsZXdpeDViczBudmkzcnBpY3Fwb2R0NWkifQ.D3DfQTB9A_PXeXEVSddYUQ"
              }
              theme={{
                variables: {
                colorBackground: color,
                  colorText: 'white',
                  fontFamily: 'ThiccBoi, sans-serif',
                  borderRadius: '10px',
                  colorBackgroundActive: '#0f172a',
                  colorBackgroundHover: '#8b46ff'
                  
                
                }
              }}
              confirmOnBrowserAutofill={{
                minimap: true,
              }}

              popoverOptions={{
                placement: 'bottom-start',
                flip: true,
                offset: 5,
                
              }}
              
             
              browserAutofillEnabled={true}
            
              
            >
              <input
                className="w-full h-16 p-3 text-lg font-semibold leading-none text-center text-white rounded appearance-none bg-input-purple"
                id="street"
                name="street"
                type="text"
                label="street"
                placeholder="Enter your address..."
                required={true}
                defaultValue={s}
                autoComplete="address-line1"
                onChange={() => {
                  setIsButtonDisabled(false);
                }}
            
               
              />
               </AddressAutofill>
               <input
                className="w-full h-16 p-3 mt-5 text-lg font-semibold leading-none text-center text-white rounded appearance-none bg-input-purple"
                id="secondary"
                name="secondary"
                type="text"
                label="secondary"
                placeholder="Suite, Apartment, PO Box"
                autoComplete="address-line2"                
              />

              <div>
                {/* make 2 grid columns */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                  <input
                className="w-full h-16 p-3 mt-5 text-lg font-semibold leading-none text-center text-gray-500 rounded appearance-none bg-input-purple"
                id="city"
                name="city"
                    type="text"
                    defaultValue={c}
                    label="city"

                placeholder="City"
                autoComplete="address-level2"

                required={true}
                
                    />
                  </div>
                  <div>
                  <input
                className="w-full h-16 p-3 mt-5 text-lg font-semibold leading-none text-center text-gray-500 rounded appearance-none bg-input-purple"
                id="state"
                name="state"
                type="text"
                    label="state"
defaultValue={st}
                placeholder="State"
                autoComplete="address-level1"

                required={true}
                
                    />
                  </div>

                  <div>
                  <input
                className="w-full h-16 p-3 mt-5 text-lg font-semibold leading-none text-center text-gray-500 rounded appearance-none bg-input-purple"
                id="zipcode"
                name="zipcode"
                type="text"
                label="zipcode"
                    placeholder="Zipcode"
                    defaultValue={z}

                autoComplete="postal-code"

                required={true}
                
                    />
                  </div>

                  </div>
              </div>
            <Switch
      checked={sameAddress}
      onChange={setSameAddress}
      className={`${
        sameAddress ? 'bg-button-purple' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
     
      <span
        className={`${
          sameAddress ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-input-purple transition`}
              />

            </Switch>
            <span className="pl-5 text-lg text-white">My Vehicles {smallText} Parked At This Address </span>

            <div className="leading-5 ">
              <button
                type="submit"
                disabled={isButtonDisabled}
                className={`px-6 py-4 mt-5 text-lg justify-center text-center w-full bg-pink-600 ${
                  isButtonDisabled
                    ? "cursor-not-allowed disabled:opacity-75  bg-input-purple"
                    : ""
                } hover:shadow-lg text-white rounded transition duration-200`}
                id="zipCodeButton"
                onClick={handleAddress}
              >
                Next
              </button>
            </div>

            <LinkWithQuery to="/">Back</LinkWithQuery>
          </form>
        </div>
      </div>
      <CTA />
    </div>
  );
}

export default BusinessAddress;
