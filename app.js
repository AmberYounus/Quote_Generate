
const quoteContainer = document.getElementById('quote-container')
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const twitterButton = document.getElementById('twitter')
const newQuoteButton = document.getElementById('new-quote');
const loader = document.getElementById('loader')

// //is loading
// const showLadingSpinner = () =>{
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// };

// //loading complete
// const hideLoadingSpinner = () =>{
//     loader.hidden = true;
//     quoteContainer.hidden = false;
// };

//Get Quote from API
const getQuote = async () => {
const apiUri ="http://quotes.stormconsultancy.co.uk/random.json";
 try{
   //showLadingSpinner();
    const response = await fetch(apiUri);
    const resData = await response.json();

//if no author => unknown
author.innerText = resData.author === '' ? 'Unknown' : resData.author;


//if quote>120 char => reduce font size
resData.quote.length >120
?quote.classList.add("long-quote")
:quote.classList.remove("long-quote")
quote.innerText = resData.quote; 

//hideLoadingSpinner();
    }catch(e){
    console.log("An error occurred...!",e)
}
};

//tweet
const tweet= ()=>{
    const quote =document.getElementById('quote').innerText;
    const author = document.getElementById('author').innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text =${quote} - ${author}`;
    window.open(twitterUrl, '_blanks');
}

//event listners
newQuoteButton.addEventListener("click", getQuote);
twitterButton.addEventListener('click', tweet)



//on Load
getQuote(); 






























