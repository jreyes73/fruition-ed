import './App.css';
import React from 'react';
import Root from './Root/Root';
import About from './components/About/About';
import Programs from "./Programs";
import Contact from './Contact';
import Home from './Home/Home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import SproutProgram from './SproutProgram';
import Practice from './components/Practice/Practice';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path=''element={<Home />} />
    <Route path="about" element={<About />}/>
    <Route path="programs" element={<Programs/>}>
      <Route path=':sprout' element={<SproutProgram />} />
    </Route>
    <Route path='contact' element={<Contact />}/>
    <Route path="practice" element={<Practice />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
