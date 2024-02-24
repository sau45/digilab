"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);
  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("/api/users");
        setUsers(data.users || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col  items-center gap-2 min-w-[50vw] p-8 rounded-md ">
      <h1 className="text-3xl font-semibold">All Users</h1>
      {users.length !== 0 ?<div className="flex flex-col justify-start text-xl">
        {users.map((user, i) => (
          <div className="flex gap-2 tracking-wide" key={user._id}>
            <p>{i + 1}.</p>
            <p key={user._id}>{user.email}</p>
          </div>
        ))}
      </div> : <div className=" h-40 w-full flex items-center justify-center text-xl">Loading....</div>}
    </div>
  );
}
 

export default User;