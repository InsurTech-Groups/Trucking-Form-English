import { userData } from '../data/userData';
import { toast } from "react-toastify";
import axios from "axios";

export const postDataToRico = async () => {
  let zip_code = userData.zip_code;
  let city = userData.city;
  let state = userData.state;
  let business_address = userData.business_address;
  let business_city = userData.business_city;
  let business_state = userData.business_state;
  let business_zipcode = userData.business_zipcode;
  let truck_address = userData.truck_address;
  let truck_city = userData.truck_city;
  let truck_state = userData.truck_state;
  let truck_zipcode = userData.truck_zipcode;
  let current_insurance = userData.current_insurance;
  let policy_start_date = userData.policy_start_date;
  let dot_number = userData.dot_number;
  let startDate = userData.startDate;
  let number_of_trucks = userData.number_of_trucks;
  let number_of_trailers = userData.number_of_trailers;
  let business_name = userData.business_name;
  let business_type = userData.business_type;
  let firstName = userData.firstName;
  let lastName = userData.lastName;
  let email = userData.email;
  let phone = userData.phone;


  let data = {
    company_name: business_name,
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    address1: business_address,
    city: business_city, 
    state: business_state,
    zip: business_zipcode,
    dotno: dot_number,
    business_description: business_type,
    business_name: business_name,
    years_in_business: startDate,
    legalname: business_name,
    address: truck_address,
    businesscity: truck_city,
    businessstate: truck_state,
    businesszip: truck_zipcode,
    totalnumtrucks: number_of_trucks,
    totalnumpowunits: number_of_trucks,
    totalnumtrailers: number_of_trailers,
    currentinsurance: current_insurance,
    policyStart: policy_start_date
  };

  console.log('posting this to rico', data);
  

  let url = 'https://leads.ricochet.me/api/v1/lead/create/GMAX-Trucking/?token=ea527c772f0fe84238e916ff02f32ae8&cid=Trucking-Form'

  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      toast.success("Data sent successfully!");
    })
    .catch((error) => {
      console.error('Error:', error);
      //toast.error("Error sending data!");
    });

};
