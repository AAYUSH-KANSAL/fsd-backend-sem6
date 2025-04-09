import React from 'react';
import Register from './components/Register';
import Delete from './components/Delete';
import View from './components/View';
import Update from './components/Update';

const App = () => {
  return (
    <div style={styles.appContainer}>
      <style>
        {`
          .app-title {
            text-align: center;
            color: #2c3e50;
            margin-top: 20px;
            font-size: 2.5rem;
          }

          .section {
            background-color: #ffffff;
            padding: 30px 20px;
            margin: 20px auto;
            width: 90%;
            max-width: 800px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }
        `}
      </style>

      <h1 className="app-title">User Registration System</h1>

      <div className="section">
        <Register />
      </div>

      <div className="section">
        <Delete />
      </div>

      <div className="section">
        <Update />
      </div>

      <div className="section">
        <View />
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    paddingBottom: '50px',
  },
};

export default App;
