export async function POST(req: Request) {
  const { email } = await req.json();
  return Response.json({ success: true, investorId: `SOLAR-${Date.now()}`, email, referralCode: `SOLARAI-${email.split('@')[0].toUpperCase()}-2026`, trader: "RubonAI Active", mining: "RLive Mining Assigned", dailyProfit: "Starts Tomorrow - TxID Visible" });
}
