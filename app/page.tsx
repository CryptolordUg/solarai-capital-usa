export default function Home() {
  return (
    <div style={{padding:"30px",background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"monospace"}}>
      <h1 style={{color:"#ff0"}}>SolarAI Capital USA - Live 2026</h1>
      <p>Real Functional Company - RubonAI Trader | RLive Mining</p>
      <div style={{marginTop:"20px",display:"flex",gap:"10px"}}>
        <a href="/investor" style={{background:"#0ff",color:"#000",padding:"12px 20px",textDecoration:"none",fontWeight:"bold"}}>Investor Dashboard</a>
        <a href="/admin" style={{background:"#ff0",color:"#000",padding:"12px 20px",textDecoration:"none",fontWeight:"bold"}}>Admin Dashboard</a>
      </div>
      <div style={{marginTop:"20px"}}>
        <p>API: <a href="/api/rubonai-core" style={{color:"#0ff"}}>/api/rubonai-core</a> | <a href="/api/forex" style={{color:"#0ff"}}>/api/forex</a> | <a href="/api/mining" style={{color:"#0ff"}}>/api/mining</a></p>
      </div>
    </div>
  )
}
