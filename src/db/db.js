const barbers = [
    {
        id : 1,
        name : "zviadi",
        lastname : "zviadauri",
        email : "zviadi@zviadichi.zd",
        address : "zedazenis 1121",
        price : 77.99,
        rating : 9
    },
    {
        id: 2,
        name : "aleksandre",
        lastname : "aleksandreuli",
        email : "aleksandre@hinkali.com",
        address : "universitetis 3",
        price : 3.14,
        rating : 0
    }
]

export function getBarbers ()
{
    return barbers.map(e => e);
}

export function registerBarbers (barber)
{
    barbers.push({...barber,id:new Date ().getTime()});
}