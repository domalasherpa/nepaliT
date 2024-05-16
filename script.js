var all_rules = {
    "preeti": {
        "name": "Preeti",
        "post-rules": [["्ा", ""], ["(त्र|त्त)([^उभप]+?)m", "$1m$2"], ["त्रm", "क्र"], ["त्तm", "क्त"], ["([^उभप]+?)m", "m$1"], ["उm", "ऊ"], ["भm", "झ"], ["पm", "फ"], ["इ{", "ई"], ["ि((.्)*[^्])", "$1ि"], ["(.[ािीुूृेैोौंःँ]*?){", "{$1"], ["((.्)*){", "{$1"], ["{", "र्"], ["([ाीुूृेैोौंःँ]+?)(्(.्)*[^्])", "$2$1"], ["्([ाीुूृेैोौंःँ]+?)((.्)*[^्])", "्$2$1"], ["([ंँ])([ािीुूृेैोौः]*)", "$2$1"], ["ँँ", "ँ"], ["ंं", "ं"], ["ेे", "े"], ["ैै", "ै"], ["ुु", "ु"], ["ूू", "ू"], ["^ः", ":"], ["टृ", "ट्ट"], ["ेा", "ाे"], ["ैा", "ाै"], ["अाे", "ओ"], ["अाै", "औ"], ["अा", "आ"], ["एे", "ऐ"], ["ाे", "ो"], ["ाै", "ौ"]],
        "v": "1.0.1",
        "char-map": {
            "÷": "/", "v": "ख", "r": "च", "\"": "ू", "~": "ञ्", "z": "श", "ç": "ॐ", "f": "ा", "b": "द", "n": "ल", "j": "व", "×": "×", "V": "ख्", "R": "च्", "ß": "द्म", "^": "६", "Û": "!", "Z": "श्", "F": "ँ", "B": "द्य", "N": "ल्", "Ë": "ङ्ग", "J": "व्", "6": "ट", "2": "द्द", "¿": "रू", ">": "श्र", ":": "स्", "§": "ट्ट", "&": "७", "£": "घ्", "•": "ड्ड", ".": "।", "«": "्र", "*": "८", "„": "ध्र", "w": "ध", "s": "क", "g": "न", "æ": "“", "c": "अ", "o": "य", "k": "प", "W": "ध्", "Ö": "=", "S": "क्", "Ò": "¨", "_": ")", "[": "ृ", "Ú": "’", "G": "न्", "ˆ": "फ्", "C": "ऋ", "O": "इ", "Î": "ङ्ख", "K": "प्", "7": "ठ", "¶": "ठ्ठ", "3": "घ", "9": "ढ", "?": "रु", ";": "स", "'": "ु", "#": "३", "¢": "द्घ", "/": "र", "+": "ं", "ª": "ङ", "t": "त", "p": "उ", "|": "्र", "x": "ह", "å": "द्व", "d": "म", "`": "ञ", "l": "ि", "h": "ज", "T": "त्", "P": "ए", "Ý": "ट्ठ", "\\": "्", "Ù": ";", "X": "ह्", "Å": "हृ", "D": "म्", "@": "२", "Í": "ङ्क", "L": "ी", "H": "ज्", "4": "द्ध", "±": "+", "0": "ण्", "<": "?", "8": "ड", "¥": "र्‍", "$": "४", "¡": "ज्ञ्", ",": ",", "©": "र", "(": "९", "‘": "ॅ", "u": "ग", "q": "त्र", "}": "ै", "y": "थ", "e": "भ", "a": "ब", "i": "ष्", "‰": "झ्", "U": "ग्", "Q": "त्त", "]": "े", "˜": "ऽ", "Y": "थ्", "Ø": "्य", "E": "भ्", "A": "ब्", "M": "ः", "Ì": "न्न", "I": "क्ष्", "5": "छ", "´": "झ", "1": "ज्ञ", "°": "ङ्ढ", "=": ".", "Æ": "”", "‹": "ङ्घ", "%": "५", "¤": "झ्", "!": "१", "-": "(", "›": "द्र", ")": "०", "…": "‘", "Ü": "%"
        }
    }
};

var keyBoardLayout = [
    [["`", "~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Backspace"]],
    [["Tab"], ["q", "Q"], ["w", "W"], ["e", "E"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["[", "{"], ["]", "}"], ["\\", "|"]],
    [["Caps"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], [";", ":"], ["'", "\""], ["Enter"]],
    [["Shift"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?"], ["Shift"]],
    [["Ctrl"], ["Fn"], ["win"], ["Alt"], ["Space"], ["Alt"], ["Ctrl"], ["left_arr"], ["down_arr"], ["right_arr"]]
]

export var jsKeyMap = { "CapsLock": "Caps", "ArrowLeft": "left_arr", "ArrowLeft": "left_arrr", "ArrowDown": "down_arr", "Control": "Ctrl", " ": "Space" };

export function generateKeyboard() {
    const keyboard = document.querySelector(".container");
    for (var i = 0; i < keyBoardLayout.length; i++) {
        const row = document.createElement("div");
        row.classList.add("row" + i);
        keyBoardLayout[i].forEach((item, index) => {
            const button = document.createElement("button");
            button.classList.add("item");
            button.classList.add(item[0]);

            if (item.length == 1) {
                button.innerText = item[0];
            }
            else {
                const span1 = document.createElement("span");
                const span2 = document.createElement("span");
                const span3 = document.createElement("span");
                const span4 = document.createElement("span");

                span1.innerText = all_rules["preeti"]["char-map"][item[0]] ?? "";
                span2.innerText = all_rules["preeti"]["char-map"][item[1]] ?? "";
                span3.innerText = item[0];
                span4.innerText = item[1];
                button.classList.add(item[1]);
                button.appendChild(span1);
                button.appendChild(span2);
                button.appendChild(document.createElement("br"));
                button.appendChild(span3);
                button.appendChild(span4);
            }
            row.appendChild(button);
        })
        keyboard.appendChild(row);
    }
}

export function preeti(text, font) {
    // get font rules - default to Preeti
    if (!font) {
        font = 'preeti';
    }
    //   font = font.toLowerCase();
    var myFont = all_rules[font];
    if (!myFont) {
        throw 'font not included in module';
    }

    var output = '';
    for (var w = 0; w < text.length; w++) {
        var letter = text[w];
        output += myFont['char-map'][letter] || letter;
    }
    for (var r = 0; r < myFont['post-rules'].length; r++) {
        output = output.replace(new RegExp(myFont['post-rules'][r][0], 'g'), myFont['post-rules'][r][1]);
    }
    return output;
}

