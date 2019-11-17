import React from 'react';
import CustomImageSelection from './components/CustomImageSelection';
import { dummyData } from './util';
import './App.css';

function App() {
  return (
    <div className="">
      <CustomImageSelection interests={dummyData} />
    </div>
  );
}

export default App;
