import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchByCat } from '../store/fightersSlice'

const Fighters = () => {
  const [category, setCategory] = useState('Heavyweight')
  const dispatch = useDispatch()
  const { fighters } = useSelector((state) => state.fighters)
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const itemsPerPage = 10;

  const totalPages = Math.ceil(fighters.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = fighters.slice(indexOfFirstItem, indexOfLastItem);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // useEffect(() => {
  //   dispatch(fetchByCat(category))
  // }, [category])

  console.log(fighters);


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

      <div>
        {currentData.map((fighter) => {
          return (
            <li>{fighter.name}</li>
          )

        })}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>

    </>
  )
}

export default Fighters