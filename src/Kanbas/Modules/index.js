import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModuleList from './ModulesList';
import './index.css';

function Modules() {
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <div className='col-12 col-lg-10'>
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
            <button type="button" className="btn btn-danger act-button m-1" onClick = {() => {
                setDisplayForm(!displayForm)
              }}>
              <FontAwesomeIcon icon="fa-solid fa-plus" className="color-white me-1"/> Module </button>
            <button type="button"
              className="btn btn-light act-button default-button-background"><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical"
                className="color-black" /></button>
          </div>
        </div>
      </div>
      <ModuleList displayForm={displayForm} setDisplayForm={setDisplayForm}/>
    </div>
  );
}
export default Modules;