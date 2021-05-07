import React, { useState, useEffect } from "react";
import KanyeGif from "./KanyeGif";
import "./styles.css";
import axios from "axios";
import QuoteList from "./components/Quotes/quoteList.js";
import SavedQuotes from "./components/savedQuotes/savedQuotes.js";

const App = () => {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  //const quotes = [];
  const [quoteList, setQuoteList] = useState([]);

  useEffect(() => {
    async function fetchQuotes() {
      
      // if (quoteList.length===11){
      //   quoteList.pop();
      // };
      setIsLoading(true);
      try {
        axios.get("https://api.kanye.rest").then((result) => {
          const data = result.data.quote;
          // console.log(data);
          // setQuote(data);
          // setQuoteList(quoteList => quoteList.concat(quote));
          setQuote(data);
          // console.log(quote);
          // console.log(quoteList.length);
          setQuoteList(quoteList => [data, ...quoteList]);
        
          
          return;
          


          // if (data.length === 0) {
          //   setIsLoading(false);
          // } else {
          //   // setQuoteList([...quoteList, data ]);
          //   // setQuote(data);
          //   setIsLoading(false);
          // }
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
