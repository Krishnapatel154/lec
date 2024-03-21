import {useState} from 'react'
function BTN()
{
     const[data,setdata]=useState(false)

   return(
    <div>
        <h1>HELLO EVERYONE {data}</h1>
        {
        data?<h1>GOOD MORNING</h1>:null
        }
        
      <button onClick={()=>{setdata(true)}}>SHOW</button>
      <button onClick={()=>{setdata(false)}}>HIDE</button>
      <button onClick={()=>{setdata(!data)}}>TOGGEL</button>
   </div>
   )
}
export default BTN