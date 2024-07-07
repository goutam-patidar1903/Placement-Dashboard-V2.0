import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { combineSlices } from "@reduxjs/toolkit";

import studentReducer from './slices/studentsSlice';
import companyReducer from './slices/companySlice';
import filterSlice from "./slices/filterSlice";

// export const rootReducer = combineSlices(studentReducer ,companyReducer );

export const store = configureStore({
    reducer :  {
        studentSlice : studentReducer,
        companySlice : companyReducer,
        filterSlice : filterSlice
    }

    // reducer : rootReducer
    
})

export default store;