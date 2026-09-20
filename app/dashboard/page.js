export default function Dashboard(){
return <div style={{background:'#020617',color:'white',minHeight:'100vh',padding:'40px',fontFamily:'Arial'}}>
<a href="/" style={{color:'#22c55e'}}>← Home</a>
<h1 style={{fontSize:'40px',marginTop:'20px'}}>Dashboard WORKING!</h1>
<p style={{color:'#22c55e',fontSize:'20px'}}>No more 404! Fixed!</p>
<div style={{background:'#1e293b',padding:'20px',borderRadius:'12px',marginTop:'20px',maxWidth:'500px'}}>
<p>Balance: $1,245.00</p>
<p>Profit Today: $12.50</p>
<p>Total Earned: $312.40</p>
<button style={{marginTop:'15px',background:'#22c55e',color:'black',padding:'12px 30px',border:'none',borderRadius:'8px',fontWeight:'bold'}}>Withdraw</button>
</div>
</div>
}
