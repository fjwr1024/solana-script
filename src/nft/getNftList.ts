//////////////////////////////////////////////
// $ npx ts-node src/nft/getNftList.ts
//////////////////////////////////////////////
import { Account } from "@solana-suite/core";

// 自身の所有しているトークン情報を取得
export const getTokenInfoOwned = async (): Promise<
  Account.TokenInfoOwned[]
> => {
  const response = await (
    await Account.getTokenInfoOwned(
      "3TVTReCQJ7kkSiMDLreaFffeuCC2PMVhVWvyiX4wMHbS".toPublicKey()
    )
  ).unwrap();

  console.log("自身の所有しているトークン情報", response);

  return response;
};
