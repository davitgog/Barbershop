import React, { useEffect, useState } from 'react'
import {getBarbers} from "../db/db"
import Barber from "../components/Barber.js"
function Barbers() {



    const [barbers, setBarbers] = useState ([]);
    useEffect(() => {
        setBarbers (getBarbers())
    }, [])

    return (
        <div className='flex flex-wrap'>
            {!barbers?.length ? (
            <p>there are no barbers</p>
          ) : (
            barbers.map((barber) => 
              
                  <Barber
                    key={barber.id}
                    firstName={barber.name}
                    lastName={barber.lastname}
                    price={barber.price}
                    email={barber.email}
                    rates={barber.rating}
                  />
            )
          )}
        </div>
      );
}

export default Barbers