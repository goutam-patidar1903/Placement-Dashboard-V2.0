import React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import Filters from '../components/Filters';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../store/slices/filterSlice';

const Home = ()=>{

    const dispatch=useDispatch();
    const clickHandler=()=>{
        dispatch(resetFilters(null));
    };

    return (
        <div>
        <div className='flex justify-between'>
             <div>
                <Title />
             </div>
             <div>
                <Link to='/add'>
                    <div className='block bg-primary p-2 text-secondary text-bold rounded-lg' onClick={clickHandler}>Add Student</div>
                </Link>
             </div>
        </div>
        <div className='flex flex-wrap'>
            <div className=''>
                <Filters />
            </div>
            <div>
                <Cards/>
            </div>
        </div>

        </div>
)}

export default Home;