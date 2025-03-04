import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
        <Header/> 
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AppLayout