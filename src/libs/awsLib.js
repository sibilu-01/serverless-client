import { Storage } from "aws-amplify";
import { onError } from "./errorLib";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}

export async function s3Delete(id) {
    try { 
        await Storage.vault.remove(id)
    } catch (e) {
        onError(e)
    }
}