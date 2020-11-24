import { useEffect } from 'react';
import GlobalStyle from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theming';
import Aos from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
   useEffect(() => {
      Aos.init({ duration: 2000 });
   }, []);
   return (
      <>
         <GlobalStyle />
         <ThemeProvider theme={theme}>
            <Component {...pageProps} />
         </ThemeProvider>
      </>
   );
}

export default MyApp;
