const app = require('./app');
const { PORT } = require('./config')
// const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
})