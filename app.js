// a= 1213;
// b="jhkkkkk"
// c=true
// console.log(b)

// es5 => if else switch
// es6 => ternary operator

//condition ? true/if case        : else case/false;
//num1>num2 ? console.log("Num1") : console.log('Num2')

// var sum1 =(a,b) =>a+b;     //es6
// console.log(sum1(1,2))
// function sum(a,b){     //es5
//     return a  + b ;
// }
// console.log(sum(1,2))

// // function isPositive(number){ //es6
// //     return number >= 0;
// // }
// var isPositive = number => number >=0;/ /es6
// console.log(isPositive(1)) //extra line

// var object= isPositive(2)
// // console.log(object)

// function randomNumber(){
//     return Math.round();
// }
// var randomNumber = () =>Math.round();
// console.log(randomNumber)

//check 2 number and return true..if one of the number is 100 OR The sum of those two numbers is 100
// var myFunc = (num1,num2) => num1 ===100 
// console.log(myFunc(5,95))

// var myFunc = (num1,num2) => num1 ===100 ||  num2 === 100 || num1 +num2 ===100
// console.log(myFunc(5,95))
// console.log(myFunc(10,20))


// var text ="sdfdf";
// console.log(text.length)

// var str =" the ifind way Find Place"
// console.log(str.indexOf('ifind'))
// console.log(str.lastIndexOf('ifind'))
// console.log(str.indexOf('ifind' , 6 ))

// console.log(str.search('ifind',0))

// var str ="cricket ,football , hockey"
// //console.log(str.slice(7))
// console.log(str.slice(9, -8)) ///9 se -8 tk



// var newStr =" the most used language is javascript"
// console.log(newStr.replace("javascript","java" )) //same as next line
// console.log(newStr.replace(/JAVASCRIPT/i,"java" )) //same as previous linne
// console.log(newStr.replace(/javascript/g,"java" )) //global//jaha bhi hai...


//class # 06
//var declare
// let[a,b,c ,d] = [1,2 ,3,4]
// console.log(a);

// let arr=["A","b"]
// //console.log(arr[0])
// //console.log(arr[0]="z")    
// //arr[3] ="D"                    //4

// //arr[arr.length] ="C"
// //console.log(arr);

// delete arr[0]
// console.log(arr)

//*********Toast Notification**********

// const btn = document.getElementById('btn');
// const container = document.getElementById('container');

// btn.addEventListener('click', ()=> {
//     createNotification();
// })
// const createNotification = () =>{
//     const notification = document.createElement('div')
//     notification.classList.add('toast');
//     notification.innerText= 'Skills Development';

//     container.appendChild(notification) 

// setTimeout(() => {
//     notification.remove();
// } , 3000)
// }

//************Auto Writer*********/
// const text ="Amber Rajput"

// let index=0;

// const textWriter =()=>{
//     document.body.innerText=text.slice(0,index)
//     index++;
//     if(index>text.length){
//         index=0
//     }
// }

// setInterval(()=>{
//     textWriter()
// },400)


//
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






























