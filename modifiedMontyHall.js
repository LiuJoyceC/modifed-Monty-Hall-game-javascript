var doors = ['red','blue','green'];
var windoor = doors[Math.floor(Math.random() * 3)]; //chooses the winning door

var user = prompt("Behind one of these doors is a goat that spits out diamonds everyday. Behind each of the two other doors is a broken down worthless car. Which of these doors do you choose ('red', 'blue', or 'green')?").toLowerCase();

var secondchoice = 'none';
var drawcard = prompt("We'd like to improve your chances of winning by offering you a random draw from this deck of cards. If you draw a card with the diamond suit, then you get to choose a second door to open in addition to your first. If the goat is behind either one, you win! However, if you choose to take a chance on this draw and you end up winning the goat, then regardless of what you draw, you must agree to donate the goat's first year's worth of diamonds to a charity of your choice before the goat can belong to you. Would you like to take that chance and draw a card? ('yes' or 'no')").toLowerCase();
var luckycard = false;
if (drawcard === 'yes') {
    var suit = ['heart','spade','club','diamond'][Math.floor(Math.random() * 4)];
    luckycard = (suit === 'diamond');
    if (luckycard) {
        secondchoice = prompt("You got a diamond card! Now you can choose a second door that you would like to open in addition to your first door ('red', 'blue', or 'green')?").toLowerCase();
    }
    else {
        alert("Darn! You got a " + suit + ", not a lucky diamond. Don't forget, if you win the goat, you're still obligated to donate the goat's first year's worth of diamonds to a charity of your choice.");
    };
};


var cheating = prompt("Now you must answer honestly. Did you cheat by peeking behind the doors beforehand? ('yes' or 'no')").toLowerCase();

var car = function () {
    var cars = ["Toyota Camry", "Honda Odyssey minivan", "Mini Cooper", "Ford Explorer", "Jeep Wrangler", "Chevrolet Sonic"];
    return cars[Math.floor(Math.random() * cars.length)];
};



switch(true) {
    case (cheating === 'yes'):
        alert("Well, we can't let you win the goat if you cheated. But we appreciate your honesty, so we will still donate the goat's first year's worth of diamonds to a charity of your choice.");
        break;
    case (!luckycard): //If player drew the lucky card and already has two doors chosen, then we won't let them switch
        for (var losedoor = doors[Math.floor(Math.random() * 3)]; losedoor === windoor || losedoor === user; losedoor = doors[Math.floor(Math.random() * 3)] ) {}; //This chooses the door that is neither the winning door or the player's choice. If the player's choice happens to be the winning door, then this will choose one of the other two at random.
        for (var k = 0; k < 3; k++) {
            if (doors[k] != losedoor && doors[k] != user) {
                var switchdoor = doors[k];
                break;
            };
        };
        var stayorswitch = prompt("Now, before we reveal to you whether you chose the right door, we'll let you know that at least you didn't choose the " + losedoor + " door, which would give you this old, scratched-up " + car() + " with its tires stolen and its bumpers falling off. Thank goodness you didn't choose that one! But that means the diamond-spitting goat is behind one of the other two doors. If you're having doubts about your choice, we will now give you the option to switch. Would you like to stay with the " + user + " door or switch to the " + switchdoor + " door? (type 'stay' or 'switch')").toLowerCase();
        if (stayorswitch === "switch") {
            user = switchdoor;
        };
        //We do not want a break option for this case, because we now want to run the default.
    default:
        alert("We will now reveal the winning door to you...");
        if (windoor === user||windoor === secondchoice) {
            alert("Congratulations! The diamond-spitting goat is behind the " + windoor + " door! You win!");
            if (drawcard === "yes") {
                alert("Don't forget though: since you did draw a card from the deck earlier, all of the diamonds that the goat produces in the first year will go to a charity of your choice, and you will own the goat one year from now.");
            };
        }
        else {
            alert("Darn! The diamond-spitting goat is behind the " + windoor + " door. At least you win what is behind the " + user + " door: a wrecked " + car() + " that is beyond repair and barely has any salvageable parts to sell. It's (probably) better than nothing, though! Thanks for playing!");
        };
        break;
};
        
