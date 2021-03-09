window.onload = () => {
    document.querySelector('.card').classList.add(randomSuit());
    document.querySelector('#number').innerHTML = randomNumber();
};

let randomSuit = () => {
    let suit = ["spade", "club", "hearts", "diams"];
    let cardIcon = Math.floor(Math.random() * suit.length);
    return suit[cardIcon]
};

let randomNumber = () => {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let cardNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[cardNumbers];
};


