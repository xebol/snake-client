let connection;

const setUpInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if(key === 'h'){
    connection.write("Say: Hi")
  }
  if(key === 'n'){
    connection.write("Say: Noooooob")
  }
  if(key === 'l'){
    connection.write("Say: LMAOOOOO")
  }
}

module.exports = {
  setUpInput
};