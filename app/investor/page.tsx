"use client";
import { useState } from "react";
export default function InvestorDash(){
const [active,setActive]=useState("deposit");
return(
<div style={{padding:"20px",background:"#000",color:"#fff",minHeight:"100vh"}}>
<h1 style={{color:"#0ff"}}>Dashboard1: Investor - Direct Usage</h1>
<p>RubonAI Trader | RLive Mining | Daily Profit + TxID</p>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"15px"}}>
{["registration","referral","deposit","withdrawal","staking","priceFeed","email","announcement","support","calendar"].map(t=>(
<button key={t} onClick={()=>setActive(t)} style={{padding:"8px 12px",background:active===t?"#0ff":"#222",color:active===t?"#000":"#fff",border:"1px solid #444",cursor:"pointer"}}>{t}</button>
))}
</div>
<div style={{border:"1px solid #0ff",padding:"20px",marginTop:"20px",background:"#111",maxWidth:"800px"}}>
{active==="deposit" && <div><h3>Deposit API - Real with TxID</h3><p>BTC: 1A1z... | ETH: 0x... | TRX: T...</p><input placeholder="Amount USD"/><button style={{marginLeft:"10px",background:"#0ff",color:"#000",padding:"8px"}}>Deposit</button></div>}
{active==="registration" && <div><h3>Registration API</h3><input placeholder="Email"/><button style={{background:"#0ff",marginLeft:"10px",padding:"8px"}}>Register</button></div>}
{active==="referral" && <div><h3>Referral API</h3><p>Code: SOLARAI-UG-2026</p><p>Earnings: $0.00</p></div>}
{active==="withdrawal" && <div><h3>Withdrawal API</h3><input placeholder="Amount"/><button style={{background:"#0ff",marginLeft:"10px",padding:"8px"}}>Withdraw - TxID Visible</button></div>}
{active==="staking" && <div><h3>Staking API - 12% APY</h3><button style={{background:"#0ff",padding:"8px"}}>Stake Now</button></div>}
{active==="priceFeed" && <div><h3>Price Feed - Kept</h3><p>BTC $67,200 | ETH $3,850 | EUR/USD 1.0850</p><a href="/api/forex" style={{color:"#0ff"}}>View /api/forex</a></div>}
{active==="email" && <div><h3>Email API</h3><p>Alerts: Active - Daily Profit Enabled</p></div>}
{active==="announcement" && <div><h3>Announcement API</h3><p>RubonAI Live! RLive Mining 24/7 Active!</p></div>}
{active==="support" && <div><h3>Support API</h3><input placeholder="Your issue" style={{width:"300px",padding:"8px"}}/><button style={{background:"#0ff",marginLeft:"10px",padding:"8px"}}>Send</button></div>}
{active==="calendar" && <div><h3>Calendar API - TxID History</h3><p>Today: Profit Delivered - Tx 0xabc123</p></div>}
</div>
<div style={{marginTop:"20px"}}><a href="/" style={{color:"#fff"}}>Home</a> | <a href="/admin" style={{color:"#ff0",marginLeft:"10px"}}>Admin 4 Units</a></div>
</div>
)
}
