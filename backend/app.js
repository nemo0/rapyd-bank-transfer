const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const makeRequest = require('./utilities').makeRequest;

app.use(cors());

// Test Route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.set('json spaces', 4);

app.get('/country/:code', async (req, res) => {
  const { code } = req.params;
  try {
    const result = await makeRequest(
      'GET',
      `/v1/payment_methods/country?country=${code}`
    );

    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

app.get('/fields/:type', async (req, res) => {
  const { type } = req.params;
  try {
    const result = await makeRequest(
      'GET',
      `/v1/payment_methods/required_fields/${type}`
    );
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

app.post('/payment/:currency/:type', async (req, res) => {
  const { currency, type } = req.params;
  try {
    const body = {
      amount: 1000,
      currency: currency,
      payment_method: {
        type: type,
      },
    };
    const result = await makeRequest('POST', '/v1/payments', body);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

app.post('/completePayment/:id/', async (req, res) => {
  const { id } = req.params;
  try {
    const body = {
      token: id,
    };
    const result = await makeRequest(
      'POST',
      '/v1/payments/completePayment',
      body
    );
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

// Start a server
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
