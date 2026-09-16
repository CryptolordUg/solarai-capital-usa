import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
const ADMIN_WALLET = 'TATeM34UJsHhnADWrjemiYXdrHiyuPrFra';
const USDT = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';

export default async function handler(req,res){
  try{
    const r = await fetch(`https://api.trongrid.io/v1/accounts/${ADMIN_WALLET}/transactions/trc20?limit=50&contract_address=${USDT}`,{ headers:{'TRON-PRO-API-KEY':process.env.TRONGRID_KEY} });
    const data = await r.json();
    let count=0;
    for(let tx of data.data||[]){
      if(tx.to!==ADMIN_WALLET) continue;
      let amount = Number(tx.value)/1e6;
      if(amount<1) continue;
      let {data:exists}=await supabase.from('deposits').select('id').eq('txid',tx.transaction_id).single();
      if(exists) continue;
      await supabase.from('deposits').insert({from_address:tx.from,to_address:tx.to,amount,txid:tx.transaction_id,status:'confirmed'});
      await supabase.from('users').upsert({wallet_address:tx.from,balance:amount*0.8},{onConflict:'wallet_address'});
      count++;
    }
    res.json({ok:true,found:count});
  }catch(e){res.status(500).json({error:e.message});}
}
