import React from "react";
import "./savedQuotes.css";

export default function SavedQuotes({ quoteList }) {
  // console.log(`From savedArray`);
  console.log(quoteList.length);
 
  

  return (
    <div className="quoteList__container">
      <ul>
        {quoteList.map((quote) => (
          <li className="quote" key={quote.id}>-{quote}-</li>
        ))}
      </ul>
    </div>
  );
}
