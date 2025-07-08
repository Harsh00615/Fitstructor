import Navbar from '../src/components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Footer/>
    </>
  );
}

export default MainLayout;