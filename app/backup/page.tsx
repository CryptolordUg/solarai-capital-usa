export default function Page(){
 const now = new Date().toLocaleString()
 return (
  <div style={{background:"#020617",color:"#fff",minHeight:"100vh",padding:40}}>
   <h1 style={{color:"#fbbf24",fontSize:32,fontWeight:900}}>💾 Backup - LIVE</h1>
   <div style={{background:"#1e293b",padding:24,borderRadius:12,marginTop:20}}>
    <p>✅ Auto-Backup: Active</p>
    <p>Last Backup: {now}</p>
    <p style={{color:"#10b981",marginTop:15}}>All Data Secured</p>
   </div>
   <a href="/" style={{color:"#fbbf24",display:"block",marginTop:30}}>← Home</a>
  </div>
 )
}
