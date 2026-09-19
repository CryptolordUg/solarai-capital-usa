export async function GET() {
  return Response.json({
    dashboard: "Dashboard1 - Direct Investor Usage APIs",
    apis: {
      registration: "/api/investor/registration - Ready",
      referral: "/api/investor/referral - Ready",
      deposit: "/api/investor/deposit - Ready",
      withdrawal: "/api/investor/withdrawal - Ready",
      staking: "/api/investor/staking - Ready",
      priceFeed: "/api/forex - Kept - Live",
      email: "/api/investor/email - Ready",
      announcement: "/api/investor/announcement - Ready",
      customerCare: "/api/investor/support - Ready",
      calendar: "/api/investor/calendar - Ready"
    },
    rubonAI: "RubonAI Trader - Daily Profit + TxID"
  });
}
