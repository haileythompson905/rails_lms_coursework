import React from 'react';

const User = ({ user, fullName }) => {
  return (
    <>
      <h1>{fullName}</h1>
      <a>Edit</a>
      <a>Delete</a>
      <h2>Courses</h2>
      
    </>
  )
}

export default User;