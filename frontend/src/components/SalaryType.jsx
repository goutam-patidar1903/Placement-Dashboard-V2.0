import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { salaryTypeChange } from '../store/slices/filterSlice';

function SalaryType() {

  const dispatch=useDispatch();
  const salaryType=useSelector((state)=>state.filterSlice.filter.salaryType);

  const [monthlyChecked , setMonthlyChecked] = React.useState(salaryType.monthly);
  const [yearlyChecked , setYearlyChecked] = React.useState(salaryType.yearly);

  const statesChanged=(ev)=>{

    var salaryTypes={
      "monthly":monthlyChecked,
      "yearly":yearlyChecked
      };
      
      if(ev.currentTarget.value==='M')
      {
      setMonthlyChecked(ev.currentTarget.checked);
      salaryTypes.monthly=ev.currentTarget.checked;
      }else
      if(ev.currentTarget.value==='Y')
      {
      setYearlyChecked(ev.currentTarget.checked);
      salaryTypes.yearly=ev.currentTarget.checked;
      }

    dispatch(salaryTypeChange(salaryTypes));


  }

  return (
    <fieldset className='border-primary p-5 my-5'>
        <legend className='px-2 text-white'>Salary Type</legend>
        <input type='checkbox'  value='M' checked={monthlyChecked} onChange={statesChanged} className='w-5 h-5' /><span className='text-white px-3 h-5'>Monthly</span><br />
        <input type='checkbox'  value='Y' checked={yearlyChecked} onChange={statesChanged} className='w-5 h-5 ' /><span className='text-white px-3 h-5'>Yearly</span><br/>
    </fieldset>
  )
}

export default SalaryType