import Layout from '../components/Layout';
import Products from '../components/Products';
import { productData } from '../data/data';

const Pizzas = () => {
   return (
      <Layout>
         <Products headings='Choose your favorite' data={productData} />
      </Layout>
   );
};
export default Pizzas;
