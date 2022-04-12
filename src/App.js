import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import axios from "axios";
function App() {

  const [loading,setLoading]=useState(true);
  const [email,setEmail]=useState("");


  // useEffect(()=>{
  //   console.log("Checking user is login or not");
  //   debugger;
  //   axios({
  //     method:"GET",
  //     url:"http://localhost:3000/whoami",
  //     withCredentials:true
  //   })
  //   .then(response=>{
  //     debugger;
  //     console.log("USER CHECK LOGIN RESPONSE:",response.data.user);
  //     if(response.data.user.nameID){
  //       setEmail(response.data.user.nameID);
  //       setLoading(false);
  //     }else{
  //       //redirect to login
  //       redirectToLogin();
  //     }
  //   })
  //   .catch(error=>{
  //     debugger;
  //     console.log("Error while check user login:",error);
  //     //redirect to login
  //     redirectToLogin();
  //   })
  // },[]);

  useEffect(()=>{
    console.log("Checking user is login or not");
    debugger;
    axios({
      method:"POST",
      url:"http://localhost:3000/getMyData",
      withCredentials:true
    })
    .then(response=>{
      debugger;
      console.log("USER CHECK LOGIN RESPONSE:",response.data.user);
      if(response.data.user.nameID){
        setEmail(response.data.user.nameID);
        setLoading(false);
      }else{
        //redirect to login
        redirectToLogin();
      }
    })
    .catch(error=>{
      debugger;
      console.log("Error while check user login:",error);
      //redirect to login
      redirectToLogin();
    })
  },[]);

  const redirectToLogin=()=>{
    window.location.replace("http://localhost:3000/login");
  }

  if( loading){
    return <p>loading...</p>
  }
  return (
    <div className="App">
      Welcome {email}
    </div>
  );
}

export default App;
