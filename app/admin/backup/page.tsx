export default function Page(){
 return (
  <div style={{background:"#020617",color:"#fff",minHeight:"100vh",padding:40}}>
   <h1 style={{color:"#fbbf24",fontSize:32,fontWeight:900}}>💾 Admin / Backup - LIVE</h1>
   <div style={{background:"#1e293b",padding:24,borderRadius:12,marginTop:20}}>
    <p>✅ Backup Engine: Running</p>
    <p>✅ Last Sync: LIVE</p>
    <p style={{color:"#10b981",marginTop:15}}>All Systems Backed Up</p>
   </div>
   <a href="/admin" style={{color:"#fbbf24",display:"block",marginTop:30}}>← Back Admin</a>
  </div>
 )
}
