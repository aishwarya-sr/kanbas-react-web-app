import { Link } from "react-router-dom";
import db from "../Database";
import './index.css';
import '../index.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Dashboard() {
  const courses = db.courses;
  return (
    <>
      <div className="profile-header">
        <div id="name" style={{ fontSize: 38 }}>Dashboard</div>
      </div>
      <div className="scrollable">
        <div className="courses">
          <div className="courses-header">
            Published Courses ({courses.length})
          </div>
          <div className="d-inline-flex flex-column flex-md-row justify-content-start flex-wrap">
            {
              courses.map((course) => (
                <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
                  <div className="card card-main">
                   
                      <div className="card-top">
                        <div className="element float-end">
                        <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" className="card-icon"/>
                        </div>
                      </div>
                      <div className="card-body">
                        <label className="text">{course._id + " " + course.section + " " + course.name}</label>
                        <label className="title">{course._id + "." + course.section + "." + course.number}</label>
                        <label className="text-bottom">{course.section + " " + course.semester + " Semester " + course.term + " Term"}</label>
                        <FontAwesomeIcon icon="fa-solid fa-file-pen" className="color-gray card-icon"/>
                      </div>
                    </div>
                </Link>
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;