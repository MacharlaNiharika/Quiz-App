# Quiz-App

Online Test Registration and Examination Portal
Project Description:
This full-stack web application enables users to register, log in, take online exams, and view their results.

Features

Registration Module:
Collects user details: 
Full Name, Email Address, Phone Number, College Name, College ID Number, Profile Picture (50KB - 250KB), College ID Card (100KB - 500KB).
Generates a random password upon successful registration.
Sends the password to the user's registered email address.
Redirects the user to the Login Page.
Login Module:
Allows users to log in using their email and password.
Redirects users to the Dashboard after successful login.
User Dashboard:
Left Panel:
My Courses
Results
Top-Right Profile Section:
Displays user's uploaded profile picture.
On hover, shows a dropdown menu with: My Profile, Change Password, Logout.
Test Interface:
Displays a list of tests for a selected course when "My Courses" is clicked.
Allows users to start tests.
Follows the GATE mock test interface for:
Question layout
Right-side question number ledger (same colors, shapes, fonts)
Numpad for NAT questions
Each test contains:
2 sections
MCQ and NAT question types
Post-Exam Report:
Displays on the Results Page:
Performance Summary: Score, Percentage, Rank.
Detailed Solutions Section: All questions, Correct answer, User's selected option.
Email Notification:
Sends an automatic email to the user after test submission.

Tech Stack:
Frontend: React.js, HTML, CSS, JavaScript
Backend: Node.js
Database: MySQL
Installation
Clone the repository.
Install the backend dependencies: npm install.
Set up the MySQL database and update the connection details in the backend configuration.
Install the frontend dependencies: cd client and then npm install.
Run the backend server: npm start.
Run the frontend development server: npm start or npm run dev.
Usage
Register a new user account.
Log in with your credentials.
Navigate to "My Courses" to view available tests.
Take the tests and view your results.
