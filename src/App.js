//Components and pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import Nav from "./components/Nav";
//Styles
import './public/styles/app.scss';
//Route
import { Route, Switch, useLocation } from 'react-router-dom'


function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <Switch location={location} key={location.pathname}>
        <Route exact path={['/', '/home']} component={Home} />
        <Route exact path={['/work', '/work/:id']} component={Work} />
        <Route exact path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
