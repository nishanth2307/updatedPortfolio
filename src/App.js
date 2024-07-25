import './App.css';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <Hero/>
        <Skills/>
        <Experience/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
