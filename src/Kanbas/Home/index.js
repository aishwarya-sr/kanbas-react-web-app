import { useState } from "react";
import ModuleList from "../Modules/ModulesList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <>
      <div className='col-12 col-lg-7'>
        <div className="content-toolbar mb-4">
          <div className="content-toolbar-elements">
            <div className="first"></div>
            <div className="float-end">
              <button type="button" className="btn act-button default-button-background m-1">Collapse
                All</button>
              <button type="button" className="btn act-button default-button-background m-1">View
                Progress</button>
              <button className="btn act-button default-button-background dropdown-toggle"
                type="button" id="dropdownMenuButton" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon="fa-solid fa-circle-check" className="color-green me-1" />Publish All
              </button>
              <button type="button" className="btn btn-danger act-button m-1" onClick={() => {
                setDisplayForm(!displayForm);
              }}>
                <FontAwesomeIcon icon="fa-solid fa-plus" className="color-white me-1" /> Module </button>
              <button type="button"
                className="btn btn-light act-button default-button-background"><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical"
                  className="color-black" /></button>
            </div>
          </div>
        </div>
        <ModuleList displayForm={displayForm} setDisplayForm={setDisplayForm}/>
      </div>
      <div className="col-3 d-none d-xl-block">
        <div>
          <p>Course Status</p>
          <div>
            <button type="button" className="btn btn-light"><FontAwesomeIcon
              icon="fa-solid fa-ban"/>Unpublish</button>
            <button type="button" className="btn btn-success" disabled><FontAwesomeIcon
              icon="fa-solid fa-circle-check"/>Published</button>
          </div>
          <div className="list-group mt-3 list-group-flush options">
            <button type="button" className="btn btn-light act-button mb-1">
            <FontAwesomeIcon icon="fa-solid fa-file-export" className="me-1"/>
             Import From Commons</button>
            <button type="button" className="btn btn-light act-button mb-1">
              <FontAwesomeIcon icon="fa-solid fa-file-export" className="me-1"/>Import Existing Content</button>
            <button type="button" className="btn btn-light act-button mb-1">
            <FontAwesomeIcon icon="fa-solid fa-file-export" className="me-1"/>Import From Commons</button>
            <button type="button" className="btn btn-light act-button mb-1">
            <FontAwesomeIcon icon="fa-solid fa-file-export" className="me-1"/>Choose home page</button>
            <button type="button" className="btn btn-light act-button mb-1">
            <FontAwesomeIcon icon="fa-solid fa-file-export" className="me-1"/>View Course Stream</button>
            <button type="button" className="btn btn-light act-button mb-1">
            <FontAwesomeIcon icon="fa-solid fa-file-export" className="me-1"/>New Annoucement</button>
            <button type="button" className="btn btn-light act-button mb-1">
            <FontAwesomeIcon icon="fa-solid fa-file-export" className="me-1"/>New Analytics</button>
            <button type="button" className="btn btn-light act-button mb-1">
            <FontAwesomeIcon icon="fa-solid fa-file-export" className="me-1"/>View Course Notifications</button>
          </div>
        </div>
        <div className="row p-3">
          <div className="col">
            <h5>To Do</h5>
          </div>
          <hr className="pe-3" />
          <ol className="list-group list-group-flush">
            <li className="list-group-item d-flex todo justify-content-between align-items-start">
              <span className="badge bg-danger rounded-circle">1</span>
              <div className="ms-2 me-auto">
                <div><a href="" className="color-main todo">Grade A1 - ENV + HTML</a></div>
                <small>100 points | Sep 15 11:59pm</small>
              </div>

            </li>
          </ol>
        </div>
        <div className="row ps-3 mt-1">
          <div className="col">
            <h5>Coming Up</h5>
          </div>
          <div className="col float-end">
            <p><a href="" className="color-main todo"><FontAwesomeIcon icon="far fa-calendar" className="me-1"/>View Calendar</a></p>
          </div>
          <hr className="pe-3" />
        </div>
        <div className="row px-3">
          <div className="d-flex float-end">
          <FontAwesomeIcon icon="far fa-calendar" className="me-1"/>
            <div className="ps-3">
              <a href="" className="ps-3 color-main todo">Lecture</a><br />
              <small className="ps-3">CS5610.17387.202410</small><br />
              <small className="ps-3">Sep 18 11:59pm</small>
            </div>
          </div>
        </div>
        <div className="row px-3">
          <div className="d-flex float-end">
          <FontAwesomeIcon icon="far fa-calendar" className="me-1"/>
            <div className="ps-3">
              <a href="" className="ps-3 color-main todo">Web development lecture</a><br />
              <small className="ps-3">CS5610.17387.202410</small><br />
              <small className="ps-3">Sep 18 11:59pm</small>
            </div>
          </div>
        </div>
        <div className="row px-3">
          <div className="d-flex float-end">
            <FontAwesomeIcon icon="far fa-calendar" className="me-1"/>
            <div className="ps-3">
              <a href="" className="ps-3 color-main todo">Lecture</a><br />
              <small className="ps-3">CS5610.17387.202410</small><br />
              <small className="ps-3">Sep 18 11:59pm</small>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}
export default Home;


