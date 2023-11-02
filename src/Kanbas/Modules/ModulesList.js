import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ModuleList({ displayForm, setDisplayForm }) {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [isToAdd, updateIsToAdd] = useState(true);

  const displayModuleForm = () => {
    return (
      <div className="module-form center">
        <h5>Module</h5>
        <input className="form-control mb-2" value={module.name}
          onChange={(e) => dispatch(setModule({
            ...module, name: e.target.value
          }))}
        />
        <textarea className="form-control mb-2" value={module.description}
          onChange={(e) => dispatch(setModule({
            ...module, description: e.target.value
          }))}
        />
        <div className="float-end">
          <button type="button" className="btn act-button mb-1 me-2" onClick={() => {
            isToAdd ? dispatch(addModule({ ...module, course: courseId })) : dispatch(updateModule(module))
            setDisplayForm(false)
          }}>
            {isToAdd ? "Add" : "Update"} </button>
          <button type="button" className="btn act-button mb-1" onClick={() => {
            updateIsToAdd(true)
            setDisplayForm(false)
          }}>
            Cancel </button>
        </div>
      </div>
    )
  }
  return (
    <ul style={{ paddingLeft: 0 }}>
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
                    icon="fa-solid fa-file-pen" onClick={() => {
                      dispatch(setModule(module))
                      updateIsToAdd(false)
                      setDisplayForm(true)
                    }} /></div>
                  <div className="color-black m-1 p-1"><FontAwesomeIcon
                    icon="fa-solid fa-trash" onClick={() => { dispatch(deleteModule(module._id)) }} /></div>
                  <div className="color-black m-1 p-1"><FontAwesomeIcon
                    icon="fa-solid fa-ellipsis-vertical" /></div>
                </div>
              </div>
            </div>
          ))
      }
      {displayForm ? <div>
        {displayModuleForm()}
      </div>
        : null}
    </ul>
  );
}
export default ModuleList;