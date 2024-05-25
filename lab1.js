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
    static Small = new PizzaSize("Маленькая", 100, 100);
    static Big = new PizzaSize("Большая", 200, 200);

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

const addButton = document.getElementById("add");

function updateCartButtonText() {
    addButton.innerHTML = `Добавить в корзину за<br>${currentPizza.calculatePrice()}₽ (${currentPizza.calculateCalories()} кКалл)`;
}

let currentType = null;
let curentSize = PizzaSize.Small;

let currentPizza;
let selectedPizzaType = document.getElementById("margarita");

function pizzaTypeChanged(value, object) {

    selectedPizzaType.setAttribute("data-selected", "false");
    object.setAttribute("data-selected", "true");

    if (value == PizzaType.Pepperoni.name){
        currentPizza = new Pizza(PizzaType.Pepperoni, curentSize, []);
        currentType = PizzaType.Pepperoni;
    }

    if (value == PizzaType.Margarita.name){
        currentPizza = new Pizza(PizzaType.Margarita, curentSize, []);
        currentType = PizzaType.Margarita
    }

    if (value == PizzaType.Bavarian.name){
        currentPizza = new Pizza(PizzaType.Bavarian, curentSize, []);
        currentType = PizzaType.Bavarian
    }

    selectedPizzaType = object;

    updateCartButtonText();
}

const slider = document.getElementById("sizeSlider");
const cheeseCrust= document.getElementById("cheeseCrustSpan");
const creamyMozzarella= document.getElementById("creamyMozzarellaSpan");
const chedderParmizan = document.getElementById("chedderParmizanSpan");

function pizzaSizeChanged(sizeValue) {
    if (currentType == null){
        alert( "Сначала выберите пиццу!" );
    }
    else if (sizeValue === "Big") {
        moveSlider("slider100");

        currentPizza = new Pizza(currentType, PizzaSize.Big, []);
        curentSize = PizzaSize.Big;

        cheeseCrust.textContent = "300₽";
        creamyMozzarella.textContent = "100₽";
        chedderParmizan.textContent = "300₽";
    }
    else if (sizeValue === "Small") {
        moveSlider("slider0");

        currentPizza = new Pizza(currentType, PizzaSize.Small, []);
        curentSize = PizzaSize.Small;

        cheeseCrust.textContent = "150₽";
        creamyMozzarella.textContent = "50₽";
        chedderParmizan.textContent = "150₽";
    }
    
    updateCartButtonText();
}

let currentTopping;
function toppingAdd(value, object) {

    if (value == PizzaToppings.CheeseBoard.name)
        currentTopping = PizzaToppings.CheeseBoard;

    if (value == PizzaToppings.CreamyMozzarella.name)
        currentTopping = PizzaToppings.CreamyMozzarella;

    if (value == PizzaToppings.CheddarAndParmesan.name)
        currentTopping = PizzaToppings.CheddarAndParmesan;

    if (currentType == null){
        alert( "Сначала выберите пиццу!" );
    }
    else if (object.getAttribute('data-selected') === 'true') {
        object.setAttribute('data-selected', 'false');
        currentPizza.removeTopping(currentTopping);
    }
    else {
        object.setAttribute('data-selected', 'true');
        currentPizza.addTopping(currentTopping);
    }

    updateCartButtonText();
}


function moveSlider(sliderClass) {
    slider.className = sliderClass;
}