const port = process.env.port;
const app = require('./app');

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});