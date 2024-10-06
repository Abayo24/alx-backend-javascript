const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Export the app for testing
module.exports = app;

// Only start the server if run directly
if (require.main === module) {
  const port = process.env.PORT || 7865;
  app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
  });
}
