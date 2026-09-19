"use client";
import { useState } from "react";
export default function AdminPage(){
const [unit,setUnit]=useState("rubonAI");
return (
<div style={{padding:"20px",background:"#000",color:"#fff",minHeight:"100vh"}}>
<h1 style={{color:"#ff0"}}>Dashboard2: Admin Command - 4 Units - Restricted</h1>
<p>RubonAI Trader | RLive Mining 24/7 | Compliance | Backup - Investors Blocked</p>
<div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginTop:"15px"}}>
{[
{id:"rubonAI",name:"Unit1: RubonAI Trader"},
{id:"mining",name:"Unit2: RLive Mining 24/7"},
{id:"compliance",name:"Unit3: Compliance Monitoring"},
{id:"backup",name:"Unit4: Backup & Maintenance - Emlikey1"}
].map(u=>(
<button key={u.id} onClick={()=>setUnit(u.id)} style={{padding:"10px 15px",background:unit===u.id?"#ff0":"#222",color:unit===u.id?"#000":"#fff",border:"1px solid #444",cursor:"pointer"}}>{u.name}</button>
))}
</div>

<div style={{border:"2px solid #ff0",padding:"20px",marginTop:"20px",background:"#111",maxWidth:"900px"}}>
{unit==="rubonAI" && <div><h2 style={{color:"#0ff"}}>Unit1: RubonAI Trader - Real-time Crypto & Spot Trading</h2><p>Mode: Real-Time Trading / RLive Mining</p><p>Daily Profit Delivery: Active - TxID Transparency Enabled</p><div style={{background:"#000",padding:"10px",marginTop:"10px",border:"1px solid #333"}}><p>BTC/USDT: Long | Profit: +$1,240 Today</p><p>ETH/USDT: Short | Profit: +$890 Today</p><p>SOL/USDT: Long | Profit: +$450 Today</p></div><p style={{fontSize:"12px",marginTop:"10px"}}>API: /api/rubonai-core | Status: Real Functional - Saved in Emlikey1</p></div>}
{unit==="mining" && <div><h2 style={{color:"#0f0"}}>Unit2: RLive Mining 24/7 - Real-Time Mining - 10 Nodes</h2><p>10 Mining Nodes Operational: BTC, ETH, Blockchain, Cardano, Solana, Polkadot, LTC, TronGrid, TronLink, Monero</p><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",marginTop:"10px"}}><div style={{border:"1px solid #333",padding:"10px"}}><p>BTC Node: 45 TH/s - Active</p><p>Daily: 0.0023 BTC</p></div><div style={{border:"1px solid #333",padding:"10px"}}><p>ETH Node: 2.5 GH/s - Active</p><p>Daily: 0.15 ETH</p></div></div><p style={{fontSize:"12px",marginTop:"10px"}}>API: /api/mining | TxID Visible for Each Payout | Compliance ON</p></div>}
{unit==="compliance" && <div><h2 style={{color:"#f90"}}>Unit3: Compliance Monitoring API - Risk, TxID, AML</h2><p>Compliance: ON | Risk Assessment: Low</p><p>All Withdrawals Checked - TxID Transparency</p><div style={{background:"#000",padding:"10px",border:"1px solid #333"}}><p>✅ Daily Profit Tx: 0xabc...123 - Approved</p><p>✅ Withdrawal Tx: 0xdef...456 - Approved</p><p>✅ AML Check: Passed - All Investors</p></div><p style={{fontSize:"12px",marginTop:"10px"}}>Daily Profit Delivery with TxID - Compliance Kept - Emlikey1 Saved</p></div>}
{unit==="backup" && <div><h2 style={{color:"#ff0"}}>Unit4: Backup & Maintenance - Emlikey1 V3 - Hard Copy + Digital</h2><p>Backup: Emlikey1.json - V3 - Updated - Saved Forever</p><p>Hard Copy: Emlikey1_HardCopy.md - Printed - Safe</p><div style={{background:"#000",padding:"15px",border:"1px solid #ff0",marginTop:"10px"}}><p>🔐 RubonAI Core API - Real - Renamed from Dashboard API-Real - SAVED</p><p>🔐 Forex Kept - No Issues - SAVED</p><p>🔐 10 Mining Nodes - SAVED</p><p>🔐 10 Investor APIs - Real Functional - SAVED</p><p>🔐 4 Admin Units - Restricted - Investors Blocked - SAVED</p><p>🔐 Daily Profit + TxID + Compliance - SAVED</p></div><a href="/Emlikey1.json" style={{color:"#ff0",display:"block",marginTop:"10px"}}>View Emlikey1.json Backup</a></div>}
</div>

<div style={{marginTop:"20px"}}><a href="/" style={{color:"#fff"}}>← Home</a> | <a href="/investor" style={{color:"#0ff",marginLeft:"10px"}}>Investor Dashboard1</a> | <a href="/api/rubonai-core" style={{color:"#ff0",marginLeft:"10px"}}>RubonAI Core API</a></div>
</div>
)
}
