export default function Dashboard() {
  return (
    <div style={{fontFamily:'Arial', background:'#020617', minHeight:'100vh', color:'white', padding:'20px'}}>
      <a href="/" style={{color:'#22c55e'}}>← Back to Home</a>
      <h1 style={{marginTop:'20px', fontSize:'32px'}}>📊 Dashboard</h1>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'15px', marginTop:'20px'}}>
        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px'}}><p>Balance</p><h2 style={{color:'#22c55e'}}>$1,245</h2></div>
        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px'}}><p>Daily Profit</p><h2 style={{color:'#22c55e'}}>$12.50</h2></div>
        <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px'}}><p>Total Earned</p><h2>$312.40</h2></div>
      </div>
      <div style={{background:'#1e293b', padding:'20px', borderRadius:'12px', marginTop:'20px'}}>
        <h3>Active Investment: Pro Solar $500</h3>
        <p style={{marginTop:'10px'}}>Progress: Day 16 / 25</p>
        <div style={{background:'#334155', height:'10px', borderRadius:'10px', marginTop:'10px'}}><div style={{background:'#22c55e', width:'65%', height:'100%', borderRadius:'10px'}}></div></div>
        <button style={{marginTop:'20px', background:'#22c55e', color:'black', padding:'10px 30px', border:'none', borderRadius:'8px', fontWeight:'bold'}}>Withdraw Profit</button>
      </div>
    </div>
  );
}
