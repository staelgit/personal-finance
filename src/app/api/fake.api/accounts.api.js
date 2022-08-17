const cashAccounts = [
   { _id: '67rdca3eeb7f6fgeed471818', name: 'Кошелек', balance: 1000 },
   { _id: '67rdca3eeb7f6fgeed471819', name: 'Дебетовая карта', balance: 2000 },
   { _id: '67rdca3eeb7f6fgeed471820', name: 'Вклад в банке', balance: 3000 }
];

const fetchAll = () =>
   new Promise((resolve) => {
      window.setTimeout(() => {
         resolve(cashAccounts);
      }, 1000);
   });

const getById = (id) =>
   new Promise((resolve) => {
      window.setTimeout(() => {
         resolve(cashAccounts.find((account) => account._id === id));
      }, 1000);
   });

export default {
   fetchAll,
   getById
};
