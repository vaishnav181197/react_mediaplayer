import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Watch from './pages/Watch';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
    <Header/>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watch' element={<Watch />} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
