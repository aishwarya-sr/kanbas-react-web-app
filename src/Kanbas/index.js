import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import './index.css';
import Courses from "./Courses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db from "./Database";
import { useState } from "react";
import store from "./Store";
import { Provider } from "react-redux";

function Kanbas() {
  const url = useLocation();
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "NLP",
    number: "CS6120",
    section: "17388",
    startDate: "2023-01-10",
    endDate: "2023-05-15",
    semester: "Spring 2023",
    term: "Full"

  })

  const addNewCourse = () => {
    console.log("Add course!")
    setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  }

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <KanbasNavigation />

          <div className="col">
          <div className="col d-lg-none black-background">
          <div className="profile-header d-flex justify-content-between">
                        <div className="icon"><FontAwesomeIcon icon="fa-solid fa-bars" className= "color-white"/></div>
                        <div className="flex-column-center-align white-text"> 
                            <div>
                            {url.pathname.split('/').at(-1)}
                            </div>
                        <div>
                           
                        </div>
                            </div>
                        <div className="white-text"><FontAwesomeIcon
                            icon="fa-solid fa-glasses" className= "color-white me-2"/>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-down" className= "color-white me-2"/>
                        </div>
                    </div>
                </div>

            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              {/* <Route path="Account" element={} /> */}
              <Route path="Dashboard" element={  <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
} />
              <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;