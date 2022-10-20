class Car{
    constructor(brand,variant, color, year) {
        this.brand = brand;
        this.variant = variant;
        this.color = color;
        this.year = year;
        this.showDetails = ()=>{
            for (let key in this) {
                console.log(this[key]);
            }
        }
    }
}
console.log(Car);
let swift = new Car("maruthi", "petrol","blue", 2022);
console.log(swift);
console.log(swift instanceof Car);
class ElectricCar extends Car{
    constructor(brand, color, year) {
         super(brand,"Electric",color,year)
     }
}
let modelT = new ElectricCar("Tesla", "black", 2029);
modelT.showDetails();