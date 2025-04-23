import React from "react";


const Dashbord = () => {
  const user = {
    fullName: "John Doe",
    profilePic: "/default-user.png"
  };

  return (
    <div className="dashbord">
      <div className="main-content">
        <h2>Welcome to Your Dashboard</h2>
        <div className="navigation-links">
          <ul>
            <li><a href="/courses">📘 My Courses</a></li>
            <li><a href="/results">📊 Results</a></li>
            <li><a href="/profile">👤 Profile</a></li>
            <li><a href="/test">📝 Take a Test</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;