import React from 'react';
import axios from 'axios';

const Register = () => {
  const handleregister = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      age: e.target.age.value,
    };
    try {
      await axios.post('https://fsd-backend-sem6.onrender.com/users', user);
      alert('User Registered Successfully');
    } catch (err) {
      alert('Registration failed');
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          .register-form {
            background-color: #fff;
            padding: 2rem 3rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .register-form h2 {
            margin-bottom: 20px;
            color: #333;
          }

          .register-form label {
            display: block;
            margin: 10px 0 5px;
            font-weight: 500;
            color: #444;
          }

          .register-form input[type="text"] {
            padding: 10px;
            width: 250px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
          }

          .register-form button {
            padding: 10px 20px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
          }

          .register-form button:hover {
            background-color: #388e3c;
          }
        `}
      </style>
      <form className="register-form" onSubmit={handleregister}>
        <h2>Register User</h2>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Age:</label>
        <input type="text" name="age" />
        <br />
        <button type="submit">Register</button>
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

export default Register;
