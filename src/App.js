import { useEffect } from "react";
//Components and pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
//Styles
import './public/styles/app.scss';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/work' element={<Work />} />
        <Route exact path='/work/:id' element={<Work />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
