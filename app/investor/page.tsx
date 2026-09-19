"use client";
import { useState } from "react";
export default function InvestorDash(){
const [active,setActive]=useState("deposit");
return (
<div style={{padding:"20px",background:"#000",color:"#fff",minHeight:"100vh"}}>
<h1 style={{color:"#0ff"}}>Dashboard1: Investor - Direct Usage</h1>
<p>RubonAI Trader | RLive Mining | Daily Profit + TxID</p>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"15px"}}>
{["registration","referral","deposit","withdrawal","staking","priceFeed","email","announcement","support","calendar"].map(t=>(
<button key={t} onClick={()=>setActive(t)} style={{padding:"8px 12px",background:active===t?"#0ff":"#222",color:active===t?"#000":"#fff",border:"1px solid #333",cursor:"pointer",textTransform:"capitalize"}}>{t}</button>
))}
</div>
<div style={{border:"1px solid #0ff",padding:"20px",marginTop:"20px",background:"#111",maxWidth:"800px"}}>
{active==="registration" && <div><h3>Registration API</h3><input placeholder="Email" style={{padding:"8px",width:"200px"}}/><button style={{marginLeft:"10px",background:"#0ff",padding:"8px"}}>Register</button><p style={{fontSize:"12px",opacity:0.6}}>Endpoint: /api/investor/registration - Ready</p></div>}
{active==="referral" && <div><h3>Referral API</h3><p>Your Referral Code: SOLARAI-UG-2026</p><p>Referral Earnings: $0.00</p><p style={{fontSize:"12px"}}>Endpoint: /api/investor/referral</p></div>}
{active==="deposit" && <div><h3>Deposit API</h3><p>BTC: 1A1z... | ETH: 0x... | TRX: T...</p><input placeholder="Amount USD" style={{padding:"8px"}}/><button style={{marginLeft:"10px",background:"#0f0",padding:"8px"}}>Deposit</button><p style={{fontSize:"12px"}}>Real Node: Bitcoin Core RPC, TronGrid, ETH JSON RPC - TxID Visible</p></div>}
{active==="withdrawal" && <div><h3>Withdrawal API</h3><input placeholder="Amount" style={{padding:"8px"}}/><button style={{marginLeft:"10px",background:"#f90",padding:"8px"}}>Withdraw</button><p style={{fontSize:"12px"}}>Daily Profit Delivery by RubonAI - TxID Transparency</p></div>}
{active==="staking" && <div><h3>Staking API</h3><p>APY: 12% - RLive Mining</p><button style={{background:"#0ff",padding:"8px"}}>Stake Now</button></div>}
{active==="priceFeed" && <div><h3>Price Feed API - Kept - No Issues</h3><p>EUR/USD: 1.0850 | BTC: $67,200 | ETH: $3,850 | SOL: $178</p><a href="/api/forex" style={{color:"#0ff"}}>Live Forex API</a></div>}
{active==="email" && <div><h3>Email Communication API</h3><p>Email Alerts: Active</p><p>Daily Profit Report: Enabled</p></div>}
{active==="announcement" && <div><h3>Announcement API</h3><p>📢 RubonAI Trader Live! RLive Mining 24/7 Active!</p></div>}
{active==="support" && <div><h3>Customer Care API</h3><input placeholder="Your issue" style={{padding:"8px",width:"300px"}}/><button style={{marginLeft:"10px",background:"#0ff",padding:"8px"}}>Submit Ticket</button></div>}
{active==="calendar" && <div><h3>Calendar API</h3><p>Daily Profit Calendar - TxID History</p><p>Today: Profit Delivered ✓ Tx: 0xabc...123</p></div>}
</div>
<div style={{marginTop:"20px"}}><a href="/" style={{color:"#fff"}}>← Home</a> | <a href="/api/investor" style={{color:"#0ff",marginLeft:"10px"}}>Test Investor API</a></div>
</div>
)
}
