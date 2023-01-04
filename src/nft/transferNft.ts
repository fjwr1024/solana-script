import assert from "assert";

import { SplToken } from "@solana-suite/core";

// NFT移転機能 ownerはNFTの持ち主 publisherは受け取り手
export const transferNft = async (
  mint: string,
  owner: string,
  publisher: string
) => {
  const inst2 = await SplToken.transferNft(
    mint.toPublicKey(),
    owner.toPublicKey(),
    publisher.toPublicKey(),
    [owner.toKeypair()]
  );

  (await [inst2].submit()).match(
    (value) => console.log("# Transfer nft sig: ", value.toExplorerUrl()),
    (error) => assert.fail(error)
  );
};
