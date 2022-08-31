
import Layout from '../layouts/Layout'
import '../styles/globals.css'
import '../styles/settings.css'
import '../styles/transactions.css'
import '../styles/employee.css'
import '../styles/test.css' 


function MyApp({ Component, pageProps }) {
  const GetLayout = Component.GetLayout || EmptyLayout;
  
  //((page) => page);
  
  //;
    return (
     <div className='template'>
    
    <Layout><GetLayout><Component {...pageProps} /></GetLayout></Layout>
    
      
    </div>
  
 
    
  
  ) ;
 
}
const EmptyLayout=({children})=><>{children}</>

export default MyApp
