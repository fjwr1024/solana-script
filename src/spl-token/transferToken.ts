//////////////////////////////////////////////
// $ npx ts-node src/spl-token/transferToken.ts
//////////////////////////////////////////////

import assert from "assert";
import { Account, KeypairStr, SplToken, Transaction } from "@solana-suite/core";
import "dotenv/config";

// 所持しているSPLトークンを移転する
const transferToken = async () => {
  const owner = new KeypairStr(
    process.env.OWNER_PUBKEY || "",
    process.env.OWNER_SECRET || ""
  );

  // 受け取り用ウォレット生成
  const receipt = Account.create();

  console.log("receipt", receipt);

  const mint = process.env.TOKEN_KEY as string;
  const decimals = process.env.decimals as unknown as number;

  const inst2 = await SplToken.transfer(
    mint.toPublicKey(),
    owner.toPublicKey(),
    receipt.toPublicKey(),
    [owner.toKeypair()],
    10,
    decimals
  );

  (await [inst2].submit()).match(
    async (value) => {
      console.log("# Transfer nft sig: ", value.toExplorerUrl());
      await Transaction.confirmedSig(value);
    },
    (error) => assert.fail(error)
  );
};

transferToken();
