const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8080";
const router = express.Router()
const cors = require('cors')
// set cors
app.use(cors())
// plug router
app.use('/api', router);
require('./src/Router/Router')(router)

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});