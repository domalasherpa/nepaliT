
async function getRandomWords(){
    try{
        let randomWords = await fetch('https://randomnepaliwords.azurewebsites.net/api/httptrigger1');
        randomWords = await randomWords.json();
        console.log(randomWords["randomWords"]);
        return randomWords["randomWords"];
    }
    catch(error){
        console.log("client error: ", error);
        return [];
    }
}

export var randomWords = await getRandomWords();