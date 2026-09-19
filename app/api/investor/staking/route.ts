export async function POST(req: Request) {
  const { amount } = await req.json();
  return Response.json({ staking: "Active", amount, apy: "12%", dailyProfit: `${(amount*0.12/365).toFixed(2)} USD/day`, trader: "RubonAI Managing", mining: "RLive Mining 24/7", txId: `0xSTAKE${Date.now().toString(16)}` });
}
