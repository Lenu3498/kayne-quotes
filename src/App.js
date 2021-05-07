import React, { useState, useEffect } from "react";
import KanyeGif from "./KanyeGif";
import "./styles.css";
import axios from "axios";
import QuoteList from "./components/Quotes/quoteList.js";
import SavedQuotes from "./components/savedQuotes/savedQuotes.js";

const App = () => {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      setIsLoading(true);
      try {
        axios.get("https://api.kanye.rest").then((result) => {
          const data = result.data.quote;
          setQuote(data);
          setQuoteList(quoteList => [data, ...quoteList]);
      
          setIsLoading(false);
          
        });
      } catch (error) {
        alert("No results");
      }
    }

    fetchQuotes();

    const interval = setInterval(() => {
      fetchQuotes();
    }, 6000);
    return () => clearInterval(interval);
  },[]);

  console.log(quoteList.length);
         if (quoteList.length===11){
        quoteList.pop();
      };

  return (
    <div className="App">
      <h1>
        Kayne says
      </h1>
      <KanyeGif />
      <QuoteList isLoading={isLoading} quote={quote} />
      <SavedQuotes quoteList={quoteList} quote={quote} />
    </div>
  );
};

export default App;
