import {
   HeroBtn,
   HeroContainer,
   HeroContent,
   HeroH1,
   HeroItems,
   HeroP,
} from './styles';

const Hero = () => {
   return (
      <>
         <HeroContainer>
            <HeroContent>
               <HeroItems>
                  <HeroH1 data-aos="fade-left">Greatest Sushi Ever</HeroH1>
                  <HeroP data-aos="fade-right">Ready in 60 seconds</HeroP>
                  <HeroBtn data-aos="fade-up">Place Order</HeroBtn>
               </HeroItems>
            </HeroContent>
         </HeroContainer>
      </>
   );
};

export default Hero;
