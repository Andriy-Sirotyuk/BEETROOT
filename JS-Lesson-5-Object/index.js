// завдання-1



const car = {
  manufacturer: "Citroen",
  model: "C5 AIRCROSS",
  manufacturerYear: 2020,
  averageSpeed: 150,
  tankVolume: 53,
  fuelConsumption: 5,
  driver: "Andrii",
  showCar: function () {
    console.log(
      `${this.manufacturer}, ${this.model},${this.manufacturerYear} рік, ${this.averageSpeed} км/год, об'єм бака ${this.tankVolume} літрів, розхід ${this.fuelConsumption}літрів/100км, ${this.driver}`
    );
  },
  anotherDrivers: function (name2, name3) {
    this.anotherDriver = {
      driver2: name2,
      driver3: name3,
    };
    console.log(this.anotherDriver);
  },
  needFuel(fuel) {
    if (fuel <= 5) console.log("you need more fuel");
  },
  time: function (distanse) {
    let time = +(distanse / this.averageSpeed);
    let y = 0;
    if (time % 4 === 0) y = time / 4 - 1;
    else y = Math.floor(time / 4);
    let x = +(time + y);
    return +x;
  },
  permission: function (driverName) {
    if (
      driverName === this.driver ||
      driverName === this.anotherDriver.driver2 ||
      driverName === this.anotherDriver.driver3
    ) {
      console.log("you can drive the car");
    } else {
      console.log("wait for driver");
    }
    return driverName;
  },
  buyFuel: function (distanse) {
    let powerResorve = ((car.tankVolume - 5) / car.fuelConsumption) * 100;
    if (distanse > powerResorve) console.log("you need more fuel for this way");
  },
};

car.showCar();
car.anotherDrivers("Yana", "Vitaliy");
car.needFuel(4);
console.log(car.time(1000));
car.permission("Olya");
car.buyFuel(2000);