const port = 5000;
const app = require('./app');

app.listen(process.env.port || port, () => {
  console.log(`Server is running, listening on port ${port}`);
});