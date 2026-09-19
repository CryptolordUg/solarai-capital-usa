export default function Page() {
  return (
    <div style={{padding:"40px", minHeight:"100vh"}}>
      <h1 style={{fontSize:"48px", color:"#00ffff"}}>SolarAI Capital USA</h1>
      <h2>🟢 LIVE - Investor Platform</h2>
      <p>Admin + Investor System Restored from Zero</p>
      <div style={{marginTop:"30px", display:"flex", gap:"20px"}}>
        <a href="/admin" style={{padding:"15px 30px", background:"#00ffff", color:"#000", textDecoration:"none"}}>Admin Area</a>
        <a href="/investor" style={{padding:"15px 30px", background:"#fff", color:"#000", textDecoration:"none"}}>Investor Area</a>
      </div>
      <p style={{marginTop:"50px", opacity:0.5}}>CryptolordUg - Production v2.0 - {new Date().toLocaleString()}</p>
    </div>
  );
}
