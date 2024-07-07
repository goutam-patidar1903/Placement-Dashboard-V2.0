import React from 'react'
import { useDispatch } from 'react-redux'
import { addSelectedStudent } from '../store/slices/studentsSlice'
import { useNavigate } from 'react-router-dom';
import { resetFilters } from '../store/slices/filterSlice';

function Card({student}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const actionHandler=(action)=>{
    dispatch(resetFilters(null));
    dispatch(addSelectedStudent(student));
    navigate(`/${action}`);
  }

  return (
    <div className='flex bg-white m-2 p-5 rounded-md shadow-lg align-middle justify-between w-auto h-auto'>
        <div className='w-full'>
            <p><span className='font-bold'>Id : </span> {student._id}</p>
            <p><span className='font-bold'>Name : </span> {student.name}</p>
            <p><span className='font-bold'>Company : </span> {student.company}</p>
            <p><span className='font-bold'>Placement Type : </span> {(student.placementType==='F')? "Full Time":"Internship"}</p>
            <p><span className='font-bold'>Salary : </span> {(student.salaryType==='Y')? student.salary+" Per Annum" : student.salary+" Per Month"}</p>
        </div>
    
        <div className='flex'>
        <div className='material-symbols-outlined ps-8 hover:text-green-700 hover:cursor-pointer' id={student._id} onClick={()=>{actionHandler('edit')}}>
        edit
        </div>
        <div className='material-symbols-outlined ps-3 hover:text-red-700 hover:cursor-pointer' id={student._id} onClick={()=>{actionHandler('delete')}}>
        delete
        </div>
        </div>

    </div>
  )
}

export default Card