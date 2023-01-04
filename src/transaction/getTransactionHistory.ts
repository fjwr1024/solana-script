//////////////////////////////////////////////
// $ npx ts-node src/transaction/getTransactionHistory.ts
//////////////////////////////////////////////

import { KeypairStr, Transaction } from "@solana-suite/core";
import "dotenv/config";

// 指定したSPLトークンとウォレットの入手金履歴を取得する
const getTransactionHistory = async () => {
  const owner = new KeypairStr(
    process.env.OWNER_PUBKEY || "",
    process.env.OWNER_SECRET || ""
  );

  const mint = process.env.TOKEN_KEY as string;

  const hist1 = await Transaction.getTokenHistory(
    mint.toPublicKey(),
    owner.toPublicKey()
  );
  console.log("# token history by publish: ", hist1.unwrap());
};

getTransactionHistory();
