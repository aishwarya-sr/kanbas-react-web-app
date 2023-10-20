import { Link, useLocation } from "react-router-dom";
import './navbar.css';
import logo from './resources/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function KanbasNavigation() {
    const links = [{ name: "Account", icon: "fa-solid fa-circle-user" }, { name: "Dashboard", icon: "fas fa-tachometer-alt" }, { name: "Courses", icon: "fa-solid fa-book" }, { name: "Calendar", icon: "fa-regular fa-calendar-days" }, { name: "Inbox", icon: "fa-solid fa-inbox" }, { name: "History", icon: "fa-regular fa-clock" }, { name: "Studio", icon: "fa-solid fa-tv" }, { name: "Commons", icon: "fa-solid fa-arrow-right-from-bracket" }, { name: "Help", icon: "fa-regular fa-circle-question" }];
    const { pathname } = useLocation();
    return (
        <>


            <div className="col-1 d-none d-sm-none d-md-none d-lg-block scrollable" id="navbar">
                <div className="logo">
                    <img src={logo} />
                </div>
                {links.map((link, index) => (
                    <div className={pathname.includes(link.name) ? `nav-element nav-element-active` : `nav-element`} key={index}>
                        
                        <Link
                            key={index}
                            to={link.name === "Courses" ? `/Kanbas/${link.name}/CS5610` : `/Kanbas/${link.name}/`}>
                                {link.name === "Account" ? <FontAwesomeIcon icon={link.icon} className="icon color-gray" /> : <FontAwesomeIcon icon={link.icon} className="icon" />}
                            <div className="text">
                                {link.name}
                            </div>
                        </Link>
                    </div>

                ))}
            </div>
        </>
    );
}
export default KanbasNavigation;