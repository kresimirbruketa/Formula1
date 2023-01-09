import React from "react";


import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

function App(){



    return(
        <div className="App">
        
            <Header/>
            
            <Outlet/>
            
            <Footer/>
            
        </div>

    )
}

export default App;