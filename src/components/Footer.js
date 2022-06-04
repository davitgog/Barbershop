import React from 'react'
import {VscGithubInverted, VscTerminalLinux} from "react-icons/vsc";
function Footer() {
  return (
    <div className='fixed inset-x-0 bottom-0 w-full bg-black text-white'>
      <ul className='flex justify-center py-2'>
        <li className='flex pl-4 pr-4'>
          <VscGithubInverted size={23}/>
        </li>
        <li className='pl-4 pr-4'>
          hi
        </li>
        <li className='pl-4 pr-4'>
          hi
        </li>
        <li className='flex pl-4 pr-4'>
          <VscTerminalLinux size={23}/>
        </li>
      </ul>
    </div>
  )
}

export default Footer