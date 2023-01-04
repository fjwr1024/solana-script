//////////////////////////////////////////////
// $ npx ts-node src/spl-token/partialsign-clinet.ts
//////////////////////////////////////////////

import assert from "assert";
import { SplToken } from "@solana-suite/core";

// SPLtokenのpartialSign
export const partialSignToken = async (
  walletAddress: string,
  dest: string,
  secretKey: string,
  tokenAmount: number
) => {
  try {
    const tokenKey = process.env.OWNER_PUBKEY;
    const feePayer = process.env.FEE_PAYER_PUBKEY;

    const inst = await SplToken.feePayerPartialSignTransfer(
      (tokenKey as string).toPublicKey(),
      walletAddress.toPublicKey(),
      dest.toPublicKey(),
      [secretKey.toKeypair()],
      tokenAmount,
      1,
      (feePayer as string).toPublicKey()
    );
    console.log(inst);
    const hex = inst.unwrap();

    let hex2: string = "";

    inst.match(
      (ok) => {
        hex2 = ok.hexInstruction;
        console.log("# hex instruction: ", hex2);
      },
      (err) => assert.fail(err.message)
    );

    console.log("hexdata", hex);

    return hex.hexInstruction;
  } catch (e) {
    console.log(e);
  }
};
