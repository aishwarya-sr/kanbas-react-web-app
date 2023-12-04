import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      const data = await client.signup(credentials);
      navigate(`../account/${data._id}`);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>SIGN UP!</h1>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <div>
        <div className="form-group row">
          <label for="username" className="col-sm-2 col-form-label">Username:</label>
          <input className="form-control mb-2 w-75" id="username" value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
        </div>
        <div className="form-group row">
          <label for="password" className="col-sm-2 col-form-label">Password:</label>
          <input type="password" className="form-control mb-2 w-75" id="password" value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
        </div>
        <button className="btn btn-danger act-button float-end" onClick={signup}> Signup </button>
      </div>
    </div>
  );
}
export default Signup;