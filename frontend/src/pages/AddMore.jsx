import React from 'react'
import { Link } from 'react-router-dom'

function AddMore() {
  return (
    <div className='bg-slate-200'>

        <h2 >Do you want to add more ???</h2>
        
        <div className="flex justify-evenly p-2">
                <div className=" py-2 px-4 rounded-md hover:bg-green-300 hover:cursor-pointer " >
                    <Link to='/add'>Y E S</Link>
                </div>
                <div className=" py-2 px-4 rounded-md hover:bg-red-300 hover:cursor-pointer" >
                    <Link to='/'>N O</Link>
                </div>
        </div>
    </div>
  )
}

export default AddMore;