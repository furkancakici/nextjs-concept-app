import {
   SidebarContainer,
   Icon,
   CloseIcon,
   SidebarMenu,
   SidebarLink,
   SideBtnWrap,
   SidebarRoute,
} from './styles';

const Sidebar = ({ isOpen, toggle }) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>
         <SidebarMenu>
            <SidebarLink href='/'>Home</SidebarLink>
            <SidebarLink href='/sushi'>Sushi</SidebarLink>
         </SidebarMenu>
         <SideBtnWrap>
            <SidebarRoute href='/order-now'>Order Now</SidebarRoute>
         </SideBtnWrap>
      </SidebarContainer>
   );
};

export default Sidebar;
