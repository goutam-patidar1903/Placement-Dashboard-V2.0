import './App.css'
import React from 'react';
import {BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import { useDispatch } from 'react-redux';
import { loadStudent } from './store/slices/studentsSlice';
import axios from './axios'
import AddMore from './pages/AddMore';
import DeleteStudent from './pages/DeleteStudent';
import { loadCompanies } from './store/slices/companySlice';
import { loadCompaniesFilter } from './store/slices/filterSlice';


export default function App() {
  const dispatch = useDispatch();

  //load data initially from server
  React.useEffect(()=>{
    
    console.log("useEffect got called")

     const loadData = async ()=>{
      try
      {
        const students = await axios.get('/api/placements');
        // console.log("Student :"+JSON.stringify(students.data));
        dispatch(loadStudent(students.data));

        const companies = await axios.get('/api/companies');
        // console.log("Companies : "+JSON.stringify(companies.data));
        dispatch(loadCompanies(companies.data));


        //setting companies state to filter
        const c=[];
        companies.data.forEach((cmp)=>{
          c.push({name:cmp.company,state:false});
        });
        dispatch(loadCompaniesFilter(c));

        console.log("Data fetched from server");

      }catch(error)
      {
        console.log(error);
      }
    }
    loadData();
  },[])


  return (
    <div className="bg-whole">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddStudent />} />
        <Route path='/edit' element={<EditStudent />} />
        <Route path='/delete' element={<DeleteStudent />} />
        <Route path='/addmore' element={<AddMore />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  )
}