import React from 'react'
import { VscAccount, VscBook, VscBrowser } from "react-icons/vsc";

function Navbar() {
    return (
        <div className='font-mono px-1 py-4'>
            <h1 className='w-full text-3xl font-bold '>
                Barber & I.
            </h1>
                <div className=' grid justify-items-end'>
                    <div className='flex p-4'>
                        <VscBrowser size={23}/ >
                        Home
                    </div>
                    <div className='flex p-4'>
                        <VscAccount size={23}/ >
                        Login
                    </div>
                    <div className='flex p-4'>
                        <VscBook size={23}/ >
                        About Us
                    </div>
                </div>
        </div>
    )
}

export default Navbar