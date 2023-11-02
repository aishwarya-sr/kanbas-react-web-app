import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css';
import Modules from "../Modules";
import Home from "../Home";
import Assignment from "../Assignment";
import AssignmentEditor from "../AssignmentEditor";

function Courses({courses}) {
  const { courseId  } = useParams();
  const currentPath = useLocation();
  console.log("Coursess:", courses)
  const course = courses.find((x) => x._id === courseId)//db.courses.find((course) => course._id === (courseId));
  return (
    <div>
     
      <div className="col d-none d-lg-block">
        <nav aria-label="breadcrumb" className="profile-header breadcrumb d-flex justify-content-between">
          <ol className="breadcrumb">
            <li><FontAwesomeIcon icon="fa-solid fa-bars" className="icon" /></li>
            <li className="section">
              {/* {course._id}.{course.number}.{course.section} */ }
             </li>
            <li className="element" style={{ color: "grey" }}> {'>'} </li>
            <li className="element">{currentPath.pathname.split('/').at(-1)}</li>
          </ol>
          <button type="button" className="btn btn-light act-button default-button-background"><FontAwesomeIcon icon="fa-solid fa-glasses"
            className="color-black m-1" />Student View</button>
        </nav>
      </div>

      <div className="container-fluid">
        <div className="row scrollable">
        <CourseNavigation />
        <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignment/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
            {/* <Route path="Grades" element={<h1>Grades</h1>} /> */}
          </Routes>
        </div>
      </div>
      <div>
      </div>

    </div>
  );
}
export default Courses;