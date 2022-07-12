import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Skills from './pages/Skills'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
