import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerBarbers } from "../db/db";

export default function SignUpBarber() {

  const handleSignUpBarber = (e) => 
  {
    e.preventDefault()
    registerBarbers(formValues)
    setFormValues(defaultValues)
    console.log(formValues)
  }
  
  const defaultValues = { telephone: "", name: "", lastname: "", eMail: "", password: "", price: "" }

  const [formValues,  setFormValues] = useState (defaultValues)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <div className='font-mono'>
      <div className="flex flex-col justify-center h-max">
      <form className="max-w-[400px] w-full mx-auto p-4">
          <h2 className="text-4xl font-bold text-center py-6">Sign Up As Barber</h2>
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
          <div className="flex flex-col py-2">
            <label>Price</label>
            <input value={formValues.price} name="price" onChange={handleChange} className="border p-2" type="text" />
          </div>
          <button onClick={handleSignUpBarber} className="border w-full my-5 py-2 bg-black text-white">
            Sign Up
          </button>
          <Link to={'signup/client'} className="flex justify-between">
            <button>Create an account as Client</button>
          </Link>
        </form>
      </div>
    </div>
  );
}