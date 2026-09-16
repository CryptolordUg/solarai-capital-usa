import TronWeb from 'tronweb';
const tronWeb = new TronWeb({fullHost:'https://api.trongrid.io',privateKey:process.env.PRIVATE_KEY});
const USDT = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'POST only'});
  try{
    const{to,amount}=req.body;
    if(!to||amount<1) return res.status(400).json({error:'Min $1'});
    const contract=await tronWeb.contract().at(USDT);
    const txID=await contract.transfer(to,tronWeb.toSun(amount)).send({feeLimit:100000000});
    res.json({success:true,txID});
  }catch(e){res.status(500).json({error:e.message});}
}
