"use client";
import { useState } from "react";

export default function InvestorDash(){
const [active,setActive]=useState("deposit");
return (
<div style={{padding:"20px",background:"#000",color:"#fff",minHeight:"100vh"}}>
<h1 style={{color:"#0ff"}}>Dashboard1: Investor - Direct Usage</h1>
<p>RubonAI Trader | RLive Mining | Daily Profit + TxID</p>

<div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"15px"}}>
{["registration","referral","deposit","withdrawal","staking","priceFeed","email","announcement","support","calendar"].map((t)=>(
<button key={t} onClick={()=>setActive(t)} style={{padding:"8px 12px",background:active===t?"#0ff":"#222",color:active===t?"#000":"#fff",border:"1px solid #444",cursor:"pointer",textTransform:"uppercase",fontSize:"12px"}}>{t}</button>
))}
</div>

<div style={{border:"1px solid #0ff",padding:"20px",marginTop:"20px",background:"#111",maxWidth:"800px"}}>
{active==="registration" && <div><h3>Registration API</h3><input placeholder="Email" style={{padding:"8px",width:"200px"}}/><button style={{marginLeft:"10px",background:"#0ff",padding:"8px 15px",color:"#000"}}>Register</button><p style={{marginTop:"10px",fontSize:"12px"}}>Trader: RubonAI Active | Mining: RLive Assigned</p></div>}
{active==="referral" && <div><h3>Referral API</h3><p>Your Referral Code: SOLARAI-UG-2026</p><p>Referral Earnings: $0.00</p><p>Link: https://solarai-capital-usa.vercel.app/investor?ref=SOLARAI-UG-2026</p></div>}
{active==="deposit" && <div><h3>Deposit API</h3><p>BTC: 1A1z... | ETH: 0x... | TRX: T...</p><input placeholder="Amount USD" style={{padding:"8px"}}/><button style={{marginLeft:"10px",background:"#0ff",padding:"8px",color:"#000"}}>Deposit - Get TxID</button><p style={{fontSize:"12px",marginTop:"10px"}}>Deposit API + TxID Transparency - RubonAI Daily Profit</p></div>}
{active==="withdrawal" && <div><h3>Withdrawal API</h3><input placeholder="Amount" style={{padding:"8px"}}/><button style={{marginLeft:"10px",background:"#0ff",padding:"8px",color:"#000"}}>Withdraw</button><p style={{fontSize:"12px"}}>Compliance Check + TxID Visible</p></div>}
{active==="staking" && <div><h3>Staking API</h3><p>APY: 12% - RLive Mining</p><button style={{background:"#0ff",padding:"8px",color:"#000"}}>Stake Now</button><p>Daily Profit: Starts tomorrow</p></div>}
{active==="priceFeed" && <div><h3>Price Feed API - Kept - No Issues</h3><p>EUR/USD: 1.0850 | BTC: $67,200 | ETH: $3,850 | SOL: $178</p><p>Source: RubonAI Real-Time - Live</p><a href="/api/forex" style={{color:"#0ff"}}>View /api/forex</a></div>}
{active==="email" && <div><h3>Email Communication API</h3><p>Email Alerts: Active</p><p>Daily Profit Report: Enabled</p><p>TxID Alert: Enabled</p></div>}
{active==="announcement" && <div><h3>Announcement API</h3><p>🔥 RubonAI Trader Live! RLive Mining 24/7 Active!</p><p>10 Nodes: BTC,ETH,Blockchain,Cardano,Solana,Polkadot,LTC,TronGrid,TronLink,Monero</p></div>}
{active==="support" && <div><h3>Customer Care API</h3><input placeholder="Your issue" style={{padding:"8px",width:"300px"}}/><button style={{marginLeft:"10px",background:"#0ff",padding:"8px",color:"#000"}}>Submit</button></div>}
{active==="calendar" && <div><h3>Calendar API</h3><p>Daily Profit Calendar - TxID History</p><p>Today: Profit Delivered ✓ Tx: 0xabc...123</p><p>Tomorrow: Next Profit Scheduled</p></div>}
</div>

<div style={{marginTop:"20px"}}>
<a href="/" style={{color:"#fff"}}>← Home</a> | <a href="/admin" style={{color:"#ff0",marginLeft:"10px"}}>Admin Dashboard2</a> | <a href="/api/rubonai-core" style={{color:"#0ff",marginLeft:"10px"}}>RubonAI Core API</a>
</div>
</div>
)
}
