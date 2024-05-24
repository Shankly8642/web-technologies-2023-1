class PizzaType{
    static Margarita = new PizzaType("Маргарита", 500, 300);
    static Pepperoni = new PizzaType("Пепперони", 800, 400);
    static Bavarian = new PizzaType("Баварская", 700, 450);

    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;  
    }
}

class PizzaSize{
    static Small = new PizzaType("Маленькая", 100, 100);
    static Big = new PizzaType("Большая", 200, 200);

    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;  
    }
}

class PizzaToppings{
    static CreamyMozzarella = new PizzaToppings("Сливочная моцарелла", 50, 100, 20);
    static CheeseBoard = new PizzaToppings("Cырный борт", 150, 300, 50);
    static CheddarAndParmesan = new PizzaToppings("Чедер и пармезан", 150, 300, 50);

    constructor(name, smallprice, bigprice, calories) {
        this.name = name;
        this.smallprice = smallprice;
        this.bigprice = bigprice;
        this.calories = calories;  
    }
}

class Pizza {
    constructor(type, size) {
        this.name = type.name;
        this.price = type.price + size.price;
        this.calories = type.calories + size.calories;
        this.size = size.name
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    removeTopping(topping) {
        this.toppings = this.toppings.filter(item => item !== topping);
    }

    getToppings() {
        let namesToppings = [];
        this.toppings.forEach(topping => {
            namesToppings.push(topping.name);
        });
        return namesToppings;
    }

    getSize(){
        return this.size
    }

    getStuffing() {
        return this.name
    }

    calculatePrice() {
        let totalPrice = this.price;
        this.toppings.forEach(topping => {
            if (this.size == "Маленькая") 
                totalPrice += topping.smallprice;
            else
            totalPrice += topping.bigprice;
        });
        return totalPrice;
    }

    calculateCalories() {
        let totalCalories = this.calories;
        this.toppings.forEach(topping => {
            totalCalories += topping.calories;
        });
        return totalCalories;
    }
}

const Margarita = new Pizza(PizzaType.Margarita, PizzaSize.Big);

console.log(Margarita.getStuffing());
console.log(Margarita.getSize());

Margarita.addTopping(PizzaToppings.CreamyMozzarella);
Margarita.addTopping(PizzaToppings.CheddarAndParmesan);
console.log(Margarita.getToppings());

Margarita.addTopping(PizzaToppings.CheeseBoard);
Margarita.removeTopping(PizzaToppings.CreamyMozzarella)
console.log(Margarita.getToppings());

console.log(Margarita.calculatePrice());
console.log(Margarita.calculateCalories());