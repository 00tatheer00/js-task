const quotes = [
    "Quote 1",
    "Quote 2",
    "Quote 3"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    console.log(quote);
  }
  
  generateQuote();