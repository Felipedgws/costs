import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import Project from './components/pages//Project'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/NewProject" element={<NewProject />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Project/:id" element={<Project />} />
      </Routes>
    </Container>
      <Footer />
    </Router>
  );
}

export default App;
