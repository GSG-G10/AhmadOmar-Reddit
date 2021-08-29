const app = require('./app');

const Port = app.get('port');

app.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running at http://localhost:${Port}`);
});
