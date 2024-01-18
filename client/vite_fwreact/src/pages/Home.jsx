/* eslint-disable no-unused-vars */
import React from 'react';
//axios biblioteca de js que se utiliza para solicitudes de http desde navegador
//o servidor  usanod node.js
import axios from "axios";
// son hooks y su funcion es ultilizar el estado y otro metodos de react dentro de
// un componente funcional, se utilizan para agregar funcionalidad a componentes
//React sin usar clases
import { useEffect,useState } from  'react';


function Home() {
  
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3001/PruebaPost").then((response) => {
        setListOfPosts(response.data);
      });
    }, []);
    return (
      <div>
       
        {listOfPosts.map((value, key) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="PruebaPost">
              
              <div className="tittle">  title: {value.title} </div> 
              <div className="body"><br/> postText: {value.postText} </div>
              <div className="footer"><br/>username: {value.username}</div>
              </div> 
              
          );
        })}
      </div>
    );
}

export default Home;
