import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import './index.css';
import * as service from "./dashboardService.js";
import { addCourse, updateCourse, deleteCourse, setCourse, setCourses } from "../Courses/courseReducer";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {
  const [displayForm, setDisplayForm] = useState(false);
  const [isToAdd, updateIsToAdd] = useState(true);

  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseReducer.courses)
  const course = useSelector((state) => state.courseReducer.course)

  useEffect(() => {
    service.findAllCourses().then(
      (data) => {
        console.log(data);
        dispatch(setCourses(data));
      }
    );
  }, []);

  const handleAddCourse = (course) => {
    service.addCourse(course).then((data) => {
      dispatch(addCourse(data))
    })
  }

  const handleUpdateCourse = (course) => {
    service.updateCourse(course).then((_) => {
      dispatch(updateCourse(course))
    })
  }

  const handledeleteCourse = (courseId) => {
    console.log("DEleetee:", courseId)
    service.deleteCourse(courseId).then((_) => {
      dispatch(deleteCourse(courseId))
    })
  }

  const displayCourseForm = () => {
    return (
      <div className="module-form center">
        <h5>Course</h5>
        <label> Name: </label>
        <input value={course.name} className="form-control mb-3" onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value }))} />
        <label> Course Number: </label>
        <input value={course.number} className="form-control mb-3" onChange={(e) => dispatch(setCourse({ ...course, number: e.target.value }))} />
        <label> Section: </label>
        <input value={course.section} className="form-control mb-3" onChange={(e) => dispatch(setCourse({ ...course, section: e.target.value }))} />
        <label> Start Date: </label>
        <input value={course.startDate} className="form-control mb-3" type="date" onChange={(e) => dispatch(setCourse({ ...course, startDate: e.target.value }))} />
        <label> End Date: </label>
        <input value={course.endDate} className="form-control mb-3" type="date" onChange={(e) => dispatch(setCourse({ ...course, endDate: e.target.value }))} />
        <label> Semester </label>
        <input value={course.semester} className="form-control mb-3"  onChange={(e) => dispatch(setCourse({ ...course, semester: e.target.value }))} />
        <label> Term: </label>
        <input value={course.term} className="form-control mb-3"  onChange={(e) => dispatch(setCourse({ ...course, term: e.target.value }))} />

        <div className="float-end">
          <button type="button" className="btn act-button m-1" onClick={() => {
            isToAdd ? handleAddCourse(course) : handleUpdateCourse(course)
            setDisplayForm(false)
          }}>
            {isToAdd ? "Add" : "Update"} </button>
          <button type="button" className="btn act-button m-1" onClick={() => { setDisplayForm(false) }}>
            Cancel</button>
        </div>
      </div>
    )
  }

  if (!courses) { return <>Empty!</> }
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
                        handledeleteCourse(course._id)
                        // dispatch(deleteCourse(course._id));
                      }} />
                      <FontAwesomeIcon icon="fa-pen-to-square" className="color-gray card-icon float-end" onClick={(event) => {
                        event.preventDefault();
                        updateIsToAdd(false);
                        dispatch(setCourse(course));
                        setDisplayForm(true);
                      }} />
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