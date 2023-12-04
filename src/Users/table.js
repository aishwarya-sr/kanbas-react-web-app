import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsFillCheckCircleFill, BsTrash3Fill, BsPlusCircleFill, BsPencil }
  from "react-icons/bs";
import { Link } from "react-router-dom";

function UserTable() {
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });

  const selectUser = async (user) => {
    setError("")
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      setError(err.response.data.message)
      console.log(err);
    }
  };

  const updateUser = async () => {
    setError("")
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      setError(err.response.data.message)
      console.log(err);
    }
  }

  const createUser = async () => {
    setError("")
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      setError(err.response.data.message)
      console.log(err);
    }
  }

  const deleteUser = async (user) => {
    setError("")
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      setError(err.response.data.message)
      console.log(err);
    }
  }

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h1>User List</h1>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
          <td className="text-nowrap row">
              <input className="form-control w-50 me-2" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}/>
              <input  className="form-control w-25"  value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            </td>
            <td>
              <input className="form-control w-75"  value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input className="form-control w-75" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select  className="form-control w-75" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className="text-nowrap">
    <BsFillCheckCircleFill onClick={updateUser}
      className="me-2 text-success fs-1 text" />
    <BsPlusCircleFill onClick={createUser}
      className="text-success fs-1 text" />
  </td>
          </tr>

        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
              <Link to={`../account/${user._id}`} style={{textDecoration:0}}>
              {user.username}
              </Link></td>
             
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
    <button className="btn btn-danger me-2">
      <BsTrash3Fill onClick={() => deleteUser(user)} />
    </button>
    <button className="btn btn-warning me-2">
      <BsPencil onClick={() => selectUser(user)} />
    </button>
  </td>

            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;