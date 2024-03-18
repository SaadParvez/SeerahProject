import styles from './style.js'
import {NavBar, Footer} from './Components';
import Home from "./pages/Home.jsx"
import Events  from './pages/Events.jsx'; 
import ChatBot from './pages/ChatBot.jsx';
import {Route, Routes} from "react-router-dom"


const App = () => {
   
    return(
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar/>
        </div>
      </div>
      
    <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/Home" element ={<Home/>}/>
      <Route path ="/Events" element ={<Events/>}/>
      <Route path ="/ChatBot" element ={<ChatBot/>}/>
    </Routes>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
        <Footer/>
          </div>
          </div> 
         
   
      
   
    </div>
    )
}


export default App
