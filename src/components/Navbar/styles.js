import styled from 'styled-components';
import NextLink from 'next/link';
import SushiMenu from '../../assets/icons/SushiMenu';

export const Nav = styled.nav`
   background-color: transparent;
   height: 80px;
   display: flex;
   align-items: center;
   font-weight: 700;
   width: 100%;
   position: absolute;
`;

const LinkBody = styled.a`
   color: ${(props) => props.theme.text.primary};
   font-size: 2rem;
   transition: color ${(props) => props.theme.fx.primary};
   position: absolute;
   top: 30px;
   left: 45%;

   &:hover {
      color: ${(props) => props.theme.bg.primary};
   }

   @media screen and (max-width: 400px) {
      position: absolute;
      top: 30px;
      left: 25px;
   }
`;

export const Link = ({ href, children }) => {
   return (
      <NextLink passHref href={href}>
         <LinkBody>{children}</LinkBody>
      </NextLink>
   );
};

export const NavIcon = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   color: ${(props) => props.theme.text.primary};
   fill: ${(props) => props.theme.text.primary};

   cursor: pointer;
   position: absolute;
   top: 30px;
   right: 2%;
   padding: 10px 20px;
   background: transparent;
   font-size: 28px;
   border-top-right-radius: 10px;
   border-bottom-left-radius: 10px;
   transition: all ${(props) => props.theme.fx.primary};

   @media screen and (max-width: 568px) {
      right: 4%;
      padding: 5px 10px;
   }

   &:after,
   &:before {
      content: ' ';
      width: 10px;
      height: 10px;
      position: absolute;
      transition: all ${(props) => props.theme.fx.primary};
   }
   &:after {
      top: -1px;
      left: -1px;
      border-top: 5px double ${(props) => props.theme.bg.primary};
      border-left: 5px double ${(props) => props.theme.bg.primary};
   }
   &:before {
      bottom: -1px;
      right: -1px;
      border-bottom: 5px double ${(props) => props.theme.bg.primary};
      border-right: 5px double ${(props) => props.theme.bg.primary};
   }
   &:hover {
      border-top-right-radius: 0px;
      border-bottom-left-radius: 0px;
      &:before,
      &:after {
         width: 107%;
         height: 107%;
      }
   }

   p {
      font-size: 18px;
   }
`;

export const SushiBar = styled(SushiMenu)`
   font-size: 3rem;
   margin-left: 1.5rem;
`;
