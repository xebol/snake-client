const { connect } = require("./client");

// establishes a connection with the game server
const conn = connect();
// interpret incoming data as text
conn.setEncoding("utf8");

conn.on("data", (data) => {
  console.log("Server says:", data);
});

conn.on("connect", () => {
  console.log("Ready to play");
});

console.log("Connecting ...");
connect();