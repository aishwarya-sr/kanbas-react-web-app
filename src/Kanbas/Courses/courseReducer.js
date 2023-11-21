import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
    course: {}
}

const courseReducer = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload
        },

        addCourse: (state, action) => {
            state.courses = [
                ...state.courses, action.payload
            ]
            state.course = action.payload
        },

        setCourse: (state, action) => {
            state.course = action.payload
        },

        updateCourse: (state, action) => {
            state.courses = state.courses.map((course) => {
                if (course._id === action.payload._id) {
                    return action.payload
                } else {
                    return course
                }
            })
        },

        deleteCourse: (state, action) => {
            state.courses = state.courses.filter((course) => course._id !== action.payload)
        }
    }
})


export const { addCourse, setCourse,
    updateCourse, deleteCourse, setCourses } = courseReducer.actions;
export default courseReducer.reducer;