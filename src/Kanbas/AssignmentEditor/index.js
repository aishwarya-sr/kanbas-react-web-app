import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../Assignment/index.css';


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="col">
            <div className="content-toolbar mb-4">
                <div className="content-toolbar-elements">
                    <div className="first">
                    </div>
                    <div className="float-end">
                        <label className="color-green m-1 p-1"><FontAwesomeIcon
                            icon="fa-solid fa-circle-check" className="me-1"/>Published</label>
                        <button type="button"
                            className="btn btn-light act-button default-button-background"><FontAwesomeIcon
                                icon="fa-solid fa-ellipsis-vertical color-black" className="me-1" /></button>
                    </div>
                </div>
            </div>
            <div>
                <div className="form-group">
                    <label htmlFor="assignmentName">Assignment</label>
                    <input type="email" className="form-control mb-3" id="assignmentName"
                        value={assignment.title}/>
                    <textarea className="form-control mb-3" id="assignmentDesc" rows="4"></textarea>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="points" className="col-sm-2 col-form-label text-right">Points</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control" id="points" value="100" />
                    </div>
                </div>

                <div className="form-group row mb-3">
                    <label htmlFor="points" className="col-sm-2 col-form-label text-right">Assignment
                        Group</label>
                    <div className="col-sm-6">
                        <select className="form-select">
                            <option selected>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="points" className="col-sm-2 col-form-label text-right">Display Grade
                        As</label>
                    <div className="col-sm-6">
                        <select className="form-select">
                            <option selected>Percentage</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label htmlFor="points" className="col-sm-2 col-form-label text-right">Points</label>
                    <div className="col-sm-6">
                        <input type="number" className="form-control" id="points" value="100" />
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-2"></label>
                    <div className="col-sm-6">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value=""
                                id="countTowardsGrade" />
                            <label className="form-check-label" for="countTowardsGrade">
                                Do not count this assignment towards the final grade
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-from-label">Submission Type</label>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="col-sm-7 m-3">
                                <select className="form-select mb-3">
                                    <option selected>Online</option>
                                </select>
                                <div className="form-group mb-3">
                                    <label className="form-check mb-3"><strong>Online Entry
                                        Options</strong></label>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="countTowardsGrade" checked />
                                        <label className="form-check-label" for="countTowardsGrade">
                                            Text Entry
                                        </label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="submissionURL" checked />
                                        <label className="form-check-label" for="submissionURL">
                                            Website URL
                                        </label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="submissionMediaRecordings" checked />
                                        <label className="form-check-label" for="submissionMediaRecordings">
                                            Media Recordings
                                        </label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="submissionAnnotation" />
                                        <label className="form-check-label" for="submissionAnnotation">
                                            Student Annotation
                                        </label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="submissionFileUpload" />
                                        <label className="form-check-label" for="submissionFileUpload">
                                            File Uploads
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className="col-sm-2 col-from-label">Assign</label>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="m-3">
                                <div className="form-group mb-3">
                                    <label htmlFor="assignTo" className="form-check-label">Assign To</label>
                                    <select className="form-select" id="assignTo">
                                        <option selected></option>
                                    </select>
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="dueDate">Due</label>
                                    <input type="datetime-local" className="form-control" id="dueDate"
                                        value="2023-06-01T08:30" />

                                </div>
                                <div className="row mb-3">
                                    <div className="form-group col-6">
                                        <label htmlFor="availableFrom">Available From</label>
                                        <input type="datetime-local" className="form-control mb-3"
                                            id="availableFrom" value="2023-06-01T08:30" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="until">Until</label>
                                        <input type="datetime-local" className="form-control mb-3"
                                            id="until" />
                                    </div>
                                </div>


                            </div>
                            <div className="card-header text-center"><i
                                className="fa-solid fa-plus color-black"></i>Add</div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <input type="checkbox" className="form-check-input" id="notify" />
                    <label className="form-check-label" for="Notify">Notify users that this content has changed</label>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-light act-button  default-button-background float-end">
                        Cancel
                    </Link>
                    <button onClick={handleSave} className="btn btn-danger act-button main-color-button-background float-end me-2">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}


export default AssignmentEditor;