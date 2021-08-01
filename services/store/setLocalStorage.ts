interface StorageCompanies {
  name: string;
  symbol: string;
  rating: number;
}
interface StorageObject {
  recentCompanies: StorageCompanies[];
  favoriteCompanies: StorageCompanies[];
  userName: string;
  publishableToken: string;
}

const storageObject = {
  recentCompanies: [
    { name: 'Apple Inc', symbol: 'AAPL', rating: 4.35 },
    { name: 'Amazon.com Inc.', symbol: 'AMZN', rating: -1.35 },
    { name: 'Microsoft Corporation', symbol: 'MSFT', rating: -3.95 },
    { name: 'Starbucks Corp.', symbol: 'SBUX', rating: 2.15 },
    { name: 'Twitter Inc', symbol: 'TWTR', rating: -0.33 },
    { name: 'Facebook Inc - Class A', symbol: 'FB', rating: -7.33 },
  ],
  favoriteCompanies: [
    { name: 'Apple Inc', symbol: 'AAPL', rating: 4.35 },
    { name: 'Starbucks Corp.', symbol: 'SBUX', rating: 2.15 },
    { name: 'Twitter Inc', symbol: 'TWTR', rating: -0.33 },
  ],
  userName: 'João da Silva Almeida Magalhães',
  publishableToken: '?token=pk_2f111dbdf71340fb93e70206a8ee14be',
};
const setLocalStorage = (): StorageObject | void => {
  const storage = localStorage.getItem('monetusMoney');

  if (!storage) {
    return localStorage.setItem('monetusMoney', JSON.stringify(storageObject));
  }

  const result = JSON.parse(storage);

  return result;
};

export default setLocalStorage;
