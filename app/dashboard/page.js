export default function Dashboard() {
  return (
    <div style={{background:'#020617',color:'white',minHeight:'100vh',padding:'30px',fontFamily:'Arial'}}>
      <a href="/" style={{color:'#22c55e',textDecoration:'none'}}>← Back Home</a>
      <h1 style={{fontSize:'36px',marginTop:'20px'}}>Dashboard Working! No 404!</h1>
      <div style={{display:'flex',gap:'15px',marginTop:'20px',flexWrap:'wrap'}}>
        <div style={{background:'#1e293b',padding:'20px',borderRadius:'12px'}}><p>Balance</p><h2 style={{color:'#22c55e'}}>$1,245</h2></div>
        <div style={{background:'#1e293b',padding:'20px',borderRadius:'12px'}}><p>Daily</p><h2 style={{color:'#22c55e'}}>$12.5</h2></div>
        <div style={{background:'#1e293b',padding:'20px',borderRadius:'12px'}}><p>Earned</p><h2>$312</h2></div>
      </div>
      <div style={{background:'#1e293b',padding:'20px',borderRadius:'12px',marginTop:'20px',maxWidth:'500px'}}>
        <p>Active Investment: Pro Solar $500</p>
        <div style={{background:'#334155',height:'8px',borderRadius:'10px',marginTop:'10px'}}><div style={{background:'#22c55e',width:'65%',height:'100%'}}></div></div>
        <button style={{marginTop:'15px',background:'#22c55e',color:'black',padding:'10px 25px',border:'none',borderRadius:'8px',fontWeight:'bold'}}>Withdraw</button>
      </div>
    </div>
  )
}
