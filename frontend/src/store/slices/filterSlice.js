import { createSlice } from "@reduxjs/toolkit";
import { loadCompanies } from "./companySlice";

const initialState = {
filter : { 
    jobType:{"fullTime" : false , "internship" : false}, 
    salaryType:{"monthly" : false , "yearly" : false}, 
    companies:[],
    intialCompanyState:[]
 }}

export const filterSlice = createSlice({
    name : 'filter',
    initialState,
    reducers : {
        resetFilters : (state,action)=>{
            state.filter.jobType = {"fullTime" : false , "internship" : false};
            state.filter.salaryType = {"monthly" : false , "yearly" : false};
            state.filter.companies=state.filter.intialCompanyState;
        },
        jobTypeChange : (state,action)=>{
            state.filter.jobType = action.payload
        },
        salaryTypeChange : (state,action)=>{
            state.filter.salaryType = action.payload
        },
        companiesChange : (state,action)=>{
            state.filter.companies = action.payload
        },
        loadCompaniesFilter:(state,action)=>{
            console.log("^^^^^^");
            state.filter.companies = action.payload;
            state.filter.intialCompanyState = action.payload;
        }

    }
})

export const {jobTypeChange , salaryTypeChange , companiesChange , resetFilters ,loadCompaniesFilter} = filterSlice.actions

export default filterSlice.reducer