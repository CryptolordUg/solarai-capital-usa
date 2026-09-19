export default function Home(){
return (
<div style={{padding:"30px"}}>
<h1 style={{color:"#0ff",fontSize:"48px",margin:0}}>SolarAI Capital USA</h1>
<p style={{color:"#0ff",borderLeft:"4px solid #0ff",paddingLeft:"10px"}}>Powered by RubonAI Trader | RLive Mining</p>
<p>Daily Profit Delivery ✓ TxID Transparency ✓ Compliance ✓</p>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px",marginTop:"30px",maxWidth:"900px"}}>
<a href="/investor" style={{border:"2px solid #0ff",padding:"25px",color:"#fff",textDecoration:"none",background:"#111"}}>
<h2>Dashboard1: Investor Area</h2><p>10 APIs - Registration, Deposit, Withdrawal, Staking, Price Feed, Email, Announcement, Support, Calendar, Referral</p><span style={{background:"#0ff",color:"#000",padding:"8px 15px"}}>Enter Investor →</span>
</a>
<a href="/admin" style={{border:"2px solid #ff0",padding:"25px",color:"#fff",textDecoration:"none",background:"#111"}}>
<h2>Dashboard2: Admin Command - Restricted</h2><p>4 Units - RubonAI Trader, RLive Mining 24/7, Compliance, Backup Emlikey1</p><span style={{background:"#ff0",color:"#000",padding:"8px 15px"}}>Admin Only →</span>
</a>
</div>
<div style={{marginTop:"30px",fontSize:"12px",opacity:0.6}}>Emlikey1 Hard Copy Backup Saved | Forex Kept | 10 Mining Nodes | RubonAI Live</div>
</div>
)
}
