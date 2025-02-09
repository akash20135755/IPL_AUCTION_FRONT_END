'use client';

import Link from 'next/link';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import styles from './LoginForm.module.css'; // Ensure this path is correct.

const Signup = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const age = parseInt(e.target.age.value.trim(), 10);
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!name || !email || !password || !confirmPassword) {
      return toast.error('All fields are required!');
    }

    if (age < 18) {
      return toast.error('You must be at least 18 years old to sign up.');
    }

    if (password.length < 6) {
      return toast.error('Password must be at least 6 characters long.');
    }

    if (password !== confirmPassword) {
      return toast.error('Passwords do not match!');
    }

    toast.success('Signup successful!');
    router.replace('/');
  };

  return (
    <div
      className={styles.body}
      style={{
        backgroundImage: "url('/image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.square}>
        <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i>

        <div className={styles.login}>
          <h2>Signup</h2>

          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className={styles.inputBx}>
              <input type="text" name="name" placeholder="Name" required />
            </div>

            {/* Age Input */}
            <div className={styles.inputBx}>
              <input type="number" name="age" placeholder="Age" min="1" required />
            </div>

            {/* Email Input */}
            <div className={styles.inputBx}>
              <input type="email" name="email" placeholder="Email" required />
            </div>

            {/* Password Input */}
            <div className={styles.inputBx}>
              <input type="password" name="password" placeholder="Password" required />
            </div>

            {/* Confirm Password Input */}
            <div className={styles.inputBx}>
              <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
            </div>

            {/* Submit Button */}
            <div className={styles.inputBx}>
              <input type="submit" value="Sign Up" />
            </div>
          </form>

          {/* Links */}
          <div className={styles.links}>
            <span>
              Already have an account? 
              <Link href="/login" style={{ marginLeft: '12px' }}>Log In</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;