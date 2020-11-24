import styled from 'styled-components';
import NextLink from 'next/link';

export const FooterContainer = styled.footer`
   background-color: ${(props) => props.theme.bg.primary};
`;

export const FooterWrap = styled.div`
   padding: 16px 24px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 1300px;
   margin: 0 auto;
   min-height: 10vh;
`;

export const SocialMediaWrap = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   max-width: 1100px;
   width: 100%;
   margin: 16px auto 0 auto;
   @media screen and (max-width: 820px) {
      flex-direction: column;
   }
`;

const StyledSocialLogo = styled.a`
   color: ${(props) => props.theme.text.primary};
   justify-self: start;
   cursor: pointer;
   text-decoration: none;
   font-size: 1.5rem;
   display: flex;
   align-items: center;
   margin-bottom: 16px;
   font-weight: bold;
`;

export const SocialLogo = ({ href, children }) => {
   return (
      <NextLink passHref href={href}>
         <StyledSocialLogo>{children}</StyledSocialLogo>
      </NextLink>
   );
};

export const SocialIcons = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 240px;
`;

const StyledSocialIconLink = styled.a`
   color: ${(props) => props.theme.text.primary};
   font-size: 24px;

   &:hover {
      color: ${(props) => props.theme.text.secondary};
   }
`;

export const SocialIconLink = ({ href, children, ...props }) => {
   return (
      <NextLink passHref href={href}>
         <StyledSocialIconLink {...props}>{children}</StyledSocialIconLink>
      </NextLink>
   );
};
