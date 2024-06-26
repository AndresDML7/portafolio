import './assets/styles/base/App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  return (
      <div className="App">
          <Header />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
