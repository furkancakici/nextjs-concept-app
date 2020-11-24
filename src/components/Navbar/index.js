import { SushiBar, Nav, NavIcon, Link } from './styles';
import { useRouter } from 'next/router';

const Navbar = ({ toggle }) => {
   const router = useRouter();
   return (
      <>
         <Nav>
            {router.pathname === '/' && <Link href='/'>Sushi 🥢</Link>}
            <NavIcon onClick={toggle}>
               <p>Menu</p>
               <SushiBar />
            </NavIcon>
         </Nav>
      </>
   );
};

export default Navbar;  
