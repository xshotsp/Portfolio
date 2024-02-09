import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { RouteProps } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route<RouteProps> exact path="/" component={Home} />
        <Route<RouteProps> exact path="/projects" component={Projects} />
        <Route<RouteProps> exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
