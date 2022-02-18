import React, { useState } from 'react';

export default function AuthPage({ setAuthUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSignUp() {}

  function handleSignIn() {}

  return (
    <form onSubmit={handleSignUp}>
      <label>
        Email
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </form>
  );
}
