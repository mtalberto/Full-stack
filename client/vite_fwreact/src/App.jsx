
import './App.css';
//el curso q estoy mirando reemplaza Routes por switch 
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from './pages/CreatePost';

function App() {

   return (
   <div className="root">
      
     <Router> 
     <div className="initial">
      <Link to="/createpost" id="linkpost">Create  Post  </Link>
      <Link to="/" id="linkhome">Home Page  </Link> 
      </div>
         <Routes>
         
         <Route  path='/'  exact element={<Home />} />
          <Route  path='/createpost'  exact element={<CreatePost/>} />
         
         </Routes>
      </Router>
     
   </div>
   );
}


export default App;
