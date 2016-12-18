var quotes = ['"Success is the result of perfection, hardwork, learning from failure and persistence"--Colin Powel', '"Don\'t wish it were easier. Wish you were better"--Jim Rohn',
              '"There are no shortcuts to any places worth going"--Beverly Sills',
              '"Determine never to be idle. No person will have occasion to complain of the want of time, who never loses any. It is wonderful how much may be done, if we are always doing."--Thomas Jeferson',
            '"If people knew how hard I had to work to gain my mastery, it would not seem so wonderful at all."--Michelangelo Bounarroti',
            '"Hard work beats talent when talent fails to work hard."--Kevin Durant']

function newQuotes() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    var tweet = "https://twitter.com/intent/tweet?text=" + quotes[randomNumber];
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
    document.getElementById("twitterid").setAttribute("href",tweet);
    twttr.widgets.load(document.getElementById("twitterid"))

}

function deleteQuotes() {
    document.getElementById("quoteDisplay").innerHTML = " ";
}
