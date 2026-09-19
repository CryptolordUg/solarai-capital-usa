export async function GET() {
  return Response.json({
    apiName: "RubonAI Core API - Real - Renamed from Dashboard API-Real",
    oldName: "Dashboard API-Real",
    newName: "RubonAI Core API - Real",
    trader: "RubonAI - SolarAI Capital Trader",
    mode: "Real-Time Crypto Trading & RLive Mining",
    dailyProfit: "Delivery Active",
    txTransparency: "TxID Visible",
    compliance: "ON",
    endpoints: {
      investor: "/api/investor - Dashboard1",
      admin: "/api/admin - Dashboard2 (4 Units)",
      forex: "/api/forex - Kept Live",
      mining: "/api/mining - 10 Nodes",
      core: "/api/rubonai-core - NEW NAME - Real Functional"
    },
    status: "Real Functional Company - Emlikey1 Saved"
  });
}
