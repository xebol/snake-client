const { connect } = require("./client");

const { setUpInput } = require("./input.js");

console.log("Connecting ...");


setUpInput(connect());