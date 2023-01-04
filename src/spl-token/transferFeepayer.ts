//////////////////////////////////////////////
// $ npx ts-node src/spl-token/transferFeePayer.ts
//////////////////////////////////////////////

import { KeypairStr, SolNative } from "@solana-suite/core";
import "dotenv/config";

// feePayer に SOL を送金する
const transferFee = async () => {
  const owner = new KeypairStr(
    process.env.OWNER_PUBKEY || "",
    process.env.OWNER_SECRET || ""
  );

  const feePayer = new KeypairStr(
    process.env.FEE_PAYER_PUBKEY || "",
    process.env.FEE_PAYER_SECRET || ""
  );

  const instruction = await SolNative.transfer(
    owner.toPublicKey(),
    feePayer.toPublicKey(),
    [owner.toKeypair()],
    1
  );

  (await [instruction].submit()).match(
    (value) => console.log("# sig url: ", value.toExplorerUrl()),
    (error) => console.log(error.message)
  );
};

transferFee();
