import * as debug from "debug";
import * as http from "http";
import App from "./App";

debug("ts-express:server");

const port = normalizePort(process.env.PORT || 8081);
App.set("port", port);

// creates server
const server = http.createServer(App);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening)
console.log(`app is listening on port ${port}`);


function normalizePort(val: number|string): number|string|boolean {
/**
* @desc 
* @param val: number||string
* @return number 
*/

    const port: number = (typeof val === "string") ? parseInt(val, 10) : val;
    if (isNaN(port)) { return val; }
    else if (port >= 0) { return port; }
    else { return false; }
  }
  
// Error handler for server
function onError(error: NodeJS.ErrnoException): void {
/**
* @desc 
* @param: 
* @return 
*/

if (error.syscall !== "listen") { throw error; }
const bind = (typeof port === "string") ? "Pipe " + port : "Port " + port;
switch (error.code) {
    case "EACCES":
    console.error(`${bind} requires elevated privileges`);
    process.exit(1);
    break;
    case "EADDRINUSE":
    console.error(`${bind} is already in use`);
    process.exit(1);
    break;
    default:
    throw error;
}
}

function onListening(): void {
/**
* @desc 
* @return 
*/

    const addr = server.address();
    const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
    debug(`Listening on ${bind}`);
}