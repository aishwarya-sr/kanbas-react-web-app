import { Link, useParams, useLocation } from "react-router-dom";
import '../index.css';


function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="col-2 d-none d-sm-none d-md-none d-lg-block navbar-side">
      <div style={{ padding: 5, fontSize: 12 }}>
        <p><i>202310_2 Fall 2022 Semester</i></p>
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index} className={`${pathname.includes(link) ? "active" : ""}`}>
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${link}`}> {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default CourseNavigation;
