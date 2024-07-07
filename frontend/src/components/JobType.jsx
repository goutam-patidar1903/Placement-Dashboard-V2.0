import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jobTypeChange } from '../store/slices/filterSlice';

function JobType() {
  
  const dispatch = useDispatch();

  const jobType=useSelector((state)=>state.filterSlice.filter.jobType);

  const [fullTimeChecked,setFullTimeChecked]=React.useState(jobType.fullTime);
  const [internshipChecked,setInternshipChecked]=React.useState(jobType.internship);
        
  const statesChanged=(ev)=>{
        
      var jobTypes={
      "fullTime":fullTimeChecked,
      "internship":internshipChecked
      };
      
      if(ev.currentTarget.value==='F')
      {
      setFullTimeChecked(ev.currentTarget.checked);
      jobTypes.fullTime=ev.currentTarget.checked;
      }else
      if(ev.currentTarget.value==='I')
      {
       setInternshipChecked(ev.currentTarget.checked);
      jobTypes.internship=ev.currentTarget.checked;
      }

    dispatch(jobTypeChange(jobTypes));

  }


  return (
    <fieldset className='border-primary p-5'>
        <legend className='px-2 text-white'>Job Type</legend>
        <input type='checkbox'  value='F' checked={fullTimeChecked} className='w-5 h-5' onChange={statesChanged}/><span className='text-white px-3 h-5'>Full Time</span><br />
        <input type='checkbox'  value='I' checked={internshipChecked} className='w-5 h-5' onChange={statesChanged}/><span className='text-white px-3 h-5'>Internship</span><br/>
    </fieldset>
)
}

export default JobType