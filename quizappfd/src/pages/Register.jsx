import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';


const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    collegeName: '',
    collegeId: '',
    profilePicture: null,
    collegeIdCard: null,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateFileSize = (file, minSizeKB, maxSizeKB) => {
    const sizeKB = file.size / 1024;
    return sizeKB >= minSizeKB && sizeKB <= maxSizeKB;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { profilePicture, collegeIdCard } = formData;

    if (!validateFileSize(profilePicture, 50, 250)) {
      setError('Profile picture must be between 50KB and 250KB.');
      return;
    }

    if (!validateFileSize(collegeIdCard, 100, 500)) {
      setError('College ID card must be between 100KB and 500KB.');
      return;
    }

    const submission = new FormData();
    for (const key in formData) {
      submission.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/register', submission, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        setSuccess('Registration successful! Please check your email for your password.');
        setError('');
        setTimeout(() => window.location.href = '/login', 2000);
      } else {
        setError(response.data.message || 'Registration failed.');
        setSuccess('');
      }
    } catch (err) {
      setError('An error occurred during registration.');
      setSuccess('');
    }
  };

  return (
    <div className="registration-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input type="text" name="fullName" placeholder="Full Name" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input type="text" name="collegeName" placeholder="College Name" required onChange={handleChange} />
        <input type="text" name="collegeId" placeholder="College ID Number" required onChange={handleChange} />
        <label>Upload Profile Picture (50KB - 250KB)</label>
        <input type="file" name="profilePicture" accept="image/*" required onChange={handleChange} />
        <label>Upload College ID Card (100KB - 500KB)</label>
        <input type="file" name="collegeIdCard" accept="image/*,application/pdf" required onChange={handleChange} />

        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}

        <button type="submit">Register</button>
       
      </form>
    </div>
  );
};

export default Register;

