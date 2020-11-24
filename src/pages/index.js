import Head from 'next/head';
import Feature from '../components/Feature';
import Hero from '../components/Hero/';
import Layout from '../components/Layout';
import Products from '../components/Products';
import { productData, productDataTwo } from '../data/data';

const Home = () => {
   return (
      <Layout>
         <Head>
            <title>Create Next App</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Hero />
         <Products headings='Choose your favorite' data={productData} />
         <Feature />
         <Products headings='Sweet Treats for You' data={productDataTwo} />
      </Layout>
   );
};

export default Home;
