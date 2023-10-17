import React, { useState } from "react";
export default function Users() {
    return (
        <div className="login-container"> 
        <form className="login-form" >
          <h2 className="login-h2"> Login</h2>
          <input
            className="login-input"
            type="name"
            placeholder="Username"
            name="username"
            // value={email}
            // onChange={onChange}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            name="password"
            // value={password}
            // onChange={onChange}
          />
          <button type="submit" className="login-button" >
            Login
          </button>
        </form>
    </div>
    )
}
