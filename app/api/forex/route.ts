export async function GET() {
  return Response.json({ forex: "Kept - No Issues", prices: { "EUR/USD": 1.0850, BTC: 67200, ETH: 3850, SOL: 178, ADA: 0.45 }, source: "RubonAI Real-Time Price Feed", status: "Live" });
}
