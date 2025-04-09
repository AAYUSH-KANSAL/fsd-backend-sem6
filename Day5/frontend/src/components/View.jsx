import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    viewdata();
  }, []);

  const viewdata = async () => {
    try {
      const res = await axios.get('https://fsd-backend-sem6.onrender.com/users');
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          .user-table {
            border-collapse: collapse;
            width: 80%;
            margin: auto;
            margin-top: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
          }

          .user-table th, .user-table td {
            padding: 12px 16px;
            border-bottom: 1px solid #ddd;
            text-align: center;
            font-size: 16px;
          }

          .user-table th {
            background-color: #4caf50;
            color: white;
            font-weight: 600;
          }

          .user-table tr:hover {
            background-color: #f1f1f1;
          }

          h1 {
            text-align: center;
            color: #333;
            margin-top: 20px;
          }
        `}
      </style>

      <h1>Registered Users List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
};

export default View;
