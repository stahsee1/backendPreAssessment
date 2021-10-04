const PORT = process.env.port || 5000;
const app = require('./app');

app.listen(PORT, () => {
  console.log(`Server is running, listening on port ${PORT}`);
});