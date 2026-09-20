export default function Home() {
  return (
    <div style={{fontFamily:'Arial', background:'#020617', color:'white', minHeight:'100vh'}}>
      <header style={{display:'flex', justifyContent:'space-between', padding:'20px 40px', background:'#0f172a'}}>
        <h2 style={{color:'#22c55e'}}>☀️ SolarAI Capital USA</h2>
        <div>
          <a href="/dashboard" style={{marginRight:'15px', color:'white', textDecoration:'none', border:'1px solid #22c55e', padding:'8px 20px', borderRadius:'6px'}}>Dashboard</a>
          <button style={{background:'#22c55e', color:'black', padding:'8px 20px', borderRadius:'6px', border:'none', fontWeight:'bold'}}>Get Started</button>
        </div>
      </header>

      <section style={{textAlign:'center', padding:'80px 20px'}}>
        <h1 style={{fontSize:'44px', fontWeight:'bold'}}>Invest in Solar Future<br/><span style={{color:'#22c55e'}}>Earn Daily Returns</span></h1>
        <p style={{marginTop:'15px', color:'#94a3b8'}}>USA's Most Trusted Solar Platform</p>
        <a href="/dashboard"><button style={{marginTop:'25px', background:'#22c55e', color:'black', padding:'15px 40px', borderRadius:'10px', border:'none', fontSize:'18px', fontWeight:'bold'}}>Start Investing →</button></a>
      </section>

      <section style={{display:'flex', justifyContent:'center', gap:'20px', padding:'30px', flexWrap:'wrap'}}>
        <div style={{background:'#1e293b', padding:'25px', borderRadius:'12px', width:'260px', textAlign:'center'}}><h3>Starter Sun</h3><p style={{fontSize:'22px', margin:'10px 0'}}>$50 - $499</p><p>1.8% Daily x 15 Days</p></div>
        <div style={{background:'#22c55e', color:'black', padding:'25px', borderRadius:'12px', width:'260px', textAlign:'center'}}><h3>Pro Solar ⭐</h3><p style={{fontSize:'22px', margin:'10px 0'}}>$500 - $1999</p><p>2.5% Daily x 25 Days</p></div>
        <div style={{background:'#1e293b', padding:'25px', borderRadius:'12px', width:'260px', textAlign:'center'}}><h3>USA Mega</h3><p style={{fontSize:'22px', margin:'10px 0'}}>$2000+</p><p>3.2% Daily x 40 Days</p></div>
      </section>
      <footer style={{textAlign:'center', padding:'30px', color:'#64748b'}}>© 2026 SolarAI Capital USA</footer>
    </div>
  );
}
