export default function Dashboard() {
  return (
    <div style={{fontFamily:'Arial', background:'#020617', minHeight:'100vh', color:'white', padding:'20px'}}>
      <a href="/" style={{color:'#22c55e', textDecoration:'none'}}>← Back to Home</a>
      <h1 style={{marginTop:'20px', fontSize:'32px'}}>📊 Dashboard - LIVE!</h1>
      <p style={{color:'#22c55e'}}>404 Fixed! No more error!</p>
      <div style={{display:'flex', gap:'15px', marginTop:'20px', flexWrap:'wrap'}}>
        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px', minWidth:'150px'}}><p>Total Balance</p><h2 style={{color:'#22c55e'}}>$1,245.00</h2></div>
        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px', minWidth:'150px'}}><p>Daily Profit</p><h2 style={{color:'#22c55e'}}>$12.50</h2></div>
        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px', minWidth:'150px'}}><p>Total Earned</p><h2>$312.40</h2></div>
      </div>
      <div style={{background:'#1e293b', padding:'25px', borderRadius:'12px', marginTop:'20px', maxWidth:'600px'}}>
        <h3>Active: Pro Solar $500 - Running</h3>
        <div style={{background:'#334155', height:'10px', borderRadius:'10px', marginTop:'15px'}}><div style={{background:'#22c55e', width:'65%', height:'100%'}}></div></div>
        <p style={{marginTop:'10px'}}>Day 16 / 25</p>
        <button style={{marginTop:'20px', background:'#22c55e', color:'black', padding:'12px 35px', border:'none', borderRadius:'8px', fontWeight:'bold'}}>Withdraw Now</button>
      </div>
    </div>
  );
}
