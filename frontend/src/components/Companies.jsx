import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { companiesChange } from '../store/slices/filterSlice';

function Companies() {

  const dispatch=useDispatch();
  const companies=useSelector(state=>state.companySlice.companies);
  const companiesState=useSelector(state => state.filterSlice.filter.companies);


  const statesChanged=(ev)=>{
    var c=[];
    companiesState.forEach((company)=>{
    if(ev.currentTarget.value===company.name) c.push({name:company.name,state:! (company.state)});
    else c.push(company);
    });
    
    dispatch(companiesChange(c));
    
    }

  return (
    <fieldset className='border-primary p-5'>
        <legend className='px-2 text-white'>Companies</legend>
        
        {
                companies.map((cmp)=>{
                return (
                <span key={cmp.company}>
                <input type='checkbox' onChange={statesChanged} value={cmp.company} className='w-5 h-5' /> <span className='text-white px-3 h-5'>{cmp.company} ({cmp.count})</span> <br/>
                </span>
                )
                })
        }
        
        
        
        
        
        
    </fieldset>
  )
}

export default Companies