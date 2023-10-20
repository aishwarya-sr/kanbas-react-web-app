import React from "react";
import { useParams } from "react-router-dom";
import db from "../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul style={{paddingLeft: 0}}>
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div key={index} className="list-group-item list-group-item-secondary m-3 module-list">
              <div className="d-flex justify-content-between p-3">
                <div className="d-flex justify-content-between list-item-container">
                  <div className="color-black m-1 p-1"><FontAwesomeIcon
                    icon="fa-solid fa-grip-vertical" /></div>
                  <div className="color-black m-1 p-1"><FontAwesomeIcon icon="fa-solid fa-caret-right" />
                  </div>
                  <div className="color-black m-1">{module.name} - {module.description}</div>
                </div>
                <div className="d-flex justify-content-between list-item-container">
                  <div className="color-black p-1 color-green"><FontAwesomeIcon
                    icon="fa-solid fa-circle-check" /></div>
                    <div className="color-black p-1 me-1"><FontAwesomeIcon
                    icon="fa-solid fa-caret-down" /></div>
                  <div className="color-gray m-1 p-1"><FontAwesomeIcon
                    icon="fa-solid fa-plus" /></div>
                  <div className="color-black m-1 p-1"><FontAwesomeIcon
                    icon="fa-solid fa-ellipsis-vertical" /></div>
                </div>
              </div>
            </div>
          ))
      }
    </ul>
  );
}
export default ModuleList;