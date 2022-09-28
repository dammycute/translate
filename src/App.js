import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Translate from './components/Translate';
import Solution from './components/Solution';
import Who from './components/Who';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
    </Router>
    <Header/>
    <Translate/>
    <Solution/>
    <Who/>
    <Faq/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
