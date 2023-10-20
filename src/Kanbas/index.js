import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import './index.css';
import Courses from "./Courses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Kanbas() {
  const url = useLocation();
  return (
    <>

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
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/:courseId/*" element={<Courses/>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
export default Kanbas;