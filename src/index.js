// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
    </div>
  );
};

// Take the react component and display it
ReactDOM.render(<App />, document.querySelector('#root'));
