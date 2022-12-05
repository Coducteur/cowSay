const myInfo = require("./infomation.js");
const cowsay = require("cowsay");
const { myName, myCampus } = require("./infomation.js");

console.log(
  cowsay.say({
    text: myName + " from " + myCampus,
    e: "oO",
    T: "U",
  })
);

function get_cows(error, cow_names) {
    if (error) {
        console.log(error)
    }
    else if (cow_names) {
        console.log(`Number of cows available: ${cow_names.length}`);
    }
}

cowsay.list(get_cows);