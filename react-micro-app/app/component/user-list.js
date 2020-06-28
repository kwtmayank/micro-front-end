import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

function UserList({ history, handleClick }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  });

  async function getUsers() {
    const userList = await axios.get("http://localhost:3030/users");
    setUsers(userList.data);
  }

  return (
    <div className="container p-1">
      {users.map((item) => (
        <div
          key={"user-" + item.id}
          className="user-item col-6 mb-3 p-2"
          onClick={() => handleClick(item)}
        >
          <div className="col-4">
            <img src={item.image} />
          </div>
          <div className="col-8">
            <p> {item.firstName + " " + item.lastName}</p>
            <span>{item.jobTitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
