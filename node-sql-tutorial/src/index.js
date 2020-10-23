"use strict";

const server = require('./server');

const startServer = async () => {
  try {
    // todo: move configuration to separate config
    const config = {
      host: "localhost",
      port: 8080
    };

    // create an interview of the server application
    const app = await server (config);

    await app.start();

    console.log(`Server running at http://${ config.host }: ${ config.port }...`);

  } catch (err) {
    console.log("startup error:", err);
  }
};

startServer();