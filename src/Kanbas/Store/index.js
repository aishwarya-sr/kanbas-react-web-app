import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Modules/modulesReducer";
import courseReducer from "../Courses/courseReducer";


const store = configureStore({
  reducer: {
    modulesReducer,
    courseReducer
  }
});


export default store;