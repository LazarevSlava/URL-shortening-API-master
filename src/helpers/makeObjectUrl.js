export function makeDataUrl(longUrl) {
  return {
    aliasName: null,
    destinations: [
      {
        url: longUrl,
        country: null,
        os: null,
      },
    ],
  };
}
