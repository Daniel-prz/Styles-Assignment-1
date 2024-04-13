import React from "react";

export default function UserProfile({ userData }) {
  return (
    <div>
      <ul className="profiledetails">
        <li>{userData.username}</li>
        <li className="bio">{userData.bio ? userData.bio : "no biography available"}</li>
        <ul>
          hobbies:
          {userData.hobbies
            ? userData.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))
            : "no hobbies listed"}
        </ul>
      </ul>
    </div>
  );
}
