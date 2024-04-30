import { dataURL } from './dataURL';

export const fetchDateFromLocalStorage = function () {
  const retrievedDataString = localStorage.getItem('listOfURL');
  if (!retrievedDataString) return;
  const retrievedData = JSON.parse(retrievedDataString);
  dataURL.push(retrievedData);
};
