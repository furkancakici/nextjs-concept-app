import {
   FaFacebook,
   FaInstagram,
   FaLinkedin,
   FaTwitter,
   FaYoutube,
} from 'react-icons/fa';

import {
   FooterContainer,
   FooterWrap,
   SocialMediaWrap,
   SocialLogo,
   SocialIcons,
   SocialIconLink,
} from './styles';

const Footer = () => {
   return (
      <>
         <FooterContainer>
            <FooterWrap>
               <SocialMediaWrap>
                  <SocialLogo href='/' id="contact">Sushi</SocialLogo>
                  <SocialIcons>
                     <SocialIconLink
                        href='/'
                        target='_blank'
                        aria-label='Facebook'
                        rel='noopener noreferrer'
                     >
                        <FaFacebook />
                     </SocialIconLink>
                     <SocialIconLink
                        href='/'
                        target='_blank'
                        aria-label='Instagram'
                        rel='noopener noreferrer'
                     >
                        <FaInstagram />
                     </SocialIconLink>
                     <SocialIconLink
                        href='/'
                        target='_blank'
                        aria-label='Youtube'
                        rel='noopener noreferrer'
                     >
                        <FaYoutube />
                     </SocialIconLink>
                     <SocialIconLink
                        href='/'
                        target='_blank'
                        aria-label='Twitter'
                        rel='noopener noreferrer'
                     >
                        <FaTwitter />
                     </SocialIconLink>
                     <SocialIconLink
                        href='/'
                        target='_blank'
                        aria-label='Linkedin'
                        rel='noopener noreferrer'
                     >
                        <FaLinkedin />
                     </SocialIconLink>
                  </SocialIcons>
               </SocialMediaWrap>
            </FooterWrap>
         </FooterContainer>
      </>
   );
};

export default Footer;
