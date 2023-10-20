import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css';
import '../Modules/index.css';

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="col">
            <div className="content-toolbar mb-4">
                <div className="content-toolbar-elements">
                    <div className="first">
                        <form>
                            <input type="search" placeholder="Search for assignment"
                                className="form-control w-25" />
                        </form>
                    </div>

                    <div className="float-end">
                        <button type="button"
                            className="btn btn-light act-button default-button-backgroun me-1"><FontAwesomeIcon
                                icon="fa-solid fa-plus" className="color-black me-1" />Group</button>
                        <button type="button"
                            className="btn btn-danger act-button me-1"><FontAwesomeIcon
                                icon="fa-solid fa-plus" className="color-black me-1" />Assignment</button>
                        <button type="button"
                            className="btn btn-light act-button default-button-background"><FontAwesomeIcon
                                icon="fa-solid fa-ellipsis-vertical" className="color-black me-1" /></button>
                    </div>
                </div>
            </div>
            <div className="list-group">
                <div className="list-group-item disabled group-header">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between list-item-container">
                            <div className="color-black m-1 p-1"><FontAwesomeIcon
                                icon="fa-solid fa-grip-vertical" className="color-gray" /></div>
                            <div className="color-black m-1 p-1"><FontAwesomeIcon icon="fa-solid fa-caret-down" />
                            </div>
                            <div className="color-black m-1">Assignments</div>
                        </div>
                        <div className="d-flex justify-content-between list-item-container">
                            <button type="button" className="btn btn-light rounded-pill act-button">40% of
                                total</button>
                            <div className="color-black m-1 p-1"><FontAwesomeIcon icon="fa-solid fa-plus" /></div>
                            <div className="color-black m-1 p-1"><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></div>
                        </div>
                    </div>
                </div>
                <div className="assignment-data">
                    {courseAssignments.map((assignment) => (
                        <div className="list-group-item" key={assignment._id}>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex justify-content-between list-item-container">
                                    <div className="color-black m-1 p-1"><FontAwesomeIcon
                                        icon="fa-solid fa-grip-vertical" /></div>
                                    <div className="color-green m-1 p-3"><FontAwesomeIcon
                                        icon="fa-regular fa-pen-to-square" /></div>
                                    <div className="assignment-details">
                                        <Link
                                            key={assignment._id}
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ textDecoration: 0 }}>
                                            <h6 className="color-black">{assignment.title}</h6>
                                        </Link>
                                        <label className="color-main">Multiple Modules</label> | <label className="color-gray">{assignment.dueDate}</label> | <label className="color-gray">{assignment.points} points</label>

                                    </div>
                                </div>
                                <div className="d-flex justify-content-between list-item-container">
                                    <div className="color-green m-1 p-3"><FontAwesomeIcon
                                        icon="fa-solid fa-circle-check" /></div>
                                    <div className="color-black m-1 p-1"><FontAwesomeIcon
                                        icon="fa-solid fa-ellipsis-vertical" /></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Assignments;