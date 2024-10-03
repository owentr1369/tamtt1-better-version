import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <div>{user.name}</div>
          <div>{user.email}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
