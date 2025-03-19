export const fileUrlToPath = (fileUrl: string): string => {
  if (!fileUrl.startsWith("file://")) return fileUrl;

  // Remove `file://`
  let path = fileUrl.replace("file://", "");

  // On Windows, remove the leading slash (`/C:/` → `C:/`)
  if (path.startsWith("/")) {
    path = path.substring(1);
  }

  // Decode URI components (spaces, special characters)
  return decodeURIComponent(path);
};