import './App.css';
import Footer from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import Home from './pages/CSS/Home';
import Plant from'./pages/CSS/Plant';


function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Plant/>
     <Footer/>
    </>
  );
}

export default App;
