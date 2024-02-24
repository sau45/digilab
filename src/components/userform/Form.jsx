"use client";
import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setEmailError("Please enter a valid email address");
      return;
    }
   
    try {
      const response = await axios.post("/api/users", {
        email,
      });
      // console.log("Response from backend:", response.data);
      setEmail("");
      setEmailError("");
      alert("Email Submitted");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="flex  justify-center items-center pt-60 pb-44 pr-44 pl-44">
      <div className="flex flex-col justify-center items-center gap-7 rounded-xl h-80 ">
        <h1
          className="text-4xl font-semibold whitespace-nowrap text-blue-300 
      "
        >
          Type Your Email
        </h1>
        <form onSubmit={handleSubmit} className="flex  gap-2">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border-2 rounded-md  bg-gray-500 text-white"
          />

          <button
            type="submit"
            className="border-2 px-8 py-2 rounded-md "
          >
            Submit
          </button>
        </form>
        <p style={{ color: "red" }}>{emailError}</p>
      </div>
    </div>
  );
}

export default Form;