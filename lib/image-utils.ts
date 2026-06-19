import fs from "fs";
import path from "path";

export function publicImageExists(imagePath: string): boolean {
  const normalized = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  return fs.existsSync(path.join(process.cwd(), "public", normalized));
}
