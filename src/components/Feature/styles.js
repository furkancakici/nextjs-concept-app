import styled from 'styled-components';

export const FeatureContainer = styled.div`
   background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
      url('/images/sushi_7.jpg');
   height:60vh;
   background-position: center;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: ${(props) => props.theme.text.primary};
   padding: 0 1rem;

   @media screen and (max-width: 568px) {
      padding: 0;
   }

   h1 {
      font-size: clamp(3rem, 5vw, 5rem);
   }

   p {
      font-size: clamp(1rem, 3vw, 2rem);
      margin-bottom: 1rem;
   }
`;

export const FeatureButton = styled.button`
   font-size: 1.4rem;
   padding: 0.6rem 3rem;
   border: none;
   background-color: ${(props) => props.theme.bg.primary};
   color: ${(props) => props.theme.text.primary};
   transition: all ${(props) => props.theme.fx.primary};
   border-radius: ${(props) => props.theme.fx.radius};

   &:hover {
      color: ${(props) => props.theme.text.secondary};
      cursor: pointer;
   }
`;
