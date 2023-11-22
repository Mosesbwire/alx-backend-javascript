const express = require('express');
const router = require('./routes/index');

const app = express();

app.use(router);
app.listen(1245);

export default app;
