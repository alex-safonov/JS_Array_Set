// Массив array
const array = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];
console.log(array);

// используем Spread для создания массива
let new_array = [...new Set(array)];
console.log(new_array);
