"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { uploadAtCloudinary } from "@/utility/uploadAtCloudinary";

function Update() {
  const [updateForm, setUpdateForm] = useState({
    logo: "",
    buttonText: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdatess = async () => {
      try {
        const { data } = await axios.get("/api/updates");
        setUpdates(data.updates || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUpdatess();
  }, [updateForm]);

  // console.log(updates);

  // console.log(updates[0]?._id);
  const handleUpdate = async (id, logo, buttonText) => {
    try {
      await axios.put(`/api/updates/${id}`, {
        logo,
        buttonText,
      });
    } catch (error) {
      console.error("Error updating Update:", error);
    }
  };

  const updateBtnTextInputHandler = (e) => {
    setUpdateForm((pre) => ({ ...pre, buttonText: e.target.value }));
  };

  const uploadImageHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setUpdateForm((pre) => ({ ...pre, logo: file }));
  };

  const onSubmitBtnHandler = async (e) => {
    e.preventDefault();

    if (!updateForm.logo || !updateForm.buttonText) {
      alert("Please fill in all fields.");

      return;
    }
    setIsLoading(true);
    const logoImgUrl = await uploadAtCloudinary(updateForm?.logo);
    if (updates.length > 0 && updates[0]?._id) {
      await handleUpdate(updates[0]._id, logoImgUrl, updateForm?.buttonText);
    
    

      setIsLoading(false);
      alert("logo and text updated");
    }
  };

  return (
    <div className="flex flex-col items-center gap-16  min-w-[50vw] p-8 rounded-md">
      <div className="flex flex-col gap-4  w-full ">
        <h1 className="text-5xl font-semibold text-center text-blue-300 ">Update Segment</h1>
        <h1 className="text-3xl font-medium text-center">Already Existing Data</h1>
        {updates.length !== 0 ? (
          <div className="">
            {updates?.map((up) => (
              <div key={up._id} className="flex flex-col gap-2">
                <div className="flex gap-2 text-xl">
                  Logo Image:
                  <Image
                    src={up.logo}
                    alt="pic-1"
                    width={100}
                    height={100}
                    className=""
                  />
                </div>

                <div className="flex gap-2 text-xl">
                  Header Button Text:
                  <p className="font-semibold">{up.buttonText}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-xl">Loading....</div>
        )}
      </div>
      {/* Update Form */}
      <div className="flex flex-col justify-start gap-4 border-white border p-4 rounded-lg">
        <h1 className="text-3xl text-center font-medium text-blue-300 ">UI Update Form</h1>
        <form onSubmit={onSubmitBtnHandler}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <label>Update Logo:</label>
              <input
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
                name="logo"
                onChange={uploadImageHandler}
              />
            </div>
            <div className="flex gap-2">
              <label>Update Header Text: </label>
              <input
                type="text"
                name="buttonText"
                value={updateForm?.buttonText}
                placeholder="Write button text"
                onChange={updateBtnTextInputHandler}
                className="border border-gray-500 rounded focus:outline-none px-1 text-black"

              />
            </div>
            <button
              type="submit"
              className="bg-gray-700 p-2 text-white rounded-md hover:bg-gray-800"
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
        {/* ))} */}
      </div>
    </div>
  );
}

export default Update;