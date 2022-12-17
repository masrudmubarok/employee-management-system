import Header from './components/Header';
import Home from './components/Home';
import Home2 from './pages/Home2';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home2" component={Home2} />
        </Switch>
        <SideNav />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
