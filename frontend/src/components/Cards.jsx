import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';


function Cards() {
    
  const [filteredStudent, setFilteredStudent] = React.useState([]);
    
      //access students state from studentSlice
      const students = useSelector((state) => {
      // console.log("State : "+JSON.stringify(state));
      // console.log("State Students: "+JSON.stringify(state.students));
      // console.log("State selectedStudent: "+JSON.stringify(state.selectedStudent));
      return state.studentSlice.students} );

      //access filters state from filterSlice
      const filters = useSelector((state)=>{
        
        return state.filterSlice.filter;
      });

      // console.log("Filters : "+ JSON.stringify(filters));
      
      
      React.useEffect(()=>{
        var fs=[];
        const fullTime = filters.jobType.fullTime;
        const internship = filters.jobType.internship;
        const monthly = filters.salaryType.monthly;
        const yearly = filters.salaryType.yearly;

        students.map((student)=>{
          if( fullTime && !internship) {

            if(monthly && !yearly) {
              if(student.placementType==='F' && student.salaryType==='M') fs.push(student);
            }
            else if(yearly && !monthly) {
              if(student.placementType==='F' && student.salaryType==='Y') fs.push(student);
            }
            else {
              if(student.placementType==='F') fs.push(student);
            }

          }
          else if(internship && !fullTime){

            if(monthly && !yearly) {
              if(student.placementType==='I' && student.salaryType==='M') fs.push(student);
            }
            else if(yearly && !monthly) {
              if(student.placementType==='I' && student.salaryType==='Y') fs.push(student);
            }
            else {
              if(student.placementType==='I') fs.push(student);
            }

          }
          else {

            if(monthly && !yearly) {
              if( student.salaryType==='M') fs.push(student);
            }
            else if(yearly && !monthly) {
              if( student.salaryType==='Y') fs.push(student);
            }
            else {
              fs.push(student);
            }

          }

        }); //map ends here


        var newCompanies=filters.companies.filter((company) => company.state );
            if(newCompanies.length>0)
            {
              var filteredStudentByCompany=[];
              fs.forEach((student)=>{
                    newCompanies.forEach((company)=>{
                       if(student.company===company.name) filteredStudentByCompany.push(student);
                    });
              });
        
              fs=[...filteredStudentByCompany];
        
            }

        setFilteredStudent(fs);
    
      },[filters]);



  return (
    <div className='grid grid-cols-2 justify-center'>
        {
            filteredStudent.map((student)=> <Card student={student} key={student._id} />  )
        }
    </div>
  )
}

export default Cards