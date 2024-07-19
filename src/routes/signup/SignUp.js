import React, { useState } from 'react';
import './signUp.css'

function App() {
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, emailOrPhone, password });
  };
}

const SignUp = () => {
  return (
    <div>SignUp</div>
  )
}

export default SignUp
