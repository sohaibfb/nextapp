import HeaderPage from '../components/HeaderPage'
import Layout from '../components/Layout'

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const GetLayout = Component.GetLayout || EmptyLayout;
  
  //((page) => page);
  
  //;
    return (
     <div>
    
    <Layout><GetLayout><Component {...pageProps} /></GetLayout></Layout>
    
      
    </div>
  
 
    
  
  ) ;
 
}
const EmptyLayout=({children})=><>{children}</>

export default MyApp
