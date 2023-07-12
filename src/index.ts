import "./enviroment.js";
import createDebug from "debug";
import chalk from "chalk";
import successes from "./infrastructure/constants/successes.js";
import startServer from "./infrastructure/Server/startServer.js";

export const debug = createDebug("universia:serverConnection");

const port = process.env.PORT ?? 4000;

const connectionMessage = chalk.bold(successes.accepted.database);
const listeningMessage = (port: number | string) =>
  chalk.bold(`Server listening on port ${port}`);

try {
  debug(chalk.bgGreen(connectionMessage));
  await startServer(port as number);
  debug(chalk.bgGreen(listeningMessage(port)));
} catch (error) {
  debug(chalk.bgRed(error.message));
}
