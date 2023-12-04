import Nav from "../Nav";
import { Routes, Route, Navigate }
    from "react-router";
import { Link } from "react-router-dom";
import Signin from "./signIn";
import Account from "./account";
import UserTable from "./table";
import Signup from "./signup";
import { useLocation } from "react-router";

function User() {
    const { pathname } = useLocation();
    return (
        //   <Provider store = {store}>
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 m-2">
                    <div class="list-group">
                    <Link to="./Home"
                        className={`list-group-item list-group-item-action ${pathname.includes("Home") ? "active" : ""}`}> HOME</Link>
                        <Link to="./Search"
                        className={`list-group-item list-group-item-action ${pathname.includes("Search") ? "active" : ""}`}> SEARCH</Link>
                        <Link to="./Signin"
                        className={`list-group-item list-group-item-action ${pathname.includes("Signin") ? "active" : ""}`}> SIGN IN</Link>
                        <Link to="./Signup"
                        className={`list-group-item list-group-item-action ${pathname.includes("Signup") ? "active" : ""}`}> SIGN UP</Link>
                        <Link to="./Account"
                        className={`list-group-item list-group-item-action ${pathname.includes("Account") ? "active" : ""}`}> ACCOUNT</Link>
                    </div>
                    </div>
                    <div className="col m-2">
                    <Routes>
                        <Route path="/"
                            element={<Navigate
                                to="Signin" />} />
                        <Route path="/Signin" element={<Signin/>}/>
                        <Route path="/Home" element = {<h1>HOME</h1>}/>
                        <Route path="/Account" element={<Account />} />
                        <Route path="/Account/:id" element={<Account />} />
                        <Route path="/admin/users" element={<UserTable />} />
                        <Route path="/Signup" element={<Signup/>}/>
                        <Route path="/Search" element = {<h1>SEARCH</h1>}/>
                    </Routes>
                    </div>
                </div>
            </div>
        </div>

        //    </Provider>
    );
}

export default User;

