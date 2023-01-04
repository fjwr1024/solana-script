//////////////////////////////////////////////
// $ npx ts-node src/spl-token/partialsign-server.ts
//////////////////////////////////////////////

import assert from "assert";
import { PartialSignInstruction } from "@solana-suite/shared";

// clientから送信されたhexデータを受け取り移転完了させる関数
export const submitSplHex = async (hex: string, feePayer: string) => {
  const obj = new PartialSignInstruction(hex);
  const res = await obj.submit(feePayer.toKeypair());
  res.match(
    (ok) => console.log("# tx signature: ", ok),
    (err) => assert.fail(err.message)
  );
};
