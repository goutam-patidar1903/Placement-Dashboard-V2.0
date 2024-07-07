import { createSlice } from "@reduxjs/toolkit";

const initialState={
    companies : []
}

export const companySlice = createSlice({
    name : 'company',
    initialState,
    reducers : {
        loadCompanies : (state,action)=>{
            state.companies=action.payload
        },
        addCompany : (state,action)=>{
            // console.log(action.payload);
            const newCompany = action.payload;
            var found=false;
            state.companies.map((cmp)=>{
                if(cmp.company===newCompany) {
                    cmp.count++;
                    found=true;
                }
            });
            if(found===false) state.companies.push({"company":newCompany , "count":1})
        },
        deleteCompany : (state,action)=>{
            var cntZero=false;
            state.companies.map((cmp)=>{
                if(cmp.company===action.payload) {
                    cmp.count--;
                    if(cmp.count === 0) cntZero=true;
                }
            });
            if(cntZero===true) state.companies = state.companies.filter((cmp)=> cmp.company != action.payload);
        },
        editCompany : (state,action)=>{
            const oldCompany = action.payload.oldCompany;
            const newCompany = action.payload.newCompany;
            
            if(oldCompany === newCompany) return;
            
            //delete old company
            var cntZero=false;
            state.companies.map((cmp)=>{
                if(cmp.company===oldCompany) {
                    cmp.count--;
                    if(cmp.count === 0) cntZero=true;
                }
            });
            if(cntZero===true) state.companies = state.companies.filter((cmp)=> cmp.company != oldCompany);

            //add new company
            var found=false;
            state.companies.map((cmp)=>{
                if(cmp.company===newCompany) {
                    cmp.count++;
                    found=true;
                }
            });
            if(found===false) state.companies.push({"company":newCompany , "count":1})

        } 
    
    }
})

export const {loadCompanies , addCompany , deleteCompany , editCompany} = companySlice.actions

export default companySlice.reducer