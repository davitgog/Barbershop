import React, { useState } from "react";

function Barber({firstName, lastName, price, email, rates}) {
  const [active, setActive] = useState ( JSON.parse(localStorage.getItem("activeUser")) || null)

  return (
      <div className="bg-black text-white w-1/4 mx-5">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{firstName}, {lastName}</div>
            <p className="text-teal-300">Barber</p>
          </div>
          
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              price: {price}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              rating: {rates}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              email: {email}
            </span>
          </div>
          {
            active ? 
            <React.Fragment>
              <button class="bg-gray-200 text-black font-bold py-1 px-3 mx-2 my-1 rounded ">
                leave Review
              </button>
            </React.Fragment>
            :
            <React.Fragment>
              
            </React.Fragment>
          }       
          </div>
      </div>
  );
}

export default Barber