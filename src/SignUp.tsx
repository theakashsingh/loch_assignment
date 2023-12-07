import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [redirect, setRedirect] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email || !email.includes('@') || !email.includes('.')) {
      setIsValidEmail(false);
    } else {
      setRedirect(true);
    }
  };

  if (redirect) {
    window.location.href = 'https://app.loch.one/welcome';
    return null;
  }
  
  return (
    
      <div className="sign_up_box">
        <h3>Sign for exclusive access.</h3>
        <input type="email" name="email" placeholder="Your email address" value={email} onChange={handleEmailChange}/>
        <button onClick={handleSignUp}>Get Started</button>
        <h5>You'll receive an email with an invite link to join.</h5>
      </div>
   
  );
};

export default SignUp;
