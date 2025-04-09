import axios from 'axios';
import React from 'react';

const Update = () => {
  const handleUpdate = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const data = { name, age };
    try {
      await axios.put(`https://fsd-backend-sem6.onrender.com/users/${id}`, data);
      alert("User updated successfully");
    } catch (err) {
      alert("Failed to update user");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          .update-form {
            background-color: #fff;
            padding: 2rem 3rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .update-form h1 {
            margin-bottom: 20px;
            color: #333;
          }

          .update-form input[type="text"] {
            padding: 10px;
            width: 250px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          .update-form button {
            padding: 10px 20px;
            background-color: #1976d2;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
          }

          .update-form button:hover {
            background-color: #1565c0;
          }
        `}
      </style>
      <form className="update-form" onSubmit={handleUpdate}>
        <h1>Update User</h1>
        <input type="text" placeholder="Enter user ID" name="id" />
        <input type="text" placeholder="Enter name" name="name" />
        <input type="text" placeholder="Enter age" name="age" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    backgroundColor: '#f4f4f4',
  },
};

export default Update;
