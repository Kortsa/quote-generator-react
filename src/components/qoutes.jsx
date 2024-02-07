import { useEffect, useState } from 'react';

import '../components/quote.styles.css'

const Quotes = () => {
    const [quote, setQuote] = useState("");
   

    const newQuote = () => {
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then((quote) => {
                let randomNum = Math.floor(Math.random() * quote.length);
                setQuote(quote[randomNum])
                
            }
            )
    };

    useEffect(() => {
        newQuote();
    }, []);
    return (
        <div>
            <div className="quote-container">
                <div className="quote-text">
                    <span >{quote.text}</span>
                </div>
                <div className="quote-author">
                    <span >{quote.author}</span>
                </div>

                <div className="button-container">
                    <button onClick={newQuote} >New Quote</button>
                </div>
            </div>

        </div>
    )
}

export default Quotes;