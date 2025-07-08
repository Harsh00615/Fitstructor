import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/CSS/Home';
import Footer from './components/Footer/Footer';
import MainLayout from './MainLayout';
import Shopp from './Shopp';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/shop/*" element={<Shopp />} />
      </Routes>

    </>
  );
}

export default App;

