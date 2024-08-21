import React, { useState } from "react";

const Modal = ({ setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleBackgroundClick = () => {
    setIsModalOpen(false);
    setFormData({
      username: "",
      email: "",
      phone: "",
      dob: "",
    });
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const validateForm = () => {
    if (!formData.username) {
      alert("Username is required.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Invalid email. Please check your email address.");
      return false;
    }

    if (formData.phone.length !== 10 || !/^\d+$/.test(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return false;
    }

    const inputDate = new Date(formData.dob);
    const currentDate = new Date();
    if (currentDate < inputDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");

      // Close the modal and reset the form
      handleBackgroundClick();
    }
  };

  return (
    <div className="modal" onClick={handleBackgroundClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1>Fill Details</h1>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              <h3>Username:</h3>
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">
              <h3>Email Address:</h3>
            </label>
            <input
              id="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">
              <h3>Phone Number:</h3>
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="dob">
              <h3>Date of Birth:</h3>
            </label>
            <input
              id="dob"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <br />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
