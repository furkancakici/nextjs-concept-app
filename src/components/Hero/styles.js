import styled from 'styled-components';

export const Wrapper = styled.div`
   background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url('/images/sushi.jpg');
   height: 100vh;
   background-position: center;
   background-size: cover;
`;

export const HeroContainer = ({ children ,...props}) => {
   return <Wrapper {...props}>{children}</Wrapper>;
};

export const HeroContent = styled.div`
   height: calc(100vh - 80px);
   max-height: 100%;
   width: 100vw;
   padding: 0 calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   height: 100vh;
   max-height: 100%;
   padding: 0 2rem;
   color: ${(props) => props.theme.text.primary};
   text-transform: uppercase;
   line-height: 1;
   font-weight: bold;

   @media screen and (max-width: 650px) {
      width: 100%;
   }
`;

export const HeroH1 = styled.h1`
   font-size: clamp(2.5rem, 10vw, 5rem);
   margin-bottom: 1rem;
   border-bottom: 5px double ${(props) => props.theme.bg.primary};
   letter-spacing: 3px;
   transition: border-bottom ${(props) => props.theme.fx.primary};

   &:hover {
      border-bottom: 7px double ${(props) => props.theme.bg.primary};
   }
`;

export const HeroP = styled.p`
   font-size: clamp(2rem, 2.5vw, 3rem);
   margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
   font-size: 1.4rem;
   padding: 1rem 4rem;
   border: none;
   background: ${(props) => props.theme.bg.primary};
   color: ${(props) => props.theme.text.primary};
   transition: all ${(props) => props.theme.fx.primary};
   cursor: pointer;
   border-radius:${(props) => props.theme.fx.radius};

   &:hover {
      color: ${(props) => props.theme.text.secondary};
   }
`;
