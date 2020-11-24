import { useState } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
   const [isOpen, setIsOpen] = useState(false);
   const toggle = () => {
      setIsOpen(!isOpen);
   };

   const isLayout = () => {
      return isOpen ? setIsOpen(false) : null;
   };

   return (
      <>
         <Navbar toggle={toggle}></Navbar>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <span onClick={isLayout}>{children}</span>
         <Footer/>
      </>
   );
};

export default Layout;
