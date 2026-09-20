export default function Home() {
  return (
    <div style={{fontFamily:'Arial, sans-serif', background:'#020617', color:'white', minHeight:'100vh'}}>
      {/* HEADER */}
      <header style={{display:'flex', justifyContent:'space-between', padding:'20px 40px', background:'#0f172a'}}>
        <h2 style={{color:'#22c55e'}}>☀️ SolarAI Capital USA</h2>
        <div>
          <button style={{marginRight:'15px', background:'transparent', color:'white', border:'1px solid #22c55e', padding:'8px 20px', borderRadius:'6px'}}>Login</button>
          <button style={{background:'#22c55e', color:'black', padding:'8px 20px', borderRadius:'6px', border:'none', fontWeight:'bold'}}>Get Started</button>
        </div>
      </header>

      {/* HERO */}
      <section style={{textAlign:'center', padding:'100px 20px'}}>
        <h1 style={{fontSize:'48px', fontWeight:'bold', lineHeight:'1.2'}}>Invest in Solar Future<br/><span style={{color:'#22c55e'}}>Earn Daily Returns</span></h1>
        <p style={{marginTop:'20px', color:'#94a3b8', fontSize:'18px'}}>USA's Most Trusted Clean Solar Investment Platform. AI Powered.</p>
        <button style={{marginTop:'30px', background:'#22c55e', color:'black', padding:'15px 40px', borderRadius:'10px', border:'none', fontSize:'18px', fontWeight:'bold'}}>Start Investing Now →</button>
        <p style={{marginTop:'15px', color:'#64748b'}}>✅ 12,847 Active Investors • $4.2M Paid Out</p>
      </section>

      {/* PLANS */}
      <section style={{display:'flex', justifyContent:'center', gap:'20px', padding:'40px', flexWrap:'wrap'}}>
        {[
          {name:'Starter Sun', price:'$50 - $499', daily:'1.8% Daily', days:'15 Days'},
          {name:'Pro Solar', price:'$500 - $1999', daily:'2.5% Daily', days:'25 Days', best:true},
          {name:'USA Mega', price:'$2000 - $10000', daily:'3.2% Daily', days:'40 Days'}
        ].map((plan)=>(
          <div key={plan.name} style={{background: plan.best ? '#22c55e' : '#1e293b', color: plan.best ? 'black' : 'white', padding:'30px', borderRadius:'15px', width:'280px', textAlign:'center', border: plan.best ? '2px solid #22c55e' : '1px solid #334155'}}>
            {plan.best && <div style={{background:'black', color:'#22c55e', padding:'5px', borderRadius:'20px', fontSize:'12px', marginBottom:'10px'}}>MOST POPULAR</div>}
            <h3 style={{fontSize:'22px', fontWeight:'bold'}}>{plan.name}</h3>
            <p style={{fontSize:'28px', fontWeight:'bold', margin:'15px 0'}}>{plan.price}</p>
            <p>{plan.daily} for {plan.days}</p>
            <button style={{marginTop:'20px', width:'100%', padding:'12px', borderRadius:'8px', border:'none', background: plan.best ? 'black' : '#22c55e', color: plan.best ? 'white' : 'black', fontWeight:'bold'}}>Invest Now</button>
          </div>
        ))}
      </section>

      <footer style={{textAlign:'center', padding:'40px', color:'#64748b', borderTop:'1px solid #1e293b', marginTop:'40px'}}>
        © 2026 SolarAI Capital USA - Clean Energy Investment • Built with ☀️ in USA
      </footer>
    </div>
  );
}
