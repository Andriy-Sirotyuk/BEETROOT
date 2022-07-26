// class Circle {
//   constructor(radius) {
//       this.radius = radius;
//   }

//   get radius () {
//       return this._radius;
//   }

//   set radius (value) {
//       if (value < 1) {
//          console.log(`Розрахунок неможливий. Введіть число більше за 1.`);
//          return;
//       }
//      this._radius = value;
//   }

//   get diametr () {
//       return `Діаметр кола дорівнює ${this._radius * 2}`;
//   }


//    countSquare(number) {
//        if (number < 1) {
//            console.log(`Розрахунок площі неможливий. Введіть число більше за 1.`);
//        }
//       return `Площа кола дорівнює ${this._radius ** 2 * Math.PI}`;
//   }

//    countLenth(radius) {
//       if (radius < 1) {
//           console.log(`Розрахунок довжини кола неможливий. Введіть число більше за 1.`);
//       }
//       return `Довжина кола дорівнює ${this._radius * 2 * Math.PI}`;
//   }
// }

// let circle = new Circle(10);
// console.log(circle.radius);

// console.log(circle.diametr)

// let circleSquare = new Circle(10);
// console.log(circleSquare.countSquare())

// let circleLenth = new Circle(0);
// console.log(circleLenth.countLenth())