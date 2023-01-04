//////////////////////////////////////////////
// $ npx ts-node src/spl-token/createToken.ts
//////////////////////////////////////////////

import { KeypairStr, Pubkey, SplToken } from "@solana-suite/core";
import "dotenv/config";

// 独自のSPLトークンを発行する
const createToken = async () => {
  const owner = new KeypairStr(
    process.env.OWNER_PUBKEY || "",
    process.env.OWNER_SECRET || ""
  );

  const totalAmount = 100000;
  const decimals = 1;
  const inst1 = await SplToken.mint(
    owner.toPublicKey(),
    [owner.toKeypair()],
    totalAmount,
    decimals
  );

  const mint = inst1.unwrap().data as Pubkey;

  // SPLトークンを示す文字列
  console.log("# mint: ", mint);
};

createToken();
