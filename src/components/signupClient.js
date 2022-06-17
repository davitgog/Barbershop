import React, { useState } from "react";
import { Link } from "react-router-dom";
import { singUp } from "../helper/auth";

export default function SignUpClient() {

  const handleSignUp = (e) => 
  {
    e.preventDefault()
    singUp(formValues)
    setFormValues(defaultValues)
    console.log(formValues)
  }
  
  const defaultValues = { telephone: "", name: "", lastname: "", eMail: "", password: "" }

  const [formValues,  setFormValues] = useState (defaultValues)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <div className='font-mono'>
      <div className="flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto p-4">
          <h2 className="text-4xl font-bold text-center py-6">Sign Up As Client</h2>
          <div className="flex flex-col py-2">
            <label>Telephone</label>
            <input value={formValues.telephone} name="telephone" onChange={handleChange} className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Name</label>
            <input value={formValues.name} name="name" onChange={handleChange} className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Lastname</label>
            <input value={formValues.lastname} name="lastname" onChange={handleChange} className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>E-Mail</label>
            <input value={formValues.eMail} name="eMail" onChange={handleChange} className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input value={formValues.password} name="password" onChange={handleChange} className="border p-2" type="password" />
          </div>
          <button onClick={handleSignUp} className="border w-full my-5 py-2 bg-black text-white">
            Sign Up
          </button>
          <Link to={'/signup/barber'} className="flex justify-between">
            <button>Create an account as barber</button>
          </Link>
        </form>
      </div>
    </div>
  );
}