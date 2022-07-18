// const shoppingList = [
//   {
//     produce: 'apples',
//     quantity: 10,
//     purchased: false,
//     unitCost: 30,
//     amount: 300,
//   },

//   {
//     produce: 'lemons',
//     quantity: 5,
//     purchased: true,
//     unitCost: 35,
//     amount: 175,
//   },

//   {
//     produce: 'eggs',
//     quantity: 20,
//     purchased: true,
//     unitCost: 2,
//     amount: 40,
//   },

//   {
//     produce: 'pasta',
//     quantity: 2,
//     purchased: false,
//     unitCost: 200,
//     amount: 400,
//   },

//   {
//     produce: 'popcorn',
//     quantity: 1,
//     purchased: false,
//     unitCost: 50,
//     amount: 50,
//   },
// ];



// const getSortingList = (list) => {
//   return list.sort((a, b) => +a.purchased - +b.purchased);
// };



// const getProductName = (produce) => {
//   let newArray = structuredClone(shoppingList);
//   newArray = newArray.map((item) => {
//     produce === item.produce ? (item.purchased = true) : item;
//     return item;
//   });
//   return getSortingList(newArray);
// };