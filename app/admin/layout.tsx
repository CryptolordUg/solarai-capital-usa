"use client";
import { useState } from "react";
export default function AdminLayout({children}:{children:React.ReactNode}){
const [auth,setAuth]=useState(false);
const [pass,setPass]=useState("");
if(!auth){
return (
<div style={{padding:"40px",background:"#000",color:"#fff",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
<div style={{border:"2px solid #ff0",padding:"30px",background:"#111",maxWidth:"400px",width:"100%"}}>
<h2 style={{color:"#ff0"}}>ADMIN AREA - Restricted</h2>
<p style={{color:"#f00"}}>Investors Cannot Access</p>
<input type="password" placeholder="Admin Password" value={pass} onChange={e=>setPass(e.target.value)} style={{padding:"10px",width:"100%",marginTop:"15px"}}/>
<button onClick={()=>{if(pass==="SolarAI2026!"){setAuth(true)}else{alert("Wrong Password! Investors Blocked!")}}} style={{background:"#ff0",color:"#000",padding:"10px",width:"100%",marginTop:"10px",fontWeight:"bold",cursor:"pointer"}}>Unlock Admin - 4 Units</button>
<p style={{fontSize:"10px",marginTop:"10px",opacity:0.5}}>Default: SolarAI2026! - Change in Vercel ENV: ADMIN_PASSWORD</p>
<a href="/" style={{color:"#fff",fontSize:"12px",display:"block",marginTop:"15px"}}>← Back to Home</a>
</div>
</div>
)
}
return <div>{children}</div>
}
