import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp';



function App() {
  return (
    <Routes>
      <Route path ='/' element={<Login/>}>
      <Route path= '/SignUp' element = {<SignUp/>}/>

      </Route>
    </Routes>
  );
}
export default App;
