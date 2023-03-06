const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')   

let apiQuotes = []



const loading = ()=> {
    loader.hidden = false;
    quoteContainer.hidden = true;
    

}

const complete = () => {
    quoteContainer.hidden = false;
    loader.hidden = true
}

 const newQuote = ()=>{
    // picka a random quote from API
loading()
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
//  if (!quote){
//      const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
if (!quote.author){
        authorText.textContent = 'Unknown'
}else {
authorText.textContent = quote.author
}

 if (quote.text.length > 80) {
    quoteText.classList.add('long-quote')
} else {
    quoteText.classList.remove('long-quote')

}
 quoteText.textContent = quote.text
 setInterval(complete, 600)
}



// Get quotes from api
async function getQuotes() {

    const apiUrl='https://type.fit/api/quotes'
    try{
        loading()
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote()
    }catch (error) {
        console.log(error)
        // catch error Here
    
    }

}

const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

// event listeners

newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

//on Load

 getQuotes()


 

console.log(quote)