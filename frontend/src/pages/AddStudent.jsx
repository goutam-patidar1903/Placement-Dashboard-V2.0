import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { useDispatch } from "react-redux";
import { addStudent } from "../store/slices/studentsSlice";
import { addCompany } from "../store/slices/companySlice";

const AddStudent = ()=>{
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const [_id,setId] = React.useState(0);
    const [name,setName] = React.useState("");
    const [company,setCompany] = React.useState("");
    const [placementType,setPlacementType] = React.useState('F');
    const [salary,setSalary] = React.useState(0);
    const [salaryType,setSalaryType] = React.useState('Y');
    const [fullTimeChecked,setFullTimeChecked]=React.useState("checked");
    const [internshipChecked,setInternshipChecked]=React.useState("");
    const [error,setError]=React.useState('');
    const [emptyFields,setEmptyFields]=React.useState([]);

    const placementTypeChanged=(ev)=>{
        if(ev.target.value==='F' && ev.target.checked)
        {
        setPlacementType("F");
        setFullTimeChecked("checked");
        setInternshipChecked("");
        }
        if(ev.target.value==='I' && ev.target.checked)
        {
        setPlacementType("I");
        setFullTimeChecked("");
        setInternshipChecked("checked");
        }
        }

        const saveHandler=async (ev)=>{
            ev.preventDefault();

            const student = {_id , name , placementType , company , salary , salaryType};

            try
            {
                const response = await axios.post('/api/placements',student,{
                    headers:{
                        'Content-Type':'application/json'
                    }
                });
                const dataJSON=response.data;
                if (response.status >= 200 && response.status < 300) {
                    // Response is OK
                    setId(0);
                    setName('');
                    setCompany('');
                    setSalary(0);
                    setSalaryType('Y');
                    setPlacementType('F');
                    setEmptyFields([]);
                    console.log(`New workout added successfully: ${JSON.stringify(dataJSON)}`);
                    dispatch(addStudent(dataJSON));
                    dispatch(addCompany(dataJSON.company));
                    navigate("/addmore");
                  }
            }catch(error)
            {   
                const errorJSON=error.response.data;
                console.log(errorJSON);
                setError(errorJSON.error);
                console.log(errorJSON.emptyFields);
                setEmptyFields(errorJSON.emptyFields);
            }
            
        }

    return (
        <div className="flex flex-col justify-center">
        
            <div>
                <h1 className="text-primary text-center">Add New Records</h1>
            </div>
            <div className=" bg-slate-200 w-auto p-8 rounded-lg">
                <div >
                    {
                        error && <div className="text-[red] pb-2 font-bold text-lg">{error}</div>
                    }
                </div>
                <div className="grid grid-cols-12 justify-center m-2">
                <label htmlFor="id" className="col-span-5" >Id : </label>
                <input type="number" id="id" className="col-span-7 px-2" value={_id} 
                onChange={(ev)=>{setId(ev.target.value)}}
                style={emptyFields.includes('id')? {border: '2px solid red'} : {}}
                />
                </div>
                
                <div className="grid grid-cols-12 justify-center m-2">
                <label htmlFor="name" className="col-span-5" >Name : </label>
                <input type="text" id="name" className="col-span-7 px-2" value={name} 
                onChange={(ev)=>{setName(ev.target.value)}}
                style={emptyFields.includes('name')? {border: '2px solid red'} : {}}
                />
                </div>
               
                <div className="grid grid-cols-12 justify-center m-2">
                <label htmlFor="company" className="col-span-5" >Company : </label>
                <input type="text" id="company" className="col-span-7 px-2" value={company} 
                onChange={(ev)=>{setCompany(ev.target.value)}}
                style={emptyFields.includes('company')? {border: '2px solid red'} : {}}
                />
                </div>
               
                <div className="grid grid-cols-12 justify-center m-2">
                <label htmlFor="placementType" className="col-span-5" > PlacementType : </label>
                <div className="col-span-7 flex justify-around">
                <input type='radio' id='placementType' value='F' name='placementType' checked={fullTimeChecked} onChange={placementTypeChanged}></input> Full Time 
                <input type='radio' id='placementType' value='I' name='placementType' checked={internshipChecked} onChange={placementTypeChanged}></input> Internship
                </div>
                </div>
               
                <div className="grid grid-cols-12 justify-center m-2">
                <label htmlFor="salary" className="col-span-5" >Salary : </label>
                <div className="flex max-sm:flex-wrap">
                <input type="number" className="col-span-7 px-2" value={salary} 
                onChange={(ev)=>{setSalary(ev.target.value)}}
                style={emptyFields.includes('salary')? {border: '2px solid red'} : {}}
                />
                <select id='salaryType' className="mx-2" value={salaryType} onChange={(ev)=>{setSalaryType(ev.target.value)}}>
                <option value='Y'>Per Annum</option>
                <option value='M'>Per Month</option>
                </select>
                </div>
                </div>

                <div className="flex justify-evenly p-2">
                <div className=" py-2 px-4 rounded-md hover:bg-green-300 hover:cursor-pointer " onClick={saveHandler}>
                    Save
                </div>
                <div className=" py-2 px-4 rounded-md hover:bg-red-300 hover:cursor-pointer" onClick={()=>{navigate("/")}}>
                    Cancel
                </div>
                
            </div>

            </div>
            
        </div>
    )
}

export default AddStudent;
