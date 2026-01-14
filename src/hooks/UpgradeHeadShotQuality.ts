export const upgradeHeadshotQuality = (url: string | null) => {
  if (!url) return null;
  if (url.includes('.transform/')) {
    return url.replace(
      /\.transform\/\d+col\/image\.png$/,
      '.transform/4col/image.png',
    );
  }
  return url;
};
