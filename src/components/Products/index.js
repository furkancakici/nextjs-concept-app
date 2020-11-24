import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
   ProductsContainer,
   ProductWrapper,
   ProductCard,
   ProductsHeading,
   ProductImg,
   ProductInfo,
   ProductTitle,
   ProductDesc,
   ProductPrice,
   ProductButton,
} from './styles';

const Products = ({ headings, data }) => {
   const router = useRouter();
   const [url, setUrl] = useState(false);

   useEffect(() => {
      router.pathname === '/sushi' ? setUrl(true) : setUrl(url);
   }, [url]);

   // let fx = ['zoom-out-right', 'zoom-out-down', 'fade-up'];
   let fx = ['fade-down-right', 'fade-down', 'fade-down-left'];

   return (
      <ProductsContainer url={url}>
         <ProductsHeading>{headings}</ProductsHeading>
         <ProductWrapper>
            {data.map((product, index) => {
               return (
                  <ProductCard key={index} data-aos={fx[index]}>
                     <ProductImg src={product.img} alt={product.alt} />
                     <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDesc>{product.desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>
                        <ProductButton>{product.button}</ProductButton>
                     </ProductInfo>
                  </ProductCard>
               );
            })}
         </ProductWrapper>
      </ProductsContainer>
   );
};

export default Products;
