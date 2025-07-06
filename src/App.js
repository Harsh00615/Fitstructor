// import './App.css';
// import Footer from './components/Footer/Footer';
// import { Navbar } from './components/Navbar/Navbar';
// import Home from './pages/CSS/Home';
// import Shopp from './Shopp';



// function App() {
//   return (
//     <>
//      <Navbar/>
//      <Home/>
//      <Shopp/>
//      <Footer/>
//     </>
//   );
// }

// export default App;
// import './App.css';
// import Footer from './components/Footer/Footer';
// import { Navbar } from './components/Navbar/Navbar';
// import Home from './pages/CSS/Home';
// import Shopp from './Shopp';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <Shopp />   {/* ✅ No need for BrowserRouter here */}
//       <Footer />
//     </>
//   );
// }

// export default App;
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/CSS/Home';
import Shopp from './Shopp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shopp />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

