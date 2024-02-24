"use client";
import React from "react";
import User from "./User";
import Update from "./Update";

function Admin() {
  return (
    <div className="flex flex-col justify-center items-center py-8 gap-8 pt-24">
      <div>
        <h1 className="sm:text-6xl text-4xl  font-bold text-blue-300 tracking-widest">
          Admin Work
        </h1>
      </div>
      <User />
      <Update />
    </div>
  );
}

export default Admin;