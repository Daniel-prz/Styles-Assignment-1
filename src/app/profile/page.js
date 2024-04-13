import React from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";

export default function Profile() {
  const UserData = {
    username: "User1",
    bio: "Aspiring Programmer, skills include Python and Machine Learning",
    hobbies: ["Going on walks in the local park", "Woodworking", "Gardening"],
  };
  return (
    <div className="profilediv">
      <Header />
      <UserProfile userData={UserData} />
    </div>
  );
}
