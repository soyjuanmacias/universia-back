import "../../enviroment";
import type CustomError from "../../domain/entities/CustomError.js";
import createDebug from "debug";
import errors from "../constants/errors.js";
import { app } from "./index.js";

const debug = createDebug("universia:startServer");

const portInUseMessage = (port: number | string) =>
  `Port ${port} is already in use`;

const startServer = async (port: number | string) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      resolve(server);
    });

    server.on("error", (error: CustomError) => {
      if (error.code === errors.otherErrors.eaddrinuse) {
        debug(errors.serverError.startingServerMessage, portInUseMessage(port));
      }

      reject(new Error(errors.serverError.startingServerMessage));
    });
  });

export default startServer;
