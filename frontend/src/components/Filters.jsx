import React from 'react'
import JobType from './JobType'
import SalaryType from './SalaryType'
import Companies from './Companies'

function Filters() {
  return (
    <div >
        <JobType />
        <SalaryType />
        <Companies />
    </div>
  )
}

export default Filters