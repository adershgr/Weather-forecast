import React from 'react'

function TopButtons() {
    const cities = [
        {
            id:1,
            title: 'Kochi'
        },
        {
            id:2,
            title: 'chennai'
        },
        {
            id:3,
            title: 'Trivandrum'
        },
        {
            id:4,
            title: 'Calicut'
        },
        {
            id:5,
            title: 'Banglore'
        },

    ]
  return (
    <div className='flex items-center justify-around my-6' >
       {
        cities.map((city)=> (
            <button key={(city.id)} className='text-white text-lg font-medium'>{city.title}</button>
        ))
       }
    </div>
  )
}
  

export default TopButtons