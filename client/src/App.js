import Header from './components/Header';
import Home from './components/Home';
import Home2 from './pages/Home2';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
        </Routes>
        <SideNav />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
