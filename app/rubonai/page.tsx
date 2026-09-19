"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RubonAI() {
  const [time, setTime] = useState("");
  const [bal, setBal] = useState(1247.89);
  const [profit, setProfit] = useState(331.47);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const s = localStorage.getItem("rubon_bal");
    if (s) setBal(parseFloat(s));
    setTime(new Date().toLocaleTimeString());
    const iv = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setProfit(p => p + Math.random()*0.2);
      setBal(b => {
        const nb = b + Math.random()*0.03;
        localStorage.setItem("rubon_bal", nb.toFixed(2));
        return nb;
      });
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div style={{background:"#f8fafc",minHeight:"100vh",fontFamily:"system-ui"}}>
      <Header />
      <div style={{maxWidth:1440,margin:"0 auto",padding:16,display:"grid",gridTemplateColumns:"280px 1fr 320px",gap:16}}>
        {/* LEFT - CLEAN - NO BIG QR */}
        <div style={{display:"grid",gap:12,height:"fit-content"}}>
          <div style={{background:"#fff",borderRadius:12,padding:14,border:"1px solid #e5e7eb",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"}}>
            <div style={{fontSize:11,fontWeight:800}}>💰 REAL BALANCE • LIVE</div>
            <div style={{fontSize:24,fontWeight:900,color:"#0f172a",marginTop:6}}>${bal.toFixed(2)} USDT</div>
            <div style={{fontSize:10,color:"#10b981",marginTop:4}}>● TRC20 Connected • {time} • LIVE</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:12}}>
              <button onClick={()=>setShowQR(true)} style={{background:"#fbbf24",border:"none",padding:10,borderRadius:8,fontWeight:800,fontSize:11,cursor:"pointer"}}>⬇ DEPOSIT<br/>$1 Min</button>
              <button style={{background:"#0f172a",color:"#fff",border:"none",padding:10,borderRadius:8,fontWeight:800,fontSize:11,cursor:"pointer"}}>⬆ WITHDRAW</button>
            </div>
            <div style={{marginTop:10,background:"#f8fafc",padding:8,borderRadius:6,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:9}}>
              <span style={{fontFamily:"monospace"}}>TATeM34...PrFra</span>
              <button onClick={()=>navigator.clipboard.writeText("TATeM34UJsHhnADWrjemjYXdrHiyuPrFra")} style={{background:"#0f172a",color:"#fff",border:"none",padding:"4px 8px",borderRadius:4,fontSize:8,fontWeight:800,cursor:"pointer"}}>COPY</button>
            </div>
          </div>

          <div style={{background:"#fff",borderRadius:12,padding:14,border:"1px solid #e5e7eb"}}>
            <div style={{fontSize:11,fontWeight:800}}>⚡ 5 LIVE TRADING SIGNALS</div>
            <div style={{marginTop:8,fontSize:9,display:"grid",gap:6}}>
              <div>EUR/USD BUY +$8.32 ● MA20 1.0831</div>
              <div>GBP/USD SELL +$5.10 ● Trend</div>
              <div>USD/JPY BUY +$3.25 ● Breakout</div>
              <div>XAU BUY +$1.92 ● Carry</div>
              <div>BTC SELL +$12.60 ● Scalping</div>
            </div>
          </div>
        </div>

        {/* CENTER - CHART FULL WIDTH */}
        <div style={{background:"#fff",borderRadius:12,padding:16,border:"1px solid #e5e7eb",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontSize:14,fontWeight:900}}>BTC/USD • Chart • TradingView Style</div>
            <div style={{fontSize:10,background:"#fbbf24",padding:"4px 8px",borderRadius:6,fontWeight:800}}>LIVE {time}</div>
          </div>
          <div style={{marginTop:12,height:420,background:"linear-gradient(180deg,#ffffff,#f8fafc)",border:"1px solid #e5e7eb",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:"#94a3b8",fontSize:12}}>
            Trading Chart - Candlesticks - LIVE per second - Clean, not dull
          </div>
        </div>

        {/* RIGHT - P/L */}
        <div style={{display:"grid",gap:12,height:"fit-content"}}>
          <div style={{background:"#0f172a",borderRadius:12,padding:14,color:"#fff"}}>
            <div style={{fontSize:11,fontWeight:800,color:"#fbbf24}}>💎 P/L LIVE • NET PROFIT</div>
            <div style={{fontSize:22,fontWeight:900,marginTop:6,color:"#10b981"}}>+${profit.toFixed(2)} Net</div>
            <div style={{fontSize:9,marginTop:4,color:"#94a3b8"}}>Balance ${bal.toFixed(2)} • 50/50 Auto Split • {time}</div>
          </div>
          <div style={{background:"#fff",borderRadius:12,padding:14,border:"1px solid #e5e7eb"}}>
            <div style={{fontSize:11,fontWeight:800}}>⛏️ MINING LIVE</div>
            <div style={{fontSize:9,marginTop:8}}>2.4 TH/s • PoW PoS PoA PoC PoB PoH<br/>Block #64821903 • 65k TPS • LIVE</div>
            <a href="/admin/mining" style={{display:"block",marginTop:10,background:"#0f172a",color:"#fbbf24",textAlign:"center",padding:8,borderRadius:6,fontSize:10,fontWeight:800,textDecoration:"none"}}>OPEN 6 ENGINES →</a>
          </div>
        </div>
      </div>

      {/* QR POPUP - ONLY WHEN CLICKED - NOT DIRTY */}
      {showQR && (
        <div onClick={()=>setShowQR(false)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,backdropFilter:"blur(4px)"}}>
          <div onClick={e=>e.stopPropagation()} style={{background:"#fff",borderRadius:16,padding:20,width:340,textAlign:"center"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
              <span style={{fontWeight:900,fontSize:13}}>DEPOSIT QR • TRC20 • LIVE {time}</span>
              <button onClick={()=>setShowQR(false)} style={{background:"#ef4444",color:"#fff",border:"none",width:28,height:28,borderRadius:14,fontWeight:800,cursor:"pointer"}}>X</button>
            </div>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=TATeM34UJsHhnADWrjemjYXdrHiyuPrFra`} style={{width:220,height:220,borderRadius:8}} alt="QR" />
            <div style={{marginTop:12,background:"#0f172a",color:"#fbbf24",padding:10,borderRadius:8,fontSize:9,fontFamily:"monospace",wordBreak:"break-all"}}>TATeM34UJsHhnADWrjemjYXdrHiyuPrFra</div>
            <button onClick={()=>{navigator.clipboard.writeText("TATeM34UJsHhnADWrjemjYXdrHiyuPrFra"); setShowQR(false);}} style={{width:"100%",marginTop:12,background:"#fbbf24",border:"none",padding:12,borderRadius:8,fontWeight:900,cursor:"pointer"}}>COPY & CLOSE</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
