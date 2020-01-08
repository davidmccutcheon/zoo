var animalPopulation = 0;

function run() {
    var tigger = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var rarity = new Unicorn("Rarity");
    var gemma = new Giraffe("Gemma");
    var stinger = new Bee("Stinger");
    var zoebot = new Zookeeper("Zoebot");

    zoebot.feedAnimals([tigger, pooh, rarity, gemma, stinger], "beans");

    // tigger.eat("meat");
    // pooh.eat("fish");
    // pooh.eat("meat");
    // rarity.eat("marshmallows");
    // rarity.sleep();
    // gemma.eat("meat");
    // gemma.eat("leaves");
    // gemma.sleep();
    // stinger.eat("ice cream");
    // stinger.eat("pollen");
    // stinger.sleep();
}

class Zookeeper {
    constructor(name) {
        this.name = name;
    }

    feedAnimals(animals, food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " total animals");
        for (var i = 0; i < animals.length; i++) {
            animals[i].eat(food);
        }
    }
}

class Animal {

    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if (food == this.favoriteFood) {
            console.log("YUM!!! " + this.name + " wants more " + food);
        } else {
            this.sleep();
        }
    }

    static getPopulation() {
        return animalPopulation;
    }
}

class Tiger extends Animal{
    constructor(name) {
        super(name, "meat");
    }
}

class Bear extends Animal{
    constructor(name) {
        super(name, "fish");
    }
    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }
}

class Unicorn extends Animal {
    constructor(name) {
        super(name, "marshmallows");
    }

    sleep() {
        console.log(this.name + " sleeps in a cloud")
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name, "leaves");
    }

    eat(food) {
        if (food == this.favoriteFood) {
            super.eat(food);
        }
        else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Bee extends Animal {
    constructor(name) {
        super(name, "pollen");
    }

    sleep() {
        console.log(this.name + " never sleeps");
    }

    eat(food) {
        if (food == this.favoriteFood) {
            super.eat(food);
        }
        else {
            console.log("YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

// class Shape {
//
//     constructor(name) {
//         this.name = name;
//         this.special = true;
//     }
//
//     sayName() {
//         console.log('Hi, I am a ', this.name + '.');
//     }
//
//     sayHistory() {
//         console.log("Shapes have a wonderful history.");
//     }
// }
//
// class Polygon extends Shape {
//
//     constructor(height, width) {
//         super('Polygon');
//         this.height = height;
//         this.width = width;
//     }
//
//     sayHistory() {
//         console.log('"Polygon" is derived from the Greek polus (many) ' +
//             'and gonia (angle).');
//     }
//
// }

//
// function eat(name, food) {
//     console.log(name + " eats " + food);
//     if (food == favoriteFood) {
//         console.log("YUM!!! " + name + " wants more " + food);
//     } else {
//         sleep(name);
//     }
// }
//
// function sleep(name) {
//     console.log(name + " sleeps for 8 hours");
// }