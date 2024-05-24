const currencies = {
    USD: 1, //  dólar
    EUR: 0.88, //  euro
    BRL: 5.22 //  real
  };
  
  function convertCurrency(amount, fromCurrency, toCurrency) {
    const rate = currencies[toCurrency] / currencies[fromCurrency];
    return amount * rate;
  }
  
  function convert() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
  
    const result = convertCurrency(amount, fromCurrency, toCurrency);
    console.log(`O resultado é: ${result}`);
    document.getElementById("result").innerHTML = `O resultado é: ${result}`;
  }
