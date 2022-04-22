export const genRandomBlob = (bytes: number) => {
  const arr = new Uint8Array(bytes);
  window.crypto.getRandomValues(arr);
  return new Blob([arr], {
    type: "application/octet-stream",
  });
};
