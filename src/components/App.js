import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    password: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required.';
    } else if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
      newErrors.name = 'Name must be alphanumeric.';
    }

    if (!email) {
      newErrors.email = 'Email is required.';
    } else if (!email.includes('@')) {
      newErrors.email = 'Email must contain @.';
    }

    if (!gender) {
      newErrors.gender = 'Gender is required.';
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!/^\d+$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Phone Number must contain only numbers.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must contain at least 6 characters.';
    }

    if (Object.keys(newErrors).length === 0) {
      const username = email.split('@')[0];
      alert('Hello ' + username); // Replace with desired action upon successful submission
    }

    setErrors(newErrors);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <span style={{ color: 'red' }}>{errors.name}</span><br/><br/>

        <label htmlFor="email">Email address:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <span style={{ color: 'red' }}>{errors.email}</span><br/><br/>

        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <span style={{ color: 'red' }}>{errors.gender}</span><br/><br/>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        <span style={{ color: 'red' }}>{errors.phoneNumber}</span><br/><br/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <span style={{ color: 'red' }}>{errors.password}</span><br/><br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export default App;
