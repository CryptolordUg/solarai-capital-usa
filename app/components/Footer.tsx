export default function Footer() {
  return (
    <footer style={{background:"#0f172a",color:"#94a3b8",borderTop:"3px solid #fbbf24",marginTop:40}}>
      <div style={{maxWidth:1440,margin:"0 auto",padding:"24px 16px",display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr 1fr 1fr",gap:20}}>
        {/* Brand + Compliance */}
        <div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{width:32,height:32,background:"#fbbf24",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,color:"#000"}}>R</div>
            <span style={{color:"#fff",fontWeight:900,fontSize:13}}>RUBON AI CAPITAL</span>
          </div>
          <div style={{fontSize:9,marginTop:8,lineHeight:1.5}}>
            Managed Mining • Forex • Crypto • Staking<br/>
            TRC20: TATeM34UJsHhnADWrjemjYXdrHiyuPrFra<br/>
            ESG 100% • World Bank Grade • PoA Validated
          </div>
          <div style={{marginTop:12,display:"flex",gap:6}}>
            <span style={{background:"#1e293b",padding:"4px 6px",borderRadius:4,fontSize:8}}>🔒 Data Security: AES-256 • SumSub KYC • Chainalysis AML</span>
          </div>
          <div style={{marginTop:8,display:"flex",gap:8}}>
            <a href="#" style={{fontSize:9,color:"#fbbf24"}}>𝕏 Twitter</a>
            <a href="#" style={{fontSize:9,color:"#fbbf24"}}>Telegram</a>
            <a href="#" style={{fontSize:9,color:"#fbbf24"}}>LinkedIn</a>
            <a href="#" style={{fontSize:9,color:"#fbbf24"}}>GitHub Audit</a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <div style={{color:"#fff",fontWeight:800,fontSize:11,marginBottom:8}}>LEGAL & GOVERNANCE</div>
          <div style={{fontSize:9,display:"grid",gap:6}}>
            <a href="#" style={{color:"#94a3b8",textDecoration:"none"}}>Terms of Service</a>
            <a href="#" style={{color:"#94a3b8",textDecoration:"none"}}>Privacy Policy</a>
            <a href="#" style={{color:"#94a3b8",textDecoration:"none"}}>Risk Disclosure</a>
            <a href="#" style={{color:"#94a3b8",textDecoration:"none"}}>Governance Charter</a>
            <a href="#" style={{color:"#94a3b8",textDecoration:"none"}}>AML/KYC Policy</a>
            <a href="#" style={{color:"#fbbf24",textDecoration:"none"}}>ESG Certification (PDF)</a>
          </div>
        </div>

        {/* Audit */}
        <div>
          <div style={{color:"#fff",fontWeight:800,fontSize:11,marginBottom:8}}>AUDIT REPORTS</div>
          <div style={{fontSize:9,display:"grid",gap:6}}>
            <a href="#" style={{color:"#10b981",textDecoration:"none"}}>✅ Smart Contract Audit 2024</a>
            <a href="#" style={{color:"#10b981",textDecoration:"none"}}>✅ PoA Validator Audit</a>
            <a href="#" style={{color:"#10b981",textDecoration:"none"}}>✅ Chainalysis AML Report</a>
            <a href="#" style={{color:"#94a3b8",textDecoration:"none"}}>World Bank ESG Grade: A+</a>
            <a href="#" style={{color:"#94a3b8",textDecoration:"none"}}>Compliance Badge: VERIFIED</a>
            <a href="#" style={{color:"#fbbf24",textDecoration:"none"}}>Download All Reports →</a>
          </div>
        </div>

        {/* Support */}
        <div>
          <div style={{color:"#fff",fontWeight:800,fontSize:11,marginBottom:8}}>CONTACT & SUPPORT</div>
          <div style={{fontSize:9,display:"grid",gap:6}}>
            <span>📧 support@rubonai.capital</span>
            <span>💬 Live Chat 24/7 • Telegram</span>
            <span>📍 Kampala, UG • Compliance Office</span>
            <a href="#" style={{color:"#fbbf24",textDecoration:"none"}}>Investor Education Hub</a>
            <a href="#" style={{color:"#fbbf24",textDecoration:"none"}}>How Easy Mining Works (6 Engines)</a>
            <a href="#" style={{color:"#fbbf24",textDecoration:"none"}}>Yield Calculator • 8.4% APY</a>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div style={{color:"#fff",fontWeight:800,fontSize:11,marginBottom:8}}>CERTIFICATIONS</div>
          <div style={{fontSize:8,display:"grid",gap:6}}>
            <div style={{background:"#1e293b",padding:6,borderRadius:6,border:"1px solid #334155"}}>🏅 ISO 27001 Data Security<br/>Cert #2024-RUBON-01</div>
            <div style={{background:"#1e293b",padding:6,borderRadius:6,border:"1px solid #334155"}}>🛡️ SOC 2 Type II<br/>Audited • Verified</div>
            <div style={{background:"#1e293b",padding:6,borderRadius:6,border:"1px solid #10b981"}}>🌱 ESG 100% Sustainable<br/>World Bank Aligned</div>
          </div>
        </div>
      </div>

      <div style={{borderTop:"1px solid #1e293b",padding:"12px 16px",display:"flex",justifyContent:"space-between",fontSize:8,color:"#64748b",maxWidth:1440,margin:"0 auto"}}>
        <span>© 2026 RubonAI Capital • SolarAI • All Rights Reserved • TATeM34UJsHhnADWrjemjYXdrHiyuPrFra (TRC20) • Not Financial Advice • Trading Involves Risk • $1 Min Deposit</span>
        <span>Governance Charter v2.1 • Data Security: Encrypted • Investor Login Secured via SumSub • Language: EN / FR / SW / ES / AR</span>
      </div>
    </footer>
  );
}
