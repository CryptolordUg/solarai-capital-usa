export default function Dashboard() {
  return (
    <div style={{fontFamily:'Arial', background:'#020617', color:'white', minHeight:'100vh', padding:'20px'}}>
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'30px'}}>
        <h1 style={{color:'#22c55e'}}>☀️ Dashboard</h1>
        <a href="/" style={{color:'#94a3b8', textDecoration:'none'}}>← Back Home</a>
      </header>

      {/* STATS */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'15px', marginBottom:'30px'}}>
        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px'}}>
          <p style={{color:'#94a3b8'}}>Total Balance</p>
          <h2 style={{fontSize:'28px', marginTop:'10px'}}>$1,245.00</h2>
          <p style={{color:'#22c55e', fontSize:'12px', marginTop:'5px'}}>+12.5% today</p>
        </div>
        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px'}}>
          <p style={{color:'#94a3b8'}}>Active Investment</p>
          <h2 style={{fontSize:'28px', marginTop:'10px'}}>$500.00</h2>
          <p style={{color:'#94a3b8', fontSize:'12px', marginTop:'5px'}}>Pro Solar Plan</p>
        </div>
        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px'}}>
          <p style={{color:'#94a3b8'}}>Daily Profit</p>
          <h2 style={{fontSize:'28px', marginTop:'10px', color:'#22c55e'}}>$12.50</h2>
          <p style={{color:'#94a3b8', fontSize:'12px', marginTop:'5px'}}>Next payout in 4h</p>
        </div>
      </div>

      {/* ACTIVE PLAN */}
      <div style={{background:'#1e293b', padding:'25px', borderRadius:'12px', border:'1px solid #22c55e'}}>
        <h3 style={{marginBottom:'15px'}}>☀️ My Active Plan</h3>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
          <span>Pro Solar - $500</span><span style={{color:'#22c55e'}}>Running</span>
        </div>
        <div style={{background:'#334155', height:'8px', borderRadius:'10px', overflow:'hidden'}}>
          <div style={{background:'#22c55e', width:'65%', height:'100%'}}></div>
        </div>
        <p style={{marginTop:'10px', color:'#94a3b8', fontSize:'13px'}}>Day 16 / 25 • $312 Earned</p>
        <button style={{marginTop:'20px', background:'#22c55e', color:'black', border:'none', padding:'12px 25px', borderRadius:'8px', fontWeight:'bold', width:'100%'}}>Withdraw Profit</button>
      </div>

      <div style={{marginTop:'20px', display:'flex', gap:'10px'}}>
        <button style={{flex:1, background:'#0f172a', color:'white', border:'1px solid #334155', padding:'12px', borderRadius:'8px'}}>Deposit</button>
        <button style={{flex:1, background:'#0f172a', color:'white', border:'1px solid #334155', padding:'12px', borderRadius:'8px'}}>Referral</button>
      </div>
    </div>
  );
}
