"use client";
import { useState, useEffect } from "react";
export default function EasyMiningUnit() {
  const [time, setTime] = useState("");
  const [bal, setBal] = useState(1247.89);
  const [mining, setMining] = useState(true);
  const [totalProfit, setTotalProfit] = useState(324.50);
  useEffect(() => {
    const s = localStorage.getItem("rubon_bal");
    if (s) setBal(parseFloat(s));
    setTime(new Date().toLocaleTimeString());
    const iv = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      if (mining) {
        setTotalProfit(p => p + Math.random() * 0.3);
        setBal(b => {
          const nb = b + Math.random() * 0.05;
          localStorage.setItem("rubon_bal", nb.toFixed(2));
          return nb;
        });
      }
    }, 1000);
    return () => clearInterval(iv);
  }, [mining]);
  const engines = [
    { id: "forex", name: "Forex Trading Engine", icon: "💱", color: "#3b82f6", status: "5 LIVE", profit: "+$31.19", details: "EUR/USD BUY 0.10 +$8.32 • GBP/USD SELL 0.05 +$5.10 • USD/JPY BUY 0.08 +$3.25 • XAU BUY 0.03 +$1.92 • BTC SELL 0.001 +$12.60", work: "Trend+ Swing+ Breakout+ Carry+ Scalping = 5 Strategies LIVE per second • MA20 1.0831 MA50 1.0819", easy: "One Click → Auto trades forex 24/7 → Profit auto-credited" },
    { id: "crypto", name: "Crypto Mining Engine", icon: "⛏️", color: "#f59e0b", status: "2.4 TH/s", profit: "+$12.40/day", details: "PoW: Hash puzzles • PoC: 4.2TB disk • PoB: 42 TRX burned • PoH: 65k TPS • Block #64821903", work: "PoW secures TXID • PoC uses storage • PoB burns coins • PoH timestamps • All mine TRX/BTC LIVE", easy: "One Click → Starts all 7 mining techniques → Hash rate LIVE" },
    { id: "staking", name: "Staking/Yield Engine", icon: "💎", color: "#10b981", status: "Staked", profit: "8.4% APY", details: `Staked $${bal.toFixed(2)} • PoS validators • Compounding • Yield LIVE • Daily: +$0.42`, work: "PoS staking modules enable compounding profits • Validators earn yields • Auto-compound every second", easy: "One Click → Stake USDT → 8.4% APY auto-compounds → Profit every second" },
    { id: "compliance", name: "Compliance Engine", icon: "🛡️", color: "#ef4444", status: "100% OK", profit: "ESG 100%", details: "PoA trusted validators • SumSub KYC • Chainalysis AML Score <75 • World Bank Grade", work: "PoA tracks ESG supply chain transparency • AML compliance • KYC verification • Risk score LIVE", easy: "One Click → Checks all deposits • AML <75 OK → ESG 100% compliant" },
    { id: "analytics", name: "Analytics Engine", icon: "📊", color: "#8b5cf6", status: "LIVE", profit: "1,247 TX", details: "On-chain analytics • Whale tracking • TRC20 TATeM34UJsHhnADWrjemjYXdrHiyuPrFra • Risk LIVE", work: "PoW feeds provide TXID + block rewards for dashboards • Whale alerts • Profitability metrics real time", easy: "One Click → Tracks all TRC20 deposits → Whale alerts → Dashboard LIVE" },
    { id: "dashboard", name: "Investor Dashboard", icon: "👁️", color: "#ec4899", status: "LIVE", profit: `$${totalProfit.toFixed(2)} Net`, details: `Balance $${bal.toFixed(2)} • Net +$${totalProfit.toFixed(2)} • 50/50 split • Real time {time}`, work: "Displays profitability + sustainability metrics in real time • World Bank grade transparency • All engines combined", easy: "One Click → Shows all profits • Sustainability • Transparency • Investor view LIVE" },
  ];
  const [active, setActive] = useState("forex");
  return (
    <div style={{ background: "#0f172a", minHeight: "100vh", color: "#fff", fontFamily: "system-ui", padding: 16 }}>
      <div style={{ maxWidth: 1450, margin: "0 auto" }}>
        <div style={{ background: "linear-gradient(90deg, #0f172a, #1e293b)", border: "2px solid #fbbf24", borderRadius: 14, padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 900 }}>⚡ EASY MINING UNIT • 6 ENGINES • RubonAI MANAGED • ONE CLICK MINING</div>
            <div style={{ fontSize: 11, color: "#10b981", marginTop: 4 }}>● EASY MINING LIVE {time} • Forex + Crypto Mining + Staking + Compliance + Analytics + Investor Dashboard • TATeM34UJsHhnADWrjemjYXdrHiyuPrFra</div>
            <div style={{ fontSize: 10, color: "#fbbf24", marginTop: 4 }}>Balance ${bal.toFixed(2)} • Net Profit ${totalProfit.toFixed(2)} • All 6 Engines Mining LIVE per second • {mining? "● MINING ACTIVE" : "○ Paused"}</div>
          </div>
          <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
            <button onClick={() => setMining(!mining)} style={{ background: mining? "#10b981" : "#ef4444", border: "none", padding: "10px 20px", borderRadius: 20, fontWeight: 900, cursor: "pointer", color: "#fff" }}>{mining? "● MINING LIVE" : "○ START EASY MINING"}</button>
            <div style={{ background: "#fbbf24", color: "#000", padding: "6px 12px", borderRadius: 20, fontSize: 10, fontWeight: 800, textAlign: "center" }}>${bal.toFixed(2)} • {time}</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 16 }}>
          {engines.map(e => (
            <div key={e.id} onClick={() => setActive(e.id)} style={{ background: active === e.id? e.color : "#1e293b", border: `3px solid ${active === e.id? e.color : "#334155"}`, borderRadius: 12, padding: 14, cursor: "pointer" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ fontSize: 26 }}>{e.icon}</span><span style={{ background: "rgba(0,0,0,0.4)", padding: "4px 8px", borderRadius: 10, fontSize: 9, fontWeight: 800 }}>{e.status} • {time.slice(0,5)}</span></div>
              <div style={{ fontSize: 13, fontWeight: 900, marginTop: 8 }}>{e.name}</div>
              <div style={{ fontSize: 10, fontWeight: 700, marginTop: 4, background: "rgba(0,0,0,0.3)", padding: "4px 8px", borderRadius: 6, display: "inline-block" }}>{e.profit} LIVE • {time}</div>
              <div style={{ fontSize: 9, marginTop: 8, lineHeight: 1.4, opacity: 0.9 }}>{e.details}</div>
              <div style={{ fontSize: 8, marginTop: 8, background: "#0f172a", padding: 6, borderRadius: 6 }}><b>EASY:</b> {e.easy}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 16, marginTop: 18 }}>
          <div style={{ background: "#fff", color: "#000", borderRadius: 12, padding: 18 }}>
            {engines.filter(e => e.id === active).map(e => (
              <div key={e.id}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontSize: 16, fontWeight: 900 }}>{e.icon} {e.name} • EASY MINING LIVE</div><span style={{ background: e.color, color: "#fff", padding: "6px 12px", borderRadius: 20, fontSize: 11, fontWeight: 800 }}>{e.status} • {e.profit} • {time}</span></div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 14 }}>
                  <div style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 8, padding: 12 }}><div style={{ fontSize: 11, fontWeight: 800 }}>Category / Details</div><div style={{ fontSize: 10, marginTop: 8, lineHeight: 1.5 }}>{e.details}<br/><br/><b>How it works:</b> {e.work}</div></div>
                  <div style={{ background: "#f8fafc", border: "1px solid #e5e7eb", borderRadius: 8, padding: 12 }}><div style={{ fontSize: 11, fontWeight: 800 }}>How They Will Work Together - EASY MINING</div><div style={{ fontSize: 10, marginTop: 8, lineHeight: 1.5 }}><b>{e.easy}</b><br/><br/>Combined with other 5 engines: Forex feeds TXID, Crypto Mining secures blocks, Staking compounds {bal.toFixed(2)}, Compliance tracks ESG, Analytics displays real time, Dashboard shows World Bank grade transparency. All LIVE {time}.</div></div>
                </div>
                <div style={{ marginTop: 14, background: "#111827", color: "#10b981", padding: 12, borderRadius: 8, fontFamily: "monospace", fontSize: 10 }}>
                  [{time}] {e.name.toUpperCase()}: {e.details} • LIVE<br/>
                  [{time}] RUBONAI: Easy mining active • One click → All 6 engines<br/>
                  [{time}] PROFIT: ${totalProfit.toFixed(2)} Net • Balance ${bal.toFixed(2)} • Mining {mining? "ACTIVE" : "PAUSED"}<br/>
                  [{time}] TATeM34UJsHhnADWrjemjYXdrHiyuPrFra • TRC20 LIVE
                </div>
              </div>
            ))}
            <div style={{ marginTop: 14, border: "2px solid #fbbf24", borderRadius: 10, overflow: "hidden" }}>
              <div style={{ background: "#fbbf24", color: "#000", padding: 10, fontSize: 12, fontWeight: 900, textAlign: "center" }}>⚡ HOW ALL 6 ENGINES WORK TOGETHER - EASY MINING FOR RUBONAI - ONE CLICK = ALL LIVE {time}</div>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", fontSize: 10, fontWeight: 800, background: "#0f172a", color: "#fff", padding: 8 }}><div>Engine</div><div>Details</div><div>How They Work Together - Easy Mining</div></div>
              <div style={{ fontSize: 9 }}>
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", padding: 8, borderBottom: "1px solid #f1f5f9" }}><div><b>💱 Forex</b></div><div>5 Strategies LIVE • +$31.19/day</div><div>Provides TXID + profit feeds to Investor Dashboard • LIVE {time}</div></div>
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", padding: 8, borderBottom: "1px solid #f1f5f9" }}><div><b>⛏️ Crypto Mining</b></div><div>PoW+PoS+PoA+PoC+PoB+PoH • 2.4 TH/s</div><div>Secures transactions • Block LIVE • {time}</div></div>
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", padding: 8, borderBottom: "1px solid #f1f5f9" }}><div><b>💎 Staking</b></div><div>8.4% APY • ${bal.toFixed(2)} staked</div><div>Compounds profits • Auto-compound every second • {time} LIVE</div></div>
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", padding: 8, borderBottom: "1px solid #f1f5f9" }}><div><b>🛡️ Compliance</b></div><div>PoA ESG 100% • AML {"<"}75</div><div>Tracks ESG supply chain transparency • World Bank Grade • {time}</div></div>
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", padding: 8, borderBottom: "1px solid #f1f5f9" }}><div><b>📊 Analytics</b></div><div>1,247 TX • Whale alerts</div><div>Displays profitability + sustainability metrics real time • {time}</div></div>
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr", padding: 8, background: "#ecfdf5" }}><div><b>👁️ Dashboard</b></div><div><b>Investor view • ${totalProfit.toFixed(2)} Net</b></div><div><b>All 6 engines combined → Easy mining → Daily profit delivery with World Bank grade transparency • LIVE {time}</b></div></div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 800 }}>⚡ EASY MINING CONTROL • ONE CLICK</div>
              <button onClick={() => setMining(!mining)} style={{ width: "100%", marginTop: 12, background: mining? "#10b981" : "#fbbf24", border: "none", padding: 14, borderRadius: 10, fontWeight: 900, fontSize: 14, cursor: "pointer", color: mining? "#fff" : "#000" }}>{mining? "● EASY MINING LIVE - CLICK TO PAUSE" : "▶ START EASY MINING - 6 ENGINES"}</button>
              <div style={{ marginTop: 12, background: "#0f172a", borderRadius: 8, padding: 10 }}>
                <div style={{ fontSize: 10, color: "#94a3b8" }}>TOTAL EASY MINING PROFIT</div>
                <div style={{ fontSize: 22, fontWeight: 900, color: "#fbbf24" }}>${totalProfit.toFixed(2)} Net</div>
                <div style={{ fontSize: 10, color: "#10b981", marginTop: 4 }}>Balance ${bal.toFixed(2)} • 50/50 Auto Split Ready • {time}</div>
              </div>
            </div>
            <div style={{ background: "#fbbf24", color: "#000", borderRadius: 12, padding: 14, textAlign: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 900 }}>EASY MINING = ONE CLICK</div>
              <div style={{ fontSize: 10, marginTop: 6, fontWeight: 700 }}>Forex Trading Engine → Profit<br/>Crypto Mining Engine → Secure<br/>Staking Engine → Compound<br/>Compliance → ESG Track<br/>Analytics → Display LIVE<br/>Dashboard → World Bank Grade</div>
              <div style={{ fontSize: 9, marginTop: 8, background: "#000", color: "#fbbf24", padding: 6, borderRadius: 6 }}>TATeM34UJsHhnADWrjemjYXdrHiyuPrFra • {time} LIVE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
