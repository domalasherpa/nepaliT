
const menubtn = document.querySelector(".menu-btn");
const menuDisplay = document.querySelector(".menuDisplay");
const keyChallenge = document.querySelector(".keyboardChallenge");

menubtn.addEventListener('click', ()=>{
    menubtn.classList.toggle("active");
    if(menubtn.classList.contains("active")){
        menuDisplay.style.display = "grid";
        keyChallenge.style.display = "none";
    }else{
        menuDisplay.style.display = "none";
        keyChallenge.style.display = "block";
    }
})

const char_map = {
    "क":"s",
    "ख":"v",
    "ग":"u",
    "घ":"3",
    "ङ":"Alt+0170",
    "ङ्": "Alt+0170+\\",
    "च":"r",
    "छ":"5",
    "ज":"h",
    "झ":"em",
    "ञ":"`",
    "ट":"6",
    "ठ":"7",
    "ड":"8",
    "ढ":"9",
    "ण":"0f",
    "त":"t",
    "थ":"y",
    "द":"b",
    "ध":"w",
    "न":"g",
    "प":"k",
    "फ":"km",
    "ब":"a",
    "भ":"e",
    "म":"d",
    "य":"o",
    "र":"/",
    "ल":"n",
    "व":"j",
    "श":"z",
    "ष":"if",
    "स":";",
    "ह":"x",
    "क्ष":"If",
    "त्र":"q",
    "ज्ञ":"1",
    "क्":"S",
    "क्":"V",
    "ग्":"U",
    "घ्":"Alt+0163",
    "च्":"R",
    "ज्":"H",
    "झ्":"Alt+0137",
    "ञ्":"~",
    "ण्":"0",
    "त्":"T",
    "थ्":"Y",
    "ध्":"W",
    "न्":"G",
    "प्":"K",
    "ब्":"A",
    "भ्":"E",
    "७":"&",
    "ल्":"N",
    "व्":"J",
    "श्":"Z",
    "ष्":"i",
    "स":";",
    "क्ष्":"I",
    "ज्ञ्":"Alt+0161",
    "अ":"c",
    "आ":"cf",
    "इ":"O",
    "ई":"O{",
    "उ":"p",
    "ऊ":"pm",
    "ऋ":"C",
    "ए":"P",
    "ऐ":"P]",
    "ओ":"cf]",
    "औ":"cf}",
    "अं":"c+",
    "अः":"cM",
    "ॐ":"Alt+0231",
    "ङ्क":"Alt+0205",
    "ङ्ख":"Alt+0206",
    "ङ्ग":"Alt+0203",
    "ङ्घ":"Alt+0139",
    "ट्ट":"Alt+0167",
    "ठ्ठ":"Alt+0182",
    "ङ्ढ":"Alt+0176",
    "ड्ड":"Alt+0149",
    "त्त":"Q",
    "क्त":"Qm",
    "द्व":"Alt+0229",
    "द्ध":"4",
    "द्घ":"Alt+0162",
    "दृ":"b[",
    "द्र":"Alt+0155",
    "ध्र":"Alt+0132",
    "द्य":"B",
    "न्न":"Alt+0204",
    "फ्":"Alt+0136",
    "्य":"Alt+0216",
    "्र":"Alt+0171",
    "्र":"|",
    "र्‍":"Alt+0165",
    "र्‍य":"Alt+0165+o",
    "रु":"?",
    "रू":"Alt+0191",
    "श्र":">",
    "":"x|",
    "ह्":"X",
    "द्द":"2",
    "द्म":"Alt+0223",
    "ा":"f",
    "ि":"l",
    "ी":"L",
    "े":"]",
    "ै":"}",
    ".":"=",
    "ं":"+",
    "ँ":"F",
    "ः":"M",
    "ृ":"[",
    "{":"{",
    "्":"\\",
    ",":",",
    "“":"Alt+0230",
    "”":"Alt+0198",
    "(":"-",
    ")":"_",
    "¨":"Alt+0210",
    "–":"Alt+0150",
    "—":"Alt+0151",
    "‘":"Alt+0133",
    "’":"Alt+0218",
    "/":"Alt+0247",
    "?":"<",
    "।":".",
    "%":"Alt+0220",
    "!":"Alt+0219",
    "+":"Alt+0177",
    "१":"!",
    "२":"@",
    "३":"#",
    "४":"$",
    "५":"%",
    "६":"^",
    "७":"&",
    "८":"*",
    "९":"(",
    "०":")"
}

const c = document.querySelector(".mapDisplay");

Object.entries(char_map).map((entry, index)=>{
    const key = entry[0], value = entry[1];

    if(index % 20 == 0){
        let n = document.createElement("div");
        n.classList.add("div" +Math.floor(index / 20));
        c.append(n);
    }
    let newDiv = document.querySelector(".div"+Math.floor(index / 20));
    const d = document.createElement("div");
    d.innerHTML = `<span class="key">${key}</span><span class="value" style="color:#faf9f6">${char_map[key]}</span>`;
    newDiv.appendChild(d);
});