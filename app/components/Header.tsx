"use client";
import { useState, useEffect } from "react";
export default function Header() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const iv = setInterval(()=>setTime(new Date().toLocaleTimeString()),1000);
    return ()=>clearInterval(iv);
  }, []);
  return (
    <header style={{background:"#0f172a",borderBottom:"2px solid #fbbf24",position:"sticky",top:0,zIndex:100}}>
      <div style={{background:"#fbbf24",color:"#000",fontSize:9,fontWeight:800,padding:"4px 12px",display:"flex",justifyContent:"space-between"}}>
        <span>🛡️ ESG 100% • AML 42/100 • KYC Verified • World Bank Grade</span>
        <span>LIVE {time} UTC • Balance LIVE • TATeM34...PrFra CONNECTED</span>
      </div>
      <div style={{padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:36,height:36,background:"#fbbf24",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900}}>R</div>
          <div>
            <div style={{color:"#fff",fontWeight:900,fontSize:14}}>RUBON AI CAPITAL • SOLARAI</div>
            <div style={{color:"#94a3b8",fontSize:8}}>Managed Mining • Forex • Crypto • ESG • Since 2024</div>
          </div>
        </div>
        <nav style={{display:"flex",gap:14,alignItems:"center"}}>
          <a href="/rubonai" style={{color:"#fff",fontSize:11,fontWeight:700,textDecoration:"none"}}>DASHBOARD</a>
          <a href="/admin/mining" style={{color:"#fbbf24",fontSize:11,fontWeight:700,textDecoration:"none"}}>EASY MINING ⚡</a>
          <a href="#" style={{color:"#94a3b8",fontSize:11,textDecoration:"none"}}>COMPLIANCE</a>
          <a href="/login" style={{background:"#fbbf24",color:"#000",padding:"8px 12px",borderRadius:6,fontSize:11,fontWeight:900,textDecoration:"none"}}>INVESTOR LOGIN</a>
        </nav>
      </div>
    </header>
  );
}
