// 1) ---------Напишите функцию getFullName, которая принимает объект user с полями firstName и lastName, и возвращает полное имя. Если какое-либо из полей отсутствует, используйте значения по умолчанию.
function getFullName(user) {
    return `${user.firstName || 'Nezuko'} ${user.lastName || 'Light'}`;
}

const userr = { firstName: 'Yagami' };
const userrr = { lastName: 'Kamado' };


console.log(getFullName(userr)); 
console.log(getFullName(userrr)); 


// 2) ------------Напишите функцию printCoordinates, которая принимает объект point с полями x и y, и выводит координаты точки.


function printCoordinates({ x, y }) {
    console.log(`Координаты точки: (${x}, ${y})`);
}

const point = { x: 5, y: 10 };
printCoordinates(point); 



// 3) ------------У вас есть вложенный массив const data = {

//   products : [

//     { id: 1, name: 'Product 1' },

//     { id: 2, name: 'Product 2' }

//   ]
// Напишите функцию, используя деструктуризацию выводите название продуктов:
// name: Product1
// name: Product2
const data = {
  products: [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' }
  ]
};

function getProductNames({ products }) {
  for (const { name } of products) {
    console.log(`name: ${name}`);
  }
}
getProductNames(data);