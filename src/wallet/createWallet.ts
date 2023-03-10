//////////////////////////////////////////////
// $ npx ts-node src/wallet/createWallet.ts
//////////////////////////////////////////////

import { KeypairStr } from "@solana-suite/core";

// Walletの公開鍵と秘密鍵を生成
const createWallet = () => {
  const account = KeypairStr.create();

  console.log("# pubkey: ", account.pubkey);
  console.log("# secret: ", account.secret);

  return account;
};

createWallet();
