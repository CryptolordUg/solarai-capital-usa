export default function Page() {
  return (
    <div style={{padding:"30px", background:"#000", color:"#fff", minHeight:"100vh", fontFamily:"system-ui"}}>
      <h1 style={{color:"#0ff"}}>SolarAI Capital USA</h1>
      <h2>Powered by RubonAI Trader | RLive Mining</h2>
      <p>Daily Profit Delivery ✓ TxID Transparency ✓ Compliance ✓</p>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"15px", marginTop:"20px", maxWidth:"800px"}}>
        <a href="/investor" style={{border:"1px solid #0ff", padding:"20px", color:"#fff", textDecoration:"none"}}>
          <h3>Dashboard1: Investor Usage</h3>
          <p>10 APIs - Registration, Deposit, Withdrawal, Staking etc</p>
        </a>
        <a href="/admin" style={{border:"2px solid #ff0", padding:"20px", color:"#fff", textDecoration:"none"}}>
          <h3>Dashboard2: Admin Command - Restricted</h3>
          <p>4 Units - RubonAI, Mining 24/7, Compliance, Backup Emlikey1</p>
        </a>
      </div>
      <div style={{marginTop:"20px"}}>
        <a href="/api/investor" style={{color:"#0ff", marginRight:"10px"}}>Investor APIs</a>
        <a href="/api/admin" style={{color:"#ff0", marginRight:"10px"}}>Admin APIs</a>
        <a href="/api/forex" style={{color:"#0ff", marginRight:"10px"}}>Forex Kept</a>
        <a href="/api/mining" style={{color:"#0ff"}}>Mining 10 Nodes</a>
      </div>
    </div>
  );
}
