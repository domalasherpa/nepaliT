
async function getRandomWords(){

    // return ["पूर्ण",
    // "बल",
    // "नीलो",
    // "वस्तु",
    // "निर्णय",
    // "सतह",
    // "गहिरो"];

    try{
        let randomWords = await fetch('/api/random-words');
        randomWords = await randomWords.json();
        console.log(randomWords["word"]);
        return randomWords["word"];
    }
    catch(error){
        console.log("client error: ", error);
        return [];
    }
}

export var randomWords = await getRandomWords();