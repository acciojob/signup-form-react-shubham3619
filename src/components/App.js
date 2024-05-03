import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    let error = '';

    if (!name || !email || !gender || !phoneNumber || !password) {
      error = 'All fields are mandatory.';
    } else if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
      error = 'Name is not alphanumeric.';
    } else if (!email.includes('@')) {
      error = 'Email must contain @.';
    } else if (!['male', 'female', 'other'].includes(gender)) {
      error = 'Please identify as male, female or others.';
    } else if (!/^\d+$/.test(phoneNumber)) {
      error = 'Phone Number must contain only numbers.';
    } else if (password.length < 6) {
      error = 'Password must contain at least 6 letters.';
    }

    setErrorMessage(error);

    if (!error) {
      const username = email.split('@')[0];
      alert('Hello ' + username); // Replace with desired action upon successful submission
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} data-testid="name"/><br/><br/>

        <label htmlFor="email">Email address:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} data-testid="email"/><br/><br/>

        <label htmlFor="gender">Gender:</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} data-testid="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br/><br/>

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} data-testid="phoneNumber"/><br/><br/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} data-testid="password"/><br/><br/>

        <button type="submit" data-testid="submit">Submit</button>
      </form>

      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
}


export default App;
