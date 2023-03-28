import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const bg1='#6E6D82';
  const bg2='#FF0000';
  const[page,setPage]=useState(true);
  const[Lbg,setLBg]=useState(bg2);
  const[Sbg,setSBg]=useState(bg1);

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const fcn1=(evt)=>{
      if(page==true){
        setPage(true);
        console.log("LogIn")
        evt.preventDefault();
      }
      else{
        setPage(true);
        console.log("LogIn")
        evt.preventDefault();
      }
     if(Lbg==bg2){
      setLBg(bg2);
     }else if(Lbg==bg1&&Sbg==bg2){
        setLBg(bg2);
        setSBg(bg1);
     }
  }
      
  const fcn2=(evt)=>{
      if(page==true){
        setPage(false);
        console.log("SignUp")
        evt.preventDefault();
      }else{
        setPage(false)
        console.log("SignUp")
        evt.preventDefault();
      }
      if(Sbg==bg1 && Lbg == bg2){
        setSBg(bg2);
        setLBg(bg1);
      }
  }

useEffect(()=>{
  console.log(`Name is ${name}`);
},[name])
useEffect(()=>{
  console.log(`Email is ${email}`)
},[email])
useEffect(()=>{
  console.log(`Password is ${password}`)
},[password])
  

  return (
    <div>
        <div className='bg'>
        
          <div>
          <div className='btn'>
          <button style={{background:Lbg}} onClick={fcn1} >LOG IN</button>
          <button style={{background:Sbg}} onClick={fcn2}>SIGN UP</button> 
        </div>
              {page?(
               <form className='form_design'>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type={"email"} placeholder="Enter your Email..."></input>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type={"password"} placeholder="Enter your Password..."></input>
                <button>LogIn</button>
               </form>
              ):(
           <form className='form_design'>
                <input value={name} onChange={(e)=>setName(e.target.value)} type={"text"} placeholder="Enter your Name..."></input>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type={"email"} placeholder="Enter your Email..."></input>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type={"password"} placeholder="Enter your Password..."></input>
                <button>SignUp</button>
           </form>
              )
            }
          </div>
        </div>
    </div>
  );
}

export default App;
