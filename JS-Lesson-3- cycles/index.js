// задача-1
// let age = prompt('  Скільки тобі років ?','');
// if (age < 11) {
//   massage = 'Ти дитина!';
// }else if (age < 18) {
//   massage = 'Ти підліток!';
// }else if (age < 60) {
//   massage = 'Ти дорослий!';
// }else {
//   massage = 'Що ви тут робите? Вас внуки чекають!!!';
// }
// alert(massage);



// задача-2
// let number = prompt('Введи цифру від 1 до 9!','');
// if (number == 1) {
//   massage = 'Твій знак (!)';
// }else if (number == 2) {
//   massage = 'Твій знак (@)';
// }else if (number == 3) {
//   massage = 'Твій знак (#)';
// }else if (number == 4) {
//   massage = 'Твій знак ($)';
// }else if (number == 5) {
//   massage = 'Твій знак (%)';
// }else if (number == 6) {
//   massage = 'Твій знак (^)';
// }else if (number == 7) {
//   massage = 'Твій знак (&)';
// }else if (number == 8) {
//   massage = 'Твій знак (*)';
// }else if (number == 9) {
//   massage = 'Твій знак (';
// }else if (number == 0) {
//   massage = 'Твій знак )';
// }else {
//   massage = 'Ти вибрав не цифру! Попробуй знову!!!';
// }
// alert(massage);


// задача - 3 
// let sum = 0;
// while(true) {
//   let value = +prompt('Введіть число !','');
//   if (!value) break;
//   sum += value;
// }
// alert('Сума :' + sum);


// задача-4
// other: for (let a = 0;; a++) {
//   for (let b = 0;; b++) {
//     let input = prompt('Введи 2 числа! (${a},${b})','');
//     if (!input) break other;
//     let value1 = +prompt('enter number 1');
// let value2 = +prompt('enter number 2');
// let divider;

// if (value1 > value2) {
//   divider = value2;
// } else {
//   divider = value1;
// }

// while (divider !== 0) {
//   if (value1 % divider === 0 && value2 % divider === 0) {
//     break;
//   } else {
//     divider--;
//   }
// }
// console.log(divider);
//   }
// }




// 5-задача
// let num = +prompt('enter number');
// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }