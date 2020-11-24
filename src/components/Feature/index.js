import { FeatureContainer, FeatureButton } from './styles';

const Feature = () => {
   return (
      <FeatureContainer>
         <h1 data-aos="fade-left">Pizza of the Day</h1>
         <p data-aos="fade-right">Truffle alfredo sauce topped with 24 carat gold dust.</p>
         <FeatureButton data-aos="fade-up">Order Now</FeatureButton>
      </FeatureContainer>
   );
};

export default Feature;
