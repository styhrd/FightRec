import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fighters = () => {
  const [category, setCategory] = useState('Heavyweight')


  // useEffect(async () => {
  //   const response = await axios.get('https://v1.mma.api-sports.io/fighters', {
  //     headers: {
  //       'x-rapidapi-host': 'v1.mma.api-sports.io',
  //       'x-rapidapi-key': '3f8a88f0952f6d91f600e863af380710'
  //     },
  //     params: {
  //       category: category
  //     }
  //   })
  //   console.log(response);

  // }, [category])

  return (
    <>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="Bantamweight">Bantamweight</option>
        <option value="Featherweight">Featherweight</option>
        <option value="Flyweight">Flyweight</option>
        <option value="Heavyweight">Heavyweight</option>
        <option value="Light Heavyweight">Light Heavyweight</option>
        <option value="Lightweight">Lightweight</option>
        <option value="MiddleWeight">MiddleWeight</option>
        <option value="Welterweight">Welterweight</option>
      </select>

    </>
  )
}

export default Fighters