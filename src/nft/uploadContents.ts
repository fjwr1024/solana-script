//////////////////////////////////////////////
// $ npx ts-node src/nft/uploadContents.ts
//////////////////////////////////////////////

import assert from "assert";
import fs from "fs";
import { StorageNftStorage } from "@solana-suite/nft";

// NFTStorageに画像アップロード
export const uploadContents = async (
  name: string,
  description: string,
  image: string
) => {
  const imageFile = fs.readdirSync(image);

  const asset = {
    name,
    description,
    image: imageFile[0],
  };

  const url = await StorageNftStorage.upload(asset);

  if (url.isErr) {
    assert.fail(url.error);
  }

  console.log(url);

  return url.unwrap();
};

uploadContents("testname", "testdescription", "./asset/sample-image.jpg");
