import { Link } from "react-router-dom";
import { React, useState } from "react";
import db from "../Database";
import './index.css';
import '../index.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Dashboard({
  courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse
}) {
  const [displayForm, setDisplayForm] = useState(false);
  const [isToAdd, updateIsToAdd] = useState(true);

  const displayCourseForm = () => {
    return (
      <div className="module-form center">
        <h5>Course</h5>
        <input value={course.name} className="form-control mb-3" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <input value={course.number} className="form-control mb-3" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
        <input value={course.startDate} className="form-control mb-3" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
        <input value={course.endDate} className="form-control mb-3" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

         <div className="float-end">
           <button type="button" className="btn act-button m-1" onClick={() => {
            isToAdd ? addNewCourse() : updateCourse()
            setDisplayForm(false)}}>
            {isToAdd ? "Add" : "Update"} </button>
           <button type="button" className="btn act-button m-1" onClick={() => {setDisplayForm(false)}}>
            Cancel</button> 
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="profile-header">
        <div id="name" style={{ fontSize: 38 }}>Dashboard</div>
      </div>
      <div className="scrollable">
        <div className="courses">
          <div className="content-toolbar mb-4">
            <div className="content-toolbar-elements">
              <div className="courses-header first">
                Published Courses ({courses.length})
              </div>
              <div className="float-end">
                <button type="button" className="btn btn-danger act-button" onClick={() => {
                   updateIsToAdd(true)
                   setDisplayForm(true)
                }}>
                  <FontAwesomeIcon icon="fa-solid fa-plus" className="color-white me-1" /> Add new course </button>
              </div>
            </div>
          </div>

          <div className="d-inline-flex flex-column flex-md-row justify-content-start flex-wrap">
            {
              courses.map((course) => (
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                  <div className="card card-main">
                    <div className="card-top">
                      <div className="element float-end">
                        <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" className="card-icon" />
                      </div>
                    </div>
                    <div className="card-body">
                      <label className="text">{course._id + " " + course.section + " " + course.name}</label>
                      <label className="title">{course._id + "." + course.section + "." + course.number}</label>
                      <label className="text-bottom">{course.section + " " + course.semester + " Semester " + course.term + " Term"}</label>
                      <FontAwesomeIcon icon="fa-solid fa-file-pen" className="color-gray card-icon" />
                      <FontAwesomeIcon icon="fa-solid fa-trash" className="color-gray card-icon float-end" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }} />
                      <FontAwesomeIcon icon="fa-pen-to-square" className="color-gray card-icon float-end" onClick={(event) => {
                        event.preventDefault();
                        updateIsToAdd(false);
                        setCourse(course);
                        setDisplayForm(true);
                      }}/>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <div>
         {displayForm ? 
        displayCourseForm()
        : null} 
      </div>
    </>
  );
}
export default Dashboard;