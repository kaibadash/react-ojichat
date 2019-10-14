import React from 'react';
import './Ojichat.css';
import * as ojichat from "ojichat.js";

const Ojichat: React.FC = () => {
  let message = new ojichat.Generator().getMessage();
  return (
    <div className="App">
      {message}
    </div>
  );
}

export default Ojichat;
