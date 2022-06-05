//задание1

let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
//задание2

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < 0 && arr2[i] > -10 && arr2[i] < -3) {
    console.log(arr2[i]);
  }
}
//задание3
let arr3 = [];
let result = 0;
for (let i = 23; i <= 57; i++) {
  arr3.push(i);
  result += i;
}
console.log(arr3);
console.log("Сумма = " + result);

let j = 23;
while (j <= 57) {
  arr3.push(j);
  j++;
}
console.log(arr3);
//задание4
let arr4 = ["10", "20", "30", "50", "235", "3000"];

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i][0] == "1" || arr4[i][0] == "2" || arr4[i][0] == "5") {
    console.log(arr4[i]);
  }
}
//задание5

let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

for (let i = 0; i < week.length; i++) {
  if (week[i] == "Суббота" || week[i] == "Воскресенье") {
    document.write(week[i].bold());
  } else {
    document.write(week[i]);
  }
}
//задание6

console.log(week[week.length - 1]);

//задание7
let arr7 = [];
while (true) {
  let k = prompt("Введите число");
  if (k != "") {
    arr7.push(k);
  } else {
    break;
  }
}
console.log(arr7);
//задание8
let arr8 = [12, false, "Текст", 4, 2, -5, 0];
arr8.reverse();
console.log(arr8);
let arr81 = [12, false, "Текст", 4, 2, -5, 0];
let f = arr81.length - 1;
while (f >= 0) {
  console.log(arr81[f]);
  f--;
}
//задание9
let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let count = 0;
for (let i = 0; i < arr9.length; i++) {
  if (arr9[i] == undefined) {
    count++;
  }
}
console.log(count);
//задание10

let sumG = 0;
let arr10 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
for (let i = 0; i < arr10.length; i++) {
  if (arr10[i] == 0) {
    for (let g = i + 1; g < arr10.length; g++) {
      sumG += arr10[g];
      if (arr10[g] == 0) {
        break;
      }
    }
    break;
  }
}
console.log(sumG);
