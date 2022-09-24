//Components and pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
import NotFound from "./pages/notFound/NotFound";
import Nav from "./components/Nav";
import AboutMe from "./pages/aboutMe/AboutMe";

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
        <Route exact path='/about' element={<AboutMe />} />
        <Route exact path='/work' element={<Work />} />
        <Route exact path='/work/:id' element={<Work />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
