'use client'
import React from 'react'
import Link from 'next/link';
import styles from './LoginForm.module.css';
import { useRouter } from 'next/navigation';

const LogIn = () => {
    const router = useRouter();

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
        }}
      >
        <header className={`${styles.header} `}>
          <h1>Gratias!!</h1>
          <h2>ipl  Auction Simulator</h2>
        </header>
  
        <div className={styles.square}>
          <i style={{ "--clr": "#00ff0a" }}></i>
          <i style={{ "--clr": "#ff0057" }}></i>
          <i style={{ "--clr": "#fffd44" }}></i>
          <div className={styles.login}>
            <h2>Login</h2>
  
            {/* Username Field */}
            <div className={styles.inputBx}>
              <input type="text" placeholder="Username" />
            </div>
  
            {/* Password Field */}
            <div className={styles.inputBx}>
              <input type="password" placeholder="Password" />
            </div>
  
            {/* Submit Button */}
            <div className={styles.inputBx}>
              <input type="submit" value="Sign in" />
            </div>
  
            {/* Links */}
            <div className={styles.links}>
              <span>
                Don't have an account?   
                <Link href="/signup" style={{ marginLeft: "12px" }}>Signup</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LogIn;