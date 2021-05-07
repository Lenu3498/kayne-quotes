import React from "react";
import "./quoteList.css";

export default function Quotelist({ quote, isLoading }) {
  return (
  <div className="currentQuote">
      <h2>
{quote}</h2>

  </div>
  )
};