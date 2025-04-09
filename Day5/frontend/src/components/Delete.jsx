import axios from 'axios';
import React from 'react';

const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    try {
      await axios.delete(`https://fsd-backend-sem6.onrender.com/users/${id}`);
      alert("User deleted successfully");
    } catch (error) {
      alert("Failed to delete user");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          .delete-form {
            background-color: #fff;
            padding: 2rem 3rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .delete-form h2 {
            margin-bottom: 20px;
            color: #333;
          }

          .delete-form input[type="text"] {
            padding: 10px;
            width: 250px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
          }

          .delete-form button {
            padding: 10px 20px;
            background-color: #e53935;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
          }

          .delete-form button:hover {
            background-color: #c62828;
          }
        `}
      </style>
      <form className="delete-form" onSubmit={handleDelete}>
        <h2>Delete User</h2>
        <input type="text" placeholder="Enter user ID" name="id" />
        <br />
        <button type="submit">Delete</button>
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

export default Delete;
