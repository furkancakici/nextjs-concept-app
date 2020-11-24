import styled from 'styled-components';
import NextLink from 'next/link';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
   position: fixed;
   z-index: 999;
   width: 350px;
   height: 100%;
   background-color: ${(props) => props.theme.bg.primary};
   display: grid;
   align-items: center;
   top: 0;
   transition: ${(props) => props.theme.fx.primary};
   right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

   @media screen and (max-width: 568px) {
      width: 100%;
   }
`;

export const CloseIcon = styled(FaTimes)`
   color: ${(props) => props.theme.text.primary};
`;

export const Icon = styled.div`
   position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   border: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`;

export const SidebarMenu = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(3, 80px);
   text-align: center;

   @media screen and (max-width: 400px) {
      grid-template-rows: repeat(3, 60px);
   }
`;

const StyledbarLink = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   color: ${(props) => props.theme.text.primary};
   transition: all ${(props) => props.theme.fx.primary};

   &:hover {
      color: ${(props) => props.theme.text.secondary};
   }
`;

export const SidebarLink = ({ href, children }) => {
   return (
      <NextLink passHref href={href}>
         <StyledbarLink>{children}</StyledbarLink>
      </NextLink>
   );
};

export const SideBtnWrap = styled.div`
   display: flex;
   justify-content: center;
`;

const StyledbarRoute = styled.a`
   background-color: ${(props) => props.theme.text.secondary};
   color: ${(props) => props.theme.text.primary};
   padding: 16px 64px;
   white-space: nowrap;
   font-size: 16px;
   transition: all ${(props) => props.theme.fx.primary};
   border-radius: ${(props) => props.theme.fx.radius};

   &:hover {
      color: ${(props) => props.theme.bg.primary};
   }
`;

export const SidebarRoute = ({ href, children }) => {
   return (
      <NextLink passHref href={href}>
         <StyledbarRoute>{children}</StyledbarRoute>
      </NextLink>
   );
};
