// Enviroment vars, see helmet npm package for more info.
require('dotenv').config();

// Imports
const express = require('express');
const app = express();
// const helmet = require("helmet");

// Set server
const PORT = process.env.PORT || 3000

// More info at https://www.npmjs.com/package/helmet
// app.use(helmet.contentSecurityPolicy());
// app.use(helmet.crossOriginEmbedderPolicy());
// app.use(helmet.crossOriginOpenerPolicy());
// app.use(helmet.crossOriginResourcePolicy());
// app.use(helmet.dnsPrefetchControl());
// app.use(helmet.expectCt());
// app.use(helmet.frameguard());
// app.use(helmet.hidePoweredBy());
// app.use(helmet.hsts());
// app.use(helmet.ieNoOpen());
// app.use(helmet.noSniff());
// app.use(helmet.originAgentCluster());
// app.use(helmet.permittedCrossDomainPolicies());
// app.use(helmet.referrerPolicy());
// app.use(helmet.xssFilter());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})