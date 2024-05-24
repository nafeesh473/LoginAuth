import React from 'react'
import Header from './componants/shared/Header'
import Footer from './componants/shared/Footer'
import AllRoutes from './AllRoutes/AllRoutes'

const App = () => {
  return (
    <> 
    <Header/>
    <div style={{ height : "600px"}}> 
      
     <AllRoutes/> 

    </div>
    <Footer/>
    
    
     </>

    
  )
}

export default App