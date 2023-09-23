import "./Getcampaign.css";
import { useEffect, useState } from "react";
import Select from "react-select";

import Navbar from "../../component/navbar/Navbar";

const Getcampaign = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    urlLink: "",
    email: "",
    phoneNumber: "",
    websiteURL: "",
    payment: "",
    comments: "",
    isAgreed: true,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const CountrySelect = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      fetch(
        "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
      )
        .then((response) => response.json())
        .then((data) => {
          setCountries(data.countries);
          setSelectedCountry(data.userSelectValue);
        });
    }, []);
    return (
      <Select
        id="country"
        options={countries}
        value={selectedCountry}
        onChange={(selectedOption) => setSelectedCountry(selectedOption)}
      />
    );
  };

  return (
    <div className="getcampaign-container section--padding">
      <Navbar />
      <h2>Contact Our Sales Team</h2>
      <form>
        <div className="input-row-box">
          <div className="input-box">
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
            />
          </div>
          <div className="input-box">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>
        </div>
        <div className="input-row-box">
          <div className="input-box">
            <label>Company Name *</label>
            <input
              type="text"
              name="companyName"
              onChange={handleChange}
              value={formData.companyName}
            />
          </div>
          <div className="input-box">
            <label>URL*</label>
            <input
              type="text"
              name="urlLink"
              onChange={handleChange}
              value={formData.urlLink}
            />
          </div>
        </div>
        <div className="input-column-box">
          <label>Email *</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="input-column-box">
          <label>Company registration country*</label>
          <CountrySelect />
        </div>
        <div className="input-column-box">
          <label>Phone Number *</label>
          <input
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
          />
        </div>
        <div className="input-column-box">
          <label>Website URL *</label>
          <input
            type="text"
            name="websiteURL"
            onChange={handleChange}
            value={formData.websiteURL}
          />
        </div>
        <div className="radio-box">
          <label>Transaction type *</label>
          <br />
          <input type="radio" id="option1" name="payment" value="option1" />
          <label htmlFor="option1"> My customers swipe a card to pay</label>
          <br />
          <input type="radio" id="option2" name="payment" value="option2" />
          <label htmlFor="option2">
            {" "}
            My customers pay online through a checkout process
          </label>
          <br />
          <input type="radio" id="option3" name="payment" value="option3" />
          <label htmlFor="option3">
            {" "}
            My customers can swipe a card or pay online
          </label>
        </div>
        <div className="input-column-box">
          <label>Tell us more about your payments requirement:</label>
          <textarea
            name="comments"
            onChange={handleChange}
            value={formData.comments}
          />
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            name="isAgreed"
            checked={formData.isAgreed}
            id="isAgreed"
            onChange={handleChange}
          />{" "}
          <label htmlFor="isAgreed">
            I agree to receive other communications from Playclone.com.*
          </label>
        </div>
        <div className="input-column-box">
          <button className="form-btn">Submit</button>
        </div>
      </form>
      <hr style={{ marginTop: "2rem" }} />
      <footer>All rights reserved by Jannis 2023.</footer>
    </div>
  );
};

export default Getcampaign;
