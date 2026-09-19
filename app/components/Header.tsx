"use client";
import { useState, useEffect } from "react";
export default function Header() {
  const [time, setTime] = useState("");
  const [bal, setBal] = useState(1247.89);
  useEffect(() => {
    setTime(new Date().toUTCString().slice(17,25));
    const s = setInterval(()=>setTime(new Date().toUTCString().slice(17,25)),1000);
    const b = localStorage.getItem("rubon_bal");
    if(b) setBal(parseFloat(b));
    return ()=>clearInterval(s);
  }, []);
  return (
    <header style={{background:"#0f172a",borderBottom:"2px solid #fbbf24",position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 10px rgba(0,0,0,0.2)"}}>
      {/* Top Compliance Bar */}
      <div style={{background:"#fbbf24",color:"#000",fontSize:9,fontWeight:800,padding:"4px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{display:"flex",gap:12,alignItems:"center"}}>
          <span>🛡️ ESG 100% • AML Score 42/100 • KYC Verified • PoA Compliant • World Bank Grade Transparency</span>
          <span style={{background:"#000",color:"#fbbf24",padding:"2px 6px",borderRadius:4}}>LIVE {time} UTC</span>
        </div>
        <div style={{display:"flex",gap:12}}>
          <span>Balance ${bal.toFixed(2)} USDT • TRC20 LIVE</span>
          <span>TATeM34...PrFra ● CONNECTED</span>
        </div>
      </div>

      {/* Main Header */}
      <div style={{maxWidth:1440,margin:"0 auto",padding:"12px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        {/* Logo + Brand */}
        <div style={{display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:40,height:40,background:"linear-gradient(135deg,#fbbf24,#f59e0b)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:18,color:"#000"}}>R</div>
          <div>
            <div style={{color:"#fff",fontWeight:900,fontSize:16,letterSpacing:0.5}}>RUBON AI CAPITAL • SOLARAI</div>
            <div style={{color:"#94a3b8",fontSize:9,fontWeight:700}}>Managed Mining • Forex • Crypto • ESG Compliant • Since 2024</div>
          </div>
          <div style={{marginLeft:16,background:"#10b981",color:"#fff",padding:"4px 8px",borderRadius:20,fontSize:8,fontWeight:800}}>● 6 ENGINES LIVE • EASY MINING</div>
        </div>

        {/* Navigation */}
        <nav style={{display:"flex",gap:18,alignItems:"center"}}>
          <a href="/rubonai" style={{color:"#fff",fontSize:11,fontWeight:700,textDecoration:"none"}}>DASHBOARD</a>
          <a href="/admin/mining" style={{color:"#fbbf24",fontSize:11,fontWeight:700,textDecoration:"none"}}>EASY MINING ⚡</a>
          <a href="/compliance" style={{color:"#94a3b8",fontSize:11,fontWeight:700,textDecoration:"none"}}>COMPLIANCE</a>
          <a href="/analytics" style={{color:"#94a3b8",fontSize:11,fontWeight:700,textDecoration:"none"}}>ANALYTICS</a>
          <a href="/investors" style={{color:"#94a3b8",fontSize:11,fontWeight:700,textDecoration:"none"}}>INVESTORS</a>
          <div style={{background:"#1e293b",border:"1px solid #334155",borderRadius:6,padding:"4px 8px",display:"flex",gap:6}}>
            <span style={{fontSize:10}}>🌐 EN</span><span style={{fontSize:10,color:"#64748b"}}>FR • SW • ES</span>
          </div>
          <a href="/login" style={{background:"#fbbf24",color:"#000",padding:"8px 14px",borderRadius:6,fontSize:11,fontWeight:900,textDecoration:"none"}}>INVESTOR LOGIN</a>
        </nav>
      </div>

      {/* Live Metrics Ticker */}
      <div style={{background:"#1e293b",borderTop:"1px solid #334155",padding:"6px 16px",display:"flex",gap:20,fontSize:9,color:"#94a3b8",overflow:"hidden"}}>
        <span>💱 EUR/USD 1.0831 <span style={{color:"#10b981"}}>+0.12%</span> • GBP/USD 1.2719 +0.08% • XAU $2045.32 +1.2% • BTC $43,128 +1.82%</span>
        <span>⛏️ 2.4 TH/s • 65k TPS • Block #64821903 • PoW LIVE</span>
        <span>💎 8.4% APY • Staked $1247.89 • Compounding LIVE</span>
        <span style={{marginLeft:"auto",color:"#fbbf24"}}>Investor Education: How PoS yields compound → Learn</span>
      </div>
    </header>
  );
}
