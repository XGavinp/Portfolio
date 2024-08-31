
import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import { useState } from 'react';
import MusicBox from './Components/MusicBox';
import myMusic from "./assets/music.mp3"
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const [music, setMusic] = useState(false);
  const musicRef = useRef(new Audio(myMusic));
  musicRef.current.volume = 0.4;
  musicRef.current.loop = true;

  useEffect(() => {
    if (music) {
      musicRef.current.play();
    }

    return () => {
      musicRef.current.pause();
    };
  }, [music]);


  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/about" element={<About /> } />
      <Route path="/education" element={<Education /> } />
      <Route path="/skills" element={<Skills /> } />
      <Route path="/experience" element={<Experience /> } />
      <Route path="/projects" element={<Projects /> } />
      <Route path="/contact" element={<Contact /> } />
    </Routes>

    <MusicBox music={music} setMusic={setMusic} />
  </Router>
  );
}

export default App;
