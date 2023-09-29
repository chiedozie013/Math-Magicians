import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const apiKey = '1o7asHc1RNUAHfSDNaIpeA==8GATA9TdpyDa0ZrS';
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=friendship',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': apiKey,
            },
            contentType: 'application/json',
          },
        );
        const quote = await res.json();
        setQuote(quote);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchQuote();
  }, []);
  return (
    <>
      {isError && <h1>Something went wrong! Try again</h1>}
      {isLoading ? (
        <h3 className="quote">Loading...</h3>
      ) : (
        <ul className="quote">
          {quote.map((q) => {
            const { quote } = q;
            return (
              <li key={quote} className="list-quote">
                {quote}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Quote;
