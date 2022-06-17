import React, { useState } from "react";
import { Link } from "react-router-dom";
import {login} from "../helper/auth.js"


export default function Login() {


  const handleLogin = (e) => 
  {
    e.preventDefault()
    login(formValues)
    setFormValues(defaultValues)
    console.log(formValues)
    window.location.reload(false);
  }
  
  const defaultValues = {email: "", password: "" }

  const [formValues,  setFormValues] = useState (defaultValues)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
}

  return (
    <div className='font-mono '>
      <div className="flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto p-4">
          <h2 className="text-4xl font-bold text-center py-6">Login</h2>
          <div className="flex flex-col py-2">
            <label>Telephone</label>
            <input value={formValues.email} name="email" onChange={handleChange} className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input value={formValues.password} name="password" onChange={handleChange} className="border p-2" type="password" />
          </div>
          
          <button onClick={handleLogin} className="border w-full my-5 py-2 bg-black text-white">
            Sign In
          </button>
          <Link to={'/signup'} className="flex justify-between">
            <button>
              Create Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
