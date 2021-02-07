const express = require('express');
const path = require('path');

const app = express();

app.use(
  '/static',
  express.static(path.resolve(__dirname, 'frontend', 'static'))
);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
});
// eslint-disable-next-line no-console
app.listen(process.env.PORT || 5060, () => console.log('Server running...'));
