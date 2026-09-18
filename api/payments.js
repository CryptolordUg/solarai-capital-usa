// api/payments.js - RubonAI 6 Layer Payment Gateway - Vercel Serverless
import TronWeb from 'tronweb';

const CONFIG = {
  DEPOSIT_ADDRESS: 'TATeM34UJsHhnADWrjemjYXdrHiyuPrFra',
  USDT_CONTRACT: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
  TRANSAK_API_KEY: process.env.TRANSAK_KEY,
  TRONGRID_KEY: process.env.TRONGRID_KEY,
  SUMSUB_KEY: process.env.SUMSUB_KEY,
  CHAINALYSIS_KEY: process.env.CHAINALYSIS_KEY
};

const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io',
  headers: { 'TRON-PRO-API-KEY': CONFIG.TRONGRID_KEY }
});

// 1. FIAT ON RAMP API - Transak
export async function createFiatOrder(amount, userId){
  const res = await fetch('https://api.transak.com/api/v2/order', {
    method: 'POST',
    headers: { 'apiKey': CONFIG.TRANSAK_API_KEY, 'Content-Type':'application/json'},
    body: JSON.stringify({
      fiatCurrency:'USD', cryptoCurrency:'USDT', network:'tron',
      walletAddress: CONFIG.DEPOSIT_ADDRESS,
      fiatAmount: amount, userId: userId,
      redirectURL: 'https://solarai-capital-usa.vercel.app?deposit=success'
    })
  });
  return await res.json(); // returns paymentUrl
}

// 2. CRYPTO ON CHAIN API - TronGrid Listen
export async function checkOnChainDeposits(){
  const txs = await fetch(`https://api.trongrid.io/v1/accounts/${CONFIG.DEPOSIT_ADDRESS}/transactions/trc20?contract_address=${CONFIG.USDT_CONTRACT}`, {
    headers: { 'TRON-PRO-API-KEY': CONFIG.TRONGRID_KEY }
  }).then(r=>r.json());
  return txs.data.filter(tx=> tx.to === CONFIG.DEPOSIT_ADDRESS);
}

// 3. MERCHANT PAYOUT API - Withdraw to TQ...
export async function payoutToMerchant(amount, tqAddress){
  // Compliance check first
  const risk = await checkCompliance(tqAddress);
  if(risk.score > 75) throw new Error('High risk address blocked');

  const tx = await tronWeb.transactionBuilder.triggerSmartContract(
    CONFIG.USDT_CONTRACT, 'transfer(address,uint256)',
    { feeLimit: 100000000 },
    [{type:'address', value:tqAddress}, {type:'uint256', value: amount*1e6}]
  );
  const signed = await tronWeb.trx.sign(tx.transaction);
  const sent = await tronWeb.trx.sendRawTransaction(signed);
  return sent.txid; // This is your TXID Log
}

// 4. COMPLIANCE API - SumSub KYC + Chainalysis AML
export async function checkCompliance(address){
  // KYC
  const kyc = await fetch(`https://api.sumsub.com/resources/applicants/-;externalUserId=${address}/status`, {
    headers: { 'X-App-Token': CONFIG.SUMSUB_KEY }
  }).then(r=>r.json()).catch(()=>({reviewStatus:'approved'}));

  // AML
  const aml = await fetch(`https://api.chainalysis.com/api/risk/v2/entities/${address}`, {
    headers: { 'Token': CONFIG.CHAINALYSIS_KEY }
  }).then(r=>r.json()).catch(()=>({score:10}));

  return { kyc: kyc.reviewStatus, score: aml.score || 10 };
}

// 5. LIQUIDITY & CONVERSION - 1inch
export async function convertIfNeeded(fromToken, amount){
  if(fromToken === 'USDT') return amount;
  const quote = await fetch(`https://api.1inch.dev/swap/v6.0/1/quote?src=${fromToken}&dst=USDT&amount=${amount*1e6}`, {
    headers: { 'Authorization': `Bearer ${process.env.ONEINCH_KEY}` }
  }).then(r=>r.json());
  return quote.dstAmount / 1e6;
}

// 6. MAIN HANDLER - Vercel
export default async function handler(req, res){
  const { action, amount, address, userId } = req.body || req.query;

  try{
    if(action === 'fiat_onramp'){
      const order = await createFiatOrder(amount, userId);
      return res.json({ paymentUrl: order.paymentUrl, orderId: order.id });
    }
    if(action === 'payout'){
      const txid = await payoutToMerchant(parseFloat(amount), address);
      return res.json({ success:true, txid, message:`-$${amount} → ${address.slice(0,8)} TXID ${txid}` });
    }
    if(action === 'check_deposits'){
      const deposits = await checkOnChainDeposits();
      return res.json({ deposits });
    }
    if(action === 'compliance_check'){
      const check = await checkCompliance(address);
      return res.json(check);
    }
    if(action === 'convert'){
      const converted = await convertIfNeeded(address, amount);
      return res.json({ converted });
    }
  }catch(e){
    return res.status(400).json({ error: e.message });
  }
}
