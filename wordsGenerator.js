let randomWords = [];

async function getRandomWords(){
    try{
        // let randomWords = await fetch('http://localhost:7071/api/httpTrigger1');
        let randomWords = await fetch('https://randomnepaliwords.azurewebsites.net/api/httptrigger1');        
        randomWords = await randomWords.json();
        return randomWords["randomWords"];
    }
    catch(error){
        console.log("client error: ", error);
        return ["रूप", "म","आफ्नो","कि","उहाँले","थियो","को लागि","मा","हो","संग"]; //default data if there ara some lag.
    }
}

export async function loadRandomWords(){
    //use local storage or session storage to reduce api hit 
    if(randomWords.length == 0){
        randomWords = await getRandomWords();
    }
    let randomWord = randomWords.pop(); //change this to random index pop
    return randomWord;
}

export function displayWord(word){
    const randomWord= document.querySelector(".randomWord");
    const charDisplay = document.querySelector(".charDisplay");
    
    randomWord.innerText = word;

    charDisplay.innerHTML = ""; //remove the previous chars
    for(let i = 0; i < word.length; i++){
        let singleRandomChar = document.createElement("span");
        singleRandomChar.innerText = word[i];
        charDisplay.appendChild(singleRandomChar);
    };

}