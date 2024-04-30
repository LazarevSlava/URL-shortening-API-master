import { dataURL } from './dataURL';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function shorteningURL(url) {
  if (dataURL.flat(Infinity).find((data) => data.url === url)) return;
  let newURL;
  do {
    newURL = `https://shortly/${generateString(5)}`;
  } while (dataURL.some((data) => data.newURL === newURL));
  dataURL.push({ url, newURL });
  const newDate = JSON.stringify(dataURL);
  localStorage.clear();
  localStorage.setItem('listOfURL', newDate);

  return dataURL[dataURL.length - 1];
}
