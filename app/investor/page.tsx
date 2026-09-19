export default function InvestorPage() {
  return (
    <div style={{padding:"40px"}}>
      <h1>Investor Portal</h1>
      <p>Welcome Investor - Your Capital Dashboard</p>
      <div style={{background:"#111", padding:"20px", marginTop:"20px"}}>
        <p>Portfolio Value: $0.00 (Syncing...)</p>
        <p>Solar Investments: Active</p>
      </div>
      <a href="/" style={{color:"#0ff"}}>Back</a>
    </div>
  );
}
