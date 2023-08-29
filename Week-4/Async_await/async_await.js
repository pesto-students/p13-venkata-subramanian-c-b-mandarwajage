async function getExchangeRate(currency) {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");
    const data = await response.json();

    if (data.success) {
      const exchangeRate = data.rates[currency];
      if (exchangeRate !== undefined) {
        return parseFloat(exchangeRate.toFixed(4));
      } else {
        return null;
      }
    } else {
      throw new Error("Can not fetch exchange rates.");
    }
  } catch (error) {
    throw new Error(
      "There is A problem: " + error.message
    );
  }
}

getExchangeRate("INR")
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.error(error);
  });