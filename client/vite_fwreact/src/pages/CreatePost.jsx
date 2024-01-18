/* eslint-disable no-unused-vars */
import React from 'react';
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import axios from "axios";
function CreatePost() {
  const initialValues = {
    title:"",
    postText:"",
    username:"",
  };
const validationSchema=Yup.object().shape({
    title: Yup.string().required("tienes que poner un titulo"),
    postText: Yup.string().required("tienes que poner un post"),
    username: Yup.string().min(3).max(15).required("tienes que poner un username"),
});

  const onSubmit =(data) => {
    axios.post("http://localhost:3001/PruebaPost",data).then((response) => {
        console.log("funciona");
      });
  };
  return (
    <div className="createPostPage">
      <Formik  initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema}>
       
        <Form className="formContainer">
        <label> tittle: </label>
        <ErrorMessage name="title" component="span"/>
        
           <Field  
           autocomplete="off"
           id="inputCreatePost" 
           name="title" 
           placeholder="(Ej. titulo)"/>
            <label> Post: </label>
            <ErrorMessage name="postText" component="span"/>
           <Field  
          autocomplete="off"
           id="inputCreatePost" 
           name="postText" 
           placeholder="(Ej. post)"/>
           <label > Username:</label>
           <ErrorMessage name="username" component="span"/>
           <Field  
           
           autocomplete="off"
           id="inputCreatePost" 
           name="username" 
           placeholder="(Ej. Alberto)"/>


          <button type="submit">  Create Post </button>
        </Form>
        
       
        </Formik>
    </div>
  )
}

export default CreatePost
