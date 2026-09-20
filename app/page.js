export default function Home() {
  return (
    <div style={{fontFamily:'Arial', background:'#020617', color:'white', minHeight:'100vh'}}>
      <header style={{display:'flex', justifyContent:'space-between', padding:'20px 40px', background:'#0f172a', alignItems:'center'}}>
        <h2 style={{color:'#22c55e', margin:0}}>☀️ SolarAI Capital USA</h2>
        <div>
          <a href="/dashboard" style={{marginRight:'15px', color:'white', textDecoration:'none', border:'1px solid #22c55e', padding:'8px 20px', borderRadius:'6px'}}>Dashboard</a>
          <a href="/dashboard"><button style={{background:'#22c55e', color:'black', padding:'8px 20px', borderRadius:'6px', border:'none', fontWeight:'bold', cursor:'pointer'}}>Get Started</button></a>
        </div>
      </header>

      <section style={{textAlign:'center', padding:'80px 20px'}}>
        <h1 style={{fontSize:'48px', fontWeight:'bold', lineHeight:'1.2'}}>Invest in Solar Future<br/><span style={{color:'#22c55e'}}>Earn Daily Returns</span></h1>
        <p style={{marginTop:'15px', color:'#94a3b8', fontSize:'18px'}}>USA's Most Trusted Solar Platform - Licensed & Secure</p>
        <a href="/dashboard"><button style={{marginTop:'30px', background:'#22c55e', color:'black', padding:'16px 45px', borderRadius:'12px', border:'none', fontSize:'18px', fontWeight:'bold', cursor:'pointer'}}>Start Investing →</button></a>
        <p style={{marginTop:'15px', color:'#64748b'}}>Minimum $50 • Instant Withdrawals • USA Support</p>
      </section>

      <section style={{display:'flex', justifyContent:'center', gap:'20px', padding:'30px', flexWrap:'wrap'}}>
        <div style={{background:'#1e293b', padding:'25px', borderRadius:'16px', width:'280px', textAlign:'center', border:'1px solid #334155'}}>
          <h3 style={{margin:'0 0 10px'}}>Starter Sun ☀️</h3>
          <p style={{fontSize:'26px', margin:'10px 0', fontWeight:'bold', color:'#22c55e'}}>$50 - $499</p>
          <p>1.8% Daily x 15 Days</p>
          <p style={{color:'#94a3b8', fontSize:'13px', marginTop:'10px'}}>Profit: $13.5 on $50</p>
        </div>
        <div style={{background:'#22c55e', color:'black', padding:'25px', borderRadius:'16px', width:'280px', textAlign:'center', transform:'scale(1.05)', fontWeight:'bold'}}>
          <h3 style={{margin:'0 0 10px'}}>Pro Solar ⭐ MOST POPULAR</h3>
          <p style={{fontSize:'26px', margin:'10px 0'}}>$500 - $1999</p>
          <p>2.5% Daily x 25 Days</p>
          <p style={{fontSize:'13px', marginTop:'10px'}}>Profit: $312 on $500</p>
        </div>
        <div style={{background:'#1e293b', padding:'25px', borderRadius:'16px', width:'280px', textAlign:'center', border:'1px solid #334155'}}>
          <h3 style={{margin:'0 0 10px'}}>USA Mega 💎</h3>
          <p style={{fontSize:'26px', margin:'10px 0', fontWeight:'bold', color:'#22c55e'}}>$2000+</p>
          <p>3.2% Daily x 40 Days</p>
          <p style={{color:'#94a3b8', fontSize:'13px', marginTop:'10px'}}>Profit: $2560 on $2000</p>
        </div>
      </section>

      <footer style={{textAlign:'center', padding:'40px', color:'#64748b', borderTop:'1px solid #1e293b', marginTop:'30px'}}>© 2026 SolarAI Capital USA - All Rights Reserved USA</footer>
    </div>
  );
}
