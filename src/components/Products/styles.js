import styled from 'styled-components';
import Image from 'next/image';

export const ProductsContainer = styled.div`
   min-height: 100vh;
   padding: ${(props) => (props.url ? '0.5rem' : '3rem')}
      calc((100vw - 1300px) / 2);
   background: ${(props) => props.theme.bg.gradient};
   color: ${(props) => props.theme.text.primary};
`;

export const ProductWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin: 0 auto;
`;

export const ProductCard = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   background-color: ${(props) => props.theme.text.secondary};
   border-radius: ${(props) => props.theme.fx.radius};
   margin: 0 2rem;
   padding: 1.2rem 0;
   line-height: 2;
   width: 340px;
   transition: all ${(props) => props.theme.fx.primary};

   @media screen and (max-width: 568px) {
      margin: 2rem 0;
   }

   &:hover {
      box-shadow: 5px 5px rgba(0, 0, 0, 0.4), 10px 10px rgba(0, 0, 0, 0.3),
         15px 15px rgba(0, 0, 0, 0.2), 20px 20px rgba(0, 0, 0, 0.1),
         25px 25px rgba(0, 0, 0, 0.05);
   }
`;

export const ProductsHeading = styled.h1`
   font-size: clamp(2rem, 2.5vw, 3rem);
   text-align: center;
`;

export const ProductTitle = styled.h2`
   font-weight: 400;
   font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   padding: 1.5rem;
`;

export const ProductDesc = styled.p`
   margin-bottom: 0.5rem;
   font-size: 1.1rem;
   font-family: 'Franklin Gothic Medium', sans-serif;
`;

export const ProductPrice = styled.p`
   margin-bottom: 1rem;
   font-size: 2rem;
`;

export const ProductButton = styled.button`
   font-size: 1rem;
   padding: 1rem 4rem;
   border: none;
   background: ${(props) => props.theme.bg.primary};
   color: ${(props) => props.theme.text.primary};
   transition: all ${(props) => props.theme.fx.primary};
   border-radius: ${(props) => props.theme.fx.radius};

   &:hover {
      color: ${(props) => props.theme.text.secondary};
      cursor: pointer;
      transform: scale(1.1);
   }
`;

const StyledImg = styled(Image)``;

const StyledWrap = styled.div`
   width: 300px;
   height: 300px;
   transition: box-shadow ${(props) => props.theme.fx.primary};
   border-radius: ${(props) => props.theme.fx.radius};
   box-shadow: 8px 8px ${(props) => props.theme.bg.primary};

   &:hover {
      box-shadow: 12px 12px ${(props) => props.theme.bg.primary},
         -12px -12px ${(props) => props.theme.bg.primary};
   }

   img {
      border-radius: ${(props) => props.theme.fx.radius};
   }
`;

export const ProductImg = ({ src, hovered }) => {
   return (
      <StyledWrap hovered={hovered}>
         <StyledImg src={src} width={300} height={300} />
      </StyledWrap>
   );
};
