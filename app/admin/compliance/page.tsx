export default function Page(){
 return (
  <div style={{background:"#020617",color:"#fff",minHeight:"100vh",padding:40}}>
   <h1 style={{color:"#fbbf24",fontSize:32,fontWeight:900}}>🛡️ Admin / Compliance - LIVE</h1>
   <div style={{background:"#1e293b",padding:24,borderRadius:12,marginTop:20}}>
    <p>✅ KYC: Active</p>
    <p>✅ AML: Monitoring</p>
    <p>✅ Anmin: Secured</p>
    <p style={{color:"#10b981",marginTop:15,fontWeight:900}}>COMPLIANCE GREEN</p>
   </div>
   <a href="/admin" style={{color:"#fbbf24",display:"block",marginTop:30}}>← Back Admin</a>
  </div>
 )
}
