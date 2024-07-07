import axios from '../axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteStudent } from '../store/slices/studentsSlice';
import { deleteCompany } from '../store/slices/companySlice';

function DeleteStudent() {
    const student=useSelector(state => state.studentSlice.selectedStudent);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error,setError]=React.useState('');

    const deleteHandler = async ()=>{
        
        const id=student._id;
        try
        {
            const response = await axios.delete(`/api/placements/${id}`)
            
            const dataJSON=response.data;
                if (response.status >= 200 && response.status < 300) {
                    // Response is OK
                    setError('');
                    console.log(`Deleted Student: ${JSON.stringify(dataJSON)}`);
                    dispatch(deleteStudent(dataJSON._id));
                    dispatch(deleteCompany(dataJSON.company));
                    navigate("/");
                }

        }catch(error) {
            const errorJSON=error.response.data;
            setError(errorJSON.error);
        }
    }

  return (
    <div className='bg-whole'>
        <center>

           <div className=' bg-slate-200 rounded-lg p-5 w-[300px]'>

                <div >
                    {
                        error && <div className="text-[red] pb-2 font-bold text-lg">{error}</div>
                    }
                </div>

            <p><span className='font-bold'>Student Details</span></p> <br />

            <p><span className='font-bold'>Id : </span> {student._id}</p>
            <p><span className='font-bold'>Name : </span> {student.name}</p>
            <p><span className='font-bold'>Company : </span> {student.company}</p>
            <p><span className='font-bold'>Placement Type : </span> {(student.placementType==='F')? "Full Time":"Internship"}</p>
            <p><span className='font-bold'>Salary : </span> {(student.salaryType==='Y')? student.salary+" Per Annum" : student.salary+" Per Month"}</p>  <br />

            <div className='flex justify-center'>
                <button className='border-black border-2 p-2 rounded-md mx-2'
                onClick={deleteHandler}>Delete</button>
                <button className='border-black border-2 p-2 rounded-md mx-2' 
                onClick={()=>{navigate('/')}}>Cancel</button>
            </div>


        </div> 
            

           
        </center>
    </div>
  )
}

export default DeleteStudent