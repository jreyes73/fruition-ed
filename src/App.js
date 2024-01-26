import './App.css';
import React from 'react';
import Root from './Root';
import About from './About';
import Programs from "./Programs";
import Contact from './Contact';
import Home from './Home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SproutProgram from './SproutProgram';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path=''element={<Home />} />
    <Route path="about" element={<About />}/>
    <Route path="programs" element={<Programs/>}>
      <Route path=':sprout' element={<SproutProgram />} />
    </Route>
    <Route path='contact' element={<Contact />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
