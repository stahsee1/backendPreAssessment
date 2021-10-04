const port = process.env.port || 5000;
const app = require('./app');

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running, listening on port ${port}`);
});