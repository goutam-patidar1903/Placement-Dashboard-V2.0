import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
    students : [],
    selectedStudent : {}
}

export const studentsSlice = createSlice({
    name:"student",
    initialState,
    reducers:{ 
        loadStudent : (state,action)=>{
            // console.log("!!!!!!!!!!!!!!"+JSON.stringify(state));
            state.students=action.payload
        },
        addStudent:(state,action)=>{
            const newStudent=action.payload;
            state.students.push(newStudent);
        },
        editStudent:(state,action)=>{
            // console.log(JSON.stringify(action.payload))
            // state.students = state.students.map((student)=>{
            //     (student.id===action.payload._id)? action.payload : student;
            // })
            state.students = state.students.filter( (student)=> student._id !== action.payload._id);
            state.students.push(action.payload);
            state.selectedStudent={}
        },
        deleteStudent:(state,action)=>{
            state.students = state.students.filter( (student)=> student._id !== action.payload);
            state.selectedStudent={}
        },
        addSelectedStudent:(state,action)=>{
            // console.log("$$$$$"+JSON.stringify(state.selectedStudent));
            state.selectedStudent=action.payload;
            // console.log("$$$$$"+JSON.stringify(state.selectedStudent));
        }

    }
})

export const {loadStudent,addStudent,editStudent,deleteStudent,addSelectedStudent} = studentsSlice.actions

export default studentsSlice.reducer