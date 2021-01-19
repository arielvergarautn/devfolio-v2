//Components and pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
//Styles
import './public/styles/app.scss';
//Route
import { Route, Switch } from 'react-router-dom'
//Animations
import { AnimatePresence } from 'framer-motion'


function App() {
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Nav />
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
