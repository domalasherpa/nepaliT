
async function getRandomWords(){
    try{
        let randomWords = await fetch('http://localhost:7071/api/httpTrigger1');
        randomWords = await randomWords.json();
        return randomWords["randomWords"];
    }
    catch(error){
        console.log("client error: ", error);
        return [];
    }
}

export async function showRandomWords(){
    let randomWords = await getRandomWords();
    const wordDisplay = document.querySelector(".wordDisplay");
    const randomWord= document.createElement('p');
    const charDisplay = document.createElement("p");
    
    let word = randomWords[0];
    randomWord.innerText = word;
    randomWord.classList.add("randomWord");
    charDisplay.classList.add("charDisplay");

    wordDisplay.appendChild(randomWord);
    for(let i = 0; i < word.length; i++){
        let singleRandomChar = document.createElement("span");
        singleRandomChar.innerText = word[i];
        charDisplay.appendChild(singleRandomChar);
    };

    wordDisplay.appendChild(charDisplay);
    wordDisplay.classList.add("arya-regular");
}
