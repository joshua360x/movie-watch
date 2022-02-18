import React, { useState } from 'react';
import { signInUser, signupUser } from './services/fetch-utils';

export default function AuthPage({ setAuthUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();

    const userSignedUp = await signupUser(email, password);
    setAuthUser(userSignedUp);
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const userSignedIn = await signInUser(email, password);
    setAuthUser(userSignedIn);
  }

  return (
    <form onSubmit={handleSignIn}>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button>Sign In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </form>
  );
}
