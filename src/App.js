import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
