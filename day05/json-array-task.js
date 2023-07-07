function Model(name, price, jaego){
    this.name = name;
    this.price = price;
    this.jaego = jaego;
}

let firstmodel = new Model("새우깡", 1000,5);
let secondModel = new Model("빼빼로", 1500,9);
let thirdmodel = new Model("킷캣", 2000,3);

let supermarket = new Array(firstmodel,secondModel,thirdmodel);

let marketJSON = JSON.stringify(supermarket);
console.log(marketJSON);