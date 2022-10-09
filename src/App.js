import './App.css';
import Nav from './components/Nav';
import Home from "./components/Home";
import About from "./components/About";
import Package from './components/Pacckage';
import Testimonial from './components/Testimonial';
import Tour from './components/Tour';
import Footer from './components/Footer';


function App() {
  return (
    <div className="mainContainer">
      <Nav />
      <Home />
      <About />
      <Package />
      <Testimonial />
      <Tour />
      <Footer/>
    </div>
  );
}

export default App;
