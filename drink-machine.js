//video-22 (extending from event module)

class DrinkMachine {
  serveDrink = (size) => {
    if (size === "large") {
      console.log("serving complimentary drink");
    }
  };
}
module.exports = DrinkMachine;
